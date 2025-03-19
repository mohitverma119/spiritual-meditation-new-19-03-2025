"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { sacredKashmir } from "@/data/itineraryData";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ChevronRight,
  Calendar,
  MapPin,
  Users,
  Car,
  Phone,
  Mail,
  CreditCard,
  Clock,
  Heart,
  CheckCircle,
  Building,
  Landmark,
  Info,
  ArrowLeft
} from "lucide-react";

export default function ItineraryPage() {
  const shouldReduceMotion = useReducedMotion();
  const [expandedDays, setExpandedDays] = useState<string[]>([]);
  const [expandedSection, setExpandedSection] = useState<string>("overview");

  const fadeIn = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.4 },
      };

  const fadeInUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
      };

  const toggleDay = (day: string) => {
    setExpandedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const toggleSection = (section: string) => {
    setExpandedSection(section);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black-950">
      <Header />

      <main className="flex-grow pt-24 lg:pt-28 pb-20 cosmic-bg relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black-950 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black-950 to-transparent" />
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Page Header */}
          <div className="mb-10">
            <Link href="/#itinerary" className="inline-flex items-center text-gold-500 hover:text-gold-400 mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back to Homepage</span>
            </Link>
            <motion.h1
              {...fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-white">Sacred Kashmir </span>
              <span className="text-gradient">Itinerary</span>
            </motion.h1>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 max-w-3xl"
            >
              A transformative 15-day spiritual journey through the breathtaking
              landscapes and sacred sites of Kashmir, guided by renowned spiritual
              teacher Andrew Harvey.
            </motion.p>
          </div>

          {/* Tabbed Navigation */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="mb-10 border-b border-white/10 flex flex-wrap gap-2"
          >
            <button
              onClick={() => toggleSection("overview")}
              className={`py-3 px-4 text-base sm:text-lg transition-colors ${
                expandedSection === "overview"
                  ? "text-gold-500 border-b-2 border-gold-500"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Tour Overview
            </button>
            <button
              onClick={() => toggleSection("itinerary")}
              className={`py-3 px-4 text-base sm:text-lg transition-colors ${
                expandedSection === "itinerary"
                  ? "text-gold-500 border-b-2 border-gold-500"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Daily Itinerary
            </button>
            <button
              onClick={() => toggleSection("accommodations")}
              className={`py-3 px-4 text-base sm:text-lg transition-colors ${
                expandedSection === "accommodations"
                  ? "text-gold-500 border-b-2 border-gold-500"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Accommodations
            </button>
            <button
              onClick={() => toggleSection("policies")}
              className={`py-3 px-4 text-base sm:text-lg transition-colors ${
                expandedSection === "policies"
                  ? "text-gold-500 border-b-2 border-gold-500"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Policies
            </button>
            <button
              onClick={() => toggleSection("contact")}
              className={`py-3 px-4 text-base sm:text-lg transition-colors ${
                expandedSection === "contact"
                  ? "text-gold-500 border-b-2 border-gold-500"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Contact & Payment
            </button>
          </motion.div>

          {/* Tour Overview Section */}
          {expandedSection === "overview" && (
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-black-900/40 backdrop-blur-sm border border-gold-500/20 rounded-xl p-6 md:p-8 h-full">
                    <h2 className="text-2xl font-semibold text-white mb-6">About The Tour</h2>
                    <p className="text-white/80 mb-6">
                      Experience a transformative spiritual journey unlike any other. This exclusive 15-day retreat is crafted for seekers looking to explore the depths of spiritual traditions in one of the world's most mystically charged landscapes.
                    </p>
                    <p className="text-white/80 mb-6">
                      Kashmir, often called "Paradise on Earth," is not just renowned for its natural beauty but also for its rich spiritual heritage where Hindu, Buddhist, and Sufi traditions have converged for centuries. Andrew Harvey, a renowned spiritual teacher and scholar, will guide you through sacred sites, meditation practices, and cultural experiences that open doorways to profound inner transformation.
                    </p>
                    <p className="text-white/80 mb-6">
                      The journey includes visits to ancient temples, Sufi shrines, pristine natural settings, and cultural immersions. You'll participate in daily meditation sessions, sacred ceremonies, and have opportunities for one-on-one spiritual healing sessions.
                    </p>
                    <p className="text-white/80">
                      Accommodations are carefully selected for their tranquil settings and authentic cultural atmosphere, allowing you to fully absorb the transformative energies of Kashmir while enjoying comfort and hospitality.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="bg-black-900/40 backdrop-blur-sm border border-gold-500/20 rounded-xl p-6 md:p-8 h-full">
                    <h2 className="text-2xl font-semibold text-white mb-6">Tour Details</h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-white font-medium">Duration</h3>
                          <p className="text-white/70">{sacredKashmir.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-white font-medium">Destinations</h3>
                          <p className="text-white/70">{sacredKashmir.destinations.join(", ")}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-white font-medium">Group Size</h3>
                          <p className="text-white/70">{sacredKashmir.groupSize}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Car className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-white font-medium">Transportation</h3>
                          <p className="text-white/70">{sacredKashmir.transportation.join(" & ")}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-white font-medium">Expected Date</h3>
                          <p className="text-white/70">{sacredKashmir.expectedDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black-900/40 backdrop-blur-sm border border-gold-500/20 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Tour Inclusions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sacredKashmir.inclusions.map((inclusion, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{inclusion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Daily Itinerary Section */}
          {expandedSection === "itinerary" && (
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="space-y-5"
            >
              <div className="bg-black-900/40 backdrop-blur-sm border border-gold-500/20 rounded-xl p-6 md:p-8 mb-6">
                <h2 className="text-2xl font-semibold text-white mb-4">Your 15-Day Sacred Journey</h2>
                <p className="text-white/80">
                  Each day of this transformative journey has been carefully designed to balance spiritual practices, cultural experiences, and personal exploration. Click on each day to explore the detailed activities and highlights.
                </p>
              </div>

              {sacredKashmir.days.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.03, duration: 0.4 }}
                  className="bg-black-900/30 backdrop-blur-sm border border-white/10 hover:border-gold-500/30 transition-all duration-300 rounded-lg overflow-hidden"
                >
                  <div
                    className="flex items-center justify-between p-5 cursor-pointer"
                    onClick={() => toggleDay(day.day)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-gold-500 font-medium">
                          {day.day.replace("Day ", "")}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-lg sm:text-xl">{day.title}</h3>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 text-gold-500 transition-transform duration-300 ${
                        expandedDays.includes(day.day) ? "rotate-90" : ""
                      }`}
                    />
                  </div>

                  {expandedDays.includes(day.day) && (
                    <div className="p-5 pt-0 border-t border-white/10">
                      <ul className="space-y-3 mb-6">
                        {day.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start gap-3">
                            <ChevronRight className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                            <span className="text-white/80">{activity}</span>
                          </li>
                        ))}
                      </ul>

                      {day.highlights && day.highlights.length > 0 && (
                        <div className="mt-6 pt-4 border-t border-white/10 bg-gold-500/5 -mx-5 px-5 py-4 rounded-b-lg">
                          <h4 className="text-white font-medium mb-3 flex items-center">
                            <Heart className="h-4 w-4 mr-2 text-gold-500" />
                            Highlights & Notes
                          </h4>
                          <ul className="space-y-3">
                            {day.highlights.map((highlight, hlIndex) => (
                              <li key={hlIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0"></div>
                                <span className="text-white/70">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}

              <div className="mt-8 text-center">
                <Button
                  onClick={() => setExpandedDays(
                    expandedDays.length === sacredKashmir.days.length
                      ? []
                      : sacredKashmir.days.map((d) => d.day)
                  )}
                  variant="outline"
                  className="border-gold-500/50 text-gold-500 hover:bg-gold-500/10"
                >
                  {expandedDays.length === sacredKashmir.days.length
                    ? "Collapse All Days"
                    : "Expand All Days"}
                </Button>
              </div>
            </motion.div>
          )}

          {/* Accommodations Section */}
          {expandedSection === "accommodations" && (
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-black-900/40 backdrop-blur-sm border border-gold-500/20 rounded-xl p-6 md:p-8 mb-6">
                <div className="flex items-start gap-4">
                  <Building className="h-8 w-8 text-gold-500 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Accommodation Details</h2>
                    <p className="text-white/80">
                      We've carefully selected accommodations that blend comfort with spiritual ambiance, allowing you to fully immerse in the sacred energy of Kashmir while enjoying modern amenities and exceptional service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sacredKashmir.accommodations.map((accommodation, index) => (
                  <div
                    key={index}
                    className="bg-black-900/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-white mb-2">
                        {accommodation.location}
                      </h3>
                      <p className="text-gold-500 mb-4">{accommodation.nights}</p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Landmark className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-white font-medium">Resort</h4>
                            <p className="text-white/70">{accommodation.resort}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Info className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-white font-medium">About</h4>
                            <p className="text-white/70">
                              {accommodation.location === "Srinagar" ?
                                "Nestled in the heart of Srinagar, MAQAM offers a serene retreat with traditional Kashmiri architecture and modern amenities. The resort's spiritual ambiance provides the perfect setting for meditation and reflection." :
                                "Located in the scenic Pahalgam valley, SOJOURN COTTAGES blend into the natural landscape, offering comfortable cottages with panoramic mountain views and tranquil surroundings ideal for spiritual contemplation."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <p className="text-white/80">
                    All accommodations have been privately booked for our group to ensure privacy and maintain the spiritual atmosphere throughout your journey.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Policies Section */}
          {expandedSection === "policies" && (
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-black-900/40 backdrop-blur-sm border border-gold-500/20 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Booking & Cancellation Policies</h2>

                <div className="space-y-4">
                  {sacredKashmir.policies.map((policy, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <p className="text-white/80">{policy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Contact & Payment Section */}
          {expandedSection === "contact" && (
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-black-900/40 backdrop-blur-sm border border-gold-500/20 rounded-xl p-6 md:p-8">
                  <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-white font-medium mb-1">Phone</h3>
                        <p className="text-white/80">{sacredKashmir.contact.phone[0]}</p>
                        <p className="text-white/80">{sacredKashmir.contact.phone[1]}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-white font-medium mb-1">Website</h3>
                        <p className="text-white/80">{sacredKashmir.contact.website}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-white font-medium mb-1">Address</h3>
                        <p className="text-white/80">{sacredKashmir.contact.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black-900/40 backdrop-blur-sm border border-gold-500/20 rounded-xl p-6 md:p-8">
                  <h2 className="text-2xl font-semibold text-white mb-6">Payment Details</h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CreditCard className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-white font-medium mb-3">Bank Transfer Information</h3>

                        <div className="space-y-2">
                          <div>
                            <p className="text-white/60 text-sm">Account Title</p>
                            <p className="text-white">{sacredKashmir.paymentDetails.accountTitle}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-sm">Account Number</p>
                            <p className="text-white">{sacredKashmir.paymentDetails.accountNumber}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-sm">IFSC Code</p>
                            <p className="text-white">{sacredKashmir.paymentDetails.ifscCode}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-sm">Branch</p>
                            <p className="text-white">{sacredKashmir.paymentDetails.branch}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-sm">UPI ID</p>
                            <p className="text-white">{sacredKashmir.paymentDetails.upiId}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <p className="text-white/80">
                        Please include your name and trip dates when making payment. We recommend travelers are requested to pay the booking amount 90 days prior to arrival.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="text-white">Ready to Embark on Your </span>
              <span className="text-gradient">Sacred Journey?</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              This transformative experience is limited to just 15 participants. Secure your place on this extraordinary spiritual pilgrimage through the mystical landscapes of Kashmir.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 font-medium px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-gold-500/20 hover:shadow-xl"
            >
              Book Your Journey Now
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
