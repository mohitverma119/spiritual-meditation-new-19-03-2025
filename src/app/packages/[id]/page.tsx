"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { packages } from "@/data/packagesData";
import Image from "next/image";
import {
  MapPin, Calendar, Users, Star, Check, ChevronRight, ArrowLeft,
  Clock, CreditCard, Map, Heart, Share2
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

// Change from server component to client component with useParams hook
export default function PackageDetailPage() {
  // Get the id from the URL params
  const params = useParams();
  const id = params?.id as string;

  const pkg = packages.find(p => p.id === id);

  if (!pkg) {
    return notFound();
  }

  // Find other packages in the same category for recommendations
  const relatedPackages = packages
    .filter(p => p.id !== pkg.id && p.category.some(cat => pkg.category.includes(cat)))
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-black-950">
      <Header />

      {/* Main content wrapper */}
      <div className="flex-grow flex flex-col">
        {/* Hero Banner */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-black">
          <div className="absolute inset-0">
            <Image
              src={pkg.image}
              alt={pkg.title}
              fill
              className="object-cover"
              priority
              crossOrigin="anonymous"
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.5)', // Solid black with 50% opacity
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative h-full flex flex-col justify-end py-12 z-10">
            <div className="animate-fade-in mb-8">
              {/* Back Button */}
              <Link href="/packages" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Packages
              </Link>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                {pkg.category.map(cat => (
                  <span
                    key={cat}
                    className="bg-gold-500/90 text-black-950 text-xs font-medium rounded-full px-3 py-1"
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {pkg.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-2">{pkg.subtitle}</p>

              {/* Rating and Reviews */}
              <div className="flex items-center text-white/80 mt-4">
                <div className="flex items-center mr-4">
                  <Star className="w-5 h-5 text-gold-500 mr-1" fill="currentColor" />
                  <span className="font-medium">{pkg.rating}</span>
                  <span className="mx-1">•</span>
                  <span>{pkg.reviewCount} reviews</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Package Content */}
        <section className="py-12 md:py-16 bg-black-950 flex-1">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-2/3">
                {/* Overview */}
                <div className="bg-black-400/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 mb-8 animate-fade-in">
                  <h2 className="text-2xl font-semibold text-white mb-6">Overview</h2>
                  <p className="text-white/80 leading-relaxed mb-8">
                    {pkg.description}
                  </p>

                  {/* Key Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center text-white/80">
                      <Calendar className="w-5 h-5 text-gold-500 mr-3" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <MapPin className="w-5 h-5 text-gold-500 mr-3" />
                      <span>{pkg.locations.join(', ')}</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <Users className="w-5 h-5 text-gold-500 mr-3" />
                      <span>Small groups (max 15)</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <CreditCard className="w-5 h-5 text-gold-500 mr-3" />
                      <span>Secure payment options</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-black-400/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 mb-8 animate-fade-in delay-100">
                  <h2 className="text-2xl font-semibold text-white mb-6">Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pkg.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-gold-500/20 rounded-full p-1 mr-3 mt-0.5">
                          <Check className="w-4 h-4 text-gold-500" />
                        </div>
                        <span className="text-white/80">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Itinerary */}
                <div className="bg-black-400/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 mb-8 animate-fade-in delay-200">
                  <h2 className="text-2xl font-semibold text-white mb-6">Itinerary</h2>
                  <div className="space-y-6">
                    {pkg.itinerary.map((day, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-gold-500/30 pl-6 pb-6 relative"
                      >
                        {/* Day marker */}
                        <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-gold-500"></div>

                        <h3 className="text-xl font-medium text-white mb-2">{day.day}: {day.title}</h3>
                        <ul className="space-y-3 mt-4">
                          {day.activities.map((activity, actIdx) => (
                            <li key={actIdx} className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                              <span className="text-white/80">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accommodation */}
                <div className="bg-black-400/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 mb-8 animate-fade-in delay-300">
                  <h2 className="text-2xl font-semibold text-white mb-6">Accommodation</h2>
                  <div className="space-y-4">
                    {pkg.accommodation.map((acc, index) => (
                      <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-black-950/50 rounded-lg border border-white/5">
                        <div>
                          <h4 className="text-white font-medium">{acc.location}</h4>
                          <p className="text-gold-500">{acc.resort}</p>
                        </div>
                        <div className="mt-2 md:mt-0 text-white/70">
                          <Clock className="w-4 h-4 inline-block mr-1" />
                          {acc.nights}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions */}
                <div className="bg-black-400/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 animate-fade-in delay-400">
                  <h2 className="text-2xl font-semibold text-white mb-6">What's Included</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pkg.inclusions.map((inclusion, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5 mr-3" />
                        <span className="text-white/80">{inclusion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                {/* Pricing and Booking */}
                <div className="bg-black-600/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 lg:sticky lg:top-24 animate-fade-in">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-white/60 text-sm">Starting from</span>
                      <div className="text-gold-500 text-3xl font-bold">{pkg.price}</div>
                      <span className="text-white/60 text-sm">per person</span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-10 h-10 rounded-full text-white/70 border-white/20 hover:text-gold-500 hover:border-gold-500/30"
                      >
                        <Heart className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-10 h-10 rounded-full text-white/70 border-white/20 hover:text-gold-500 hover:border-gold-500/30"
                      >
                        <Share2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 font-medium py-6 rounded-lg shadow-lg">
                      Book Now
                    </Button>
                  </div>

                  <div className="space-y-4 text-white/80 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-gold-500" />
                      <span>Available year-round</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Map className="w-5 h-5 text-gold-500" />
                      <span>Full itinerary with guided experiences</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-gold-500" />
                      <span>Small groups for a personal experience</span>
                    </div>
                  </div>

                  <div className="text-center mt-6 pt-6 border-t border-white/10">
                    <p className="text-white/60 text-sm mb-3">Need help planning your journey?</p>
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/5">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Packages */}
            {relatedPackages.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-semibold text-white mb-8">You Might Also Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPackages.map((relatedPkg, index) => (
                    <div
                      key={relatedPkg.id}
                      className="bg-black-600/40 backdrop-blur-sm border border-white/10 hover:border-gold-500/20 rounded-xl overflow-hidden transition-all duration-300 animate-fade-in-up hover-lift hover-glow"
                      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                    >
                      {/* Package Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPkg.image}
                          alt={relatedPkg.title}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                          crossOrigin="anonymous"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent/30" />
                        <div className="absolute top-4 left-4 bg-gold-500/90 text-black-950 text-xs font-medium rounded-full px-3 py-1">
                          {relatedPkg.category[0].charAt(0).toUpperCase() + relatedPkg.category[0].slice(1)}
                        </div>
                      </div>

                      {/* Package Content */}
                      <div className="p-6">
                        <h3 className="text-white text-xl font-semibold mb-1">{relatedPkg.title}</h3>
                        <p className="text-white/60 text-sm mb-4">{relatedPkg.subtitle}</p>

                        <div className="flex flex-col space-y-2 mb-4">
                          <div className="flex items-center text-white/80 text-sm">
                            <Calendar className="w-4 h-4 mr-2 text-gold-500" />
                            <span>{relatedPkg.duration}</span>
                          </div>
                        </div>

                        {/* Price and View Details */}
                        <div className="flex justify-between items-center pt-4 mt-2 border-t border-white/10">
                          <div>
                            <div className="text-gold-500 text-xl font-bold">{relatedPkg.price}</div>
                          </div>
                          <Link href={`/packages/${relatedPkg.id}`}>
                            <Button
                              variant="outline"
                              className="text-gold-500 border-gold-500/50 hover:bg-gold-500/10 hover:text-gold-400"
                            >
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
