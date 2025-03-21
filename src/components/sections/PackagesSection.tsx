"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { packages } from "@/data/packagesData";
import Image from "next/image";
import { MapPin, Calendar, Users, Star } from "lucide-react";

export default function PackagesSection() {
  // Display only the first 3 packages on the homepage
  const featuredPackages = packages.filter(pkg => pkg.featured).slice(0, 3);

  return (
    <section id="packages" className="py-16 md:py-20 bg-black-950 relative overflow-hidden cosmic-bg">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black-600 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black-900 to-transparent" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-red-500/5 blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-gold-500/20 to-red-500/20 rounded-full">
            <span className="text-white text-sm font-medium">Spiritual Journeys</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="text-gradient">Packages</span>
          </h2>
          <p className="text-lg text-white">
            Experience meticulously crafted spiritual journeys through the mystical landscapes of Kashmir.
            Each package is thoughtfully designed to offer profound spiritual experiences and cultural immersion.
          </p>
        </div>

        {/* Featured Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="bg-black-500/40 backdrop-blur-sm border border-white/10 hover:border-gold-500/20 rounded-xl overflow-hidden transition-all duration-300 animate-fade-in-up hover-lift hover-glow"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Package Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent/30" />
                <div className="absolute top-4 left-4 bg-gold-500/90 text-black-950 text-xs font-medium rounded-full px-3 py-1">
                  {pkg.category[0].charAt(0).toUpperCase() + pkg.category[0].slice(1)}
                </div>
                <div className="absolute bottom-4 right-4 flex items-center bg-black/60 text-white text-xs font-medium rounded-full px-2 py-1">
                  <Star className="w-3 h-3 mr-1 text-gold-500" fill="currentColor" />
                  <span>{pkg.rating}</span>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-1">{pkg.title}</h3>
                <p className="text-white/60 text-sm mb-4">{pkg.subtitle}</p>

                <div className="flex flex-col space-y-2 mb-4">
                  <div className="flex items-center text-white/80 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-gold-500" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center text-white/80 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-gold-500" />
                    <span>{pkg.locations.join(', ')}</span>
                  </div>
                  <div className="flex items-center text-white/80 text-sm">
                    <Users className="w-4 h-4 mr-2 text-gold-500" />
                    <span>Small groups (max 15)</span>
                  </div>
                </div>

                {/* Price and View Details */}
                <div className="flex justify-between items-center pt-4 mt-2 border-t border-white/10">
                  <div>
                    <span className="text-white/60 text-xs">Starting from</span>
                    <div className="text-gold-500 text-xl font-bold">{pkg.price}</div>
                  </div>
                  <Link href={`/packages/${pkg.id}`}>
                    <Button
                      variant="outline"
                      className="text-gold-500 border-gold-500/50 hover:bg-gold-500/10 hover:text-gold-600"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Packages Button */}
        <div className="text-center mt-10 animate-fade-in delay-500">
          <Link href="/packages">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 font-medium px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-gold-500/20 hover:shadow-xl hover-lift"
            >
              View All Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
