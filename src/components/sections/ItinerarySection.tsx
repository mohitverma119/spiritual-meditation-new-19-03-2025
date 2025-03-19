"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { sacredKashmir } from "@/data/itineraryData";
import { ChevronRight, MapPin, Calendar, Users, Car } from "lucide-react";

export default function ItinerarySection() {
  const [expandedDays, setExpandedDays] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  // Display only the first 5 days in the homepage section
  const previewDays = sacredKashmir.days.slice(0, 5);

  return (
    <section id="itinerary" className="py-16 md:py-20 bg-black-950 relative overflow-hidden cosmic-bg">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black-950 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black-950 to-transparent" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-red-500/5 blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-gold-500/20 to-red-500/20 rounded-full">
            <span className="text-white text-sm font-medium">Sacred Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Your </span>
            <span className="text-gradient">Itinerary</span>
          </h2>
          <p className="text-lg text-white">
            Experience a meticulously crafted spiritual journey through the mystical
            landscapes of Kashmir. Each day is thoughtfully designed to offer profound
            spiritual experiences and cultural immersion.
          </p>
        </div>

        {/* Tour Overview */}
        <div className="bg-black-900/40 backdrop-blur-sm border border-gold-500/20 rounded-xl p-6 md:p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {sacredKashmir.tour}
              </h3>
              <p className="text-white/70 mb-6">
                A transformative spiritual journey through the sacred sites of Kashmir,
                guided by renowned spiritual teacher Andrew Harvey. This exclusive tour
                combines spiritual practices, cultural experiences, and natural beauty for a
                holistic journey of self-discovery.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gold-500" />
                  <span className="text-white">{sacredKashmir.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gold-500" />
                  <span className="text-white">
                    {sacredKashmir.destinations.join(", ")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-gold-500" />
                  <span className="text-white">{sacredKashmir.groupSize}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="h-5 w-5 text-gold-500" />
                  <span className="text-white">
                    {sacredKashmir.transportation.join(" & ")}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-medium text-white mb-4">Inclusions</h4>
              <ul className="space-y-2">
                {sacredKashmir.inclusions.slice(0, 6).map((inclusion, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{inclusion}</span>
                  </li>
                ))}
                {sacredKashmir.inclusions.length > 6 && (
                  <li className="text-gold-500 text-sm">
                    +{sacredKashmir.inclusions.length - 6} more inclusions
                  </li>
                )}
              </ul>

              <div className="mt-6">
                <h4 className="text-xl font-medium text-white mb-3">Accommodations</h4>
                <div className="space-y-2">
                  {sacredKashmir.accommodations.map((accommodation, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white/80">
                          {accommodation.location} ({accommodation.nights}):{" "}
                        </span>
                        <span className="text-gold-500 font-medium">
                          {accommodation.resort}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Itinerary Preview */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Daily Itinerary
          </h3>

          {previewDays.map((day, index) => (
            <div
              key={day.day}
              className="bg-black-900/30 backdrop-blur-sm border border-white/10 hover:border-gold-500/30 transition-all duration-300 rounded-lg overflow-hidden"
            >
              <div
                className="flex items-center justify-between p-4 sm:p-5 cursor-pointer"
                onClick={() => toggleDay(day.day)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold-500 font-medium">
                      {day.day.replace("Day ", "")}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">{day.title}</h4>
                  </div>
                </div>
                <ChevronRight
                  className={`h-5 w-5 text-gold-500 transition-transform duration-300 ${
                    expandedDays.includes(day.day) ? "rotate-90" : ""
                  }`}
                />
              </div>

              {expandedDays.includes(day.day) && (
                <div className="p-4 sm:p-5 pt-0 border-t border-white/10">
                  <ul className="space-y-2 mb-4">
                    {day.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{activity}</span>
                      </li>
                    ))}
                  </ul>

                  {day.highlights && day.highlights.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <h5 className="text-white text-sm font-medium mb-2">Highlights:</h5>
                      <ul className="space-y-2">
                        {day.highlights.map((highlight, hlIndex) => (
                          <li key={hlIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-gold-500 mt-1.5 flex-shrink-0"></div>
                            <span className="text-white/70 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View Full Itinerary Button */}
        <div className="text-center mt-10">
          <Link href="/itinerary">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 font-medium px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-gold-500/20 hover:shadow-xl"
            >
              View Complete Itinerary
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
