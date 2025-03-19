"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { packages, packageCategories } from "@/data/packagesData";
import Image from "next/image";
import { MapPin, Calendar, Users, Star, Search, Filter, X } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PackagesPage() {
  const [filteredPackages, setFilteredPackages] = useState(packages);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [durationFilter, setDurationFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    // Apply filters
    let result = packages;

    // Search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(pkg =>
        pkg.title.toLowerCase().includes(term) ||
        pkg.subtitle.toLowerCase().includes(term) ||
        pkg.description.toLowerCase().includes(term) ||
        pkg.locations.some(loc => loc.toLowerCase().includes(term))
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(pkg =>
        selectedCategories.some(cat => pkg.category.includes(cat))
      );
    }

    // Price filter
    result = result.filter(pkg => {
      const priceNum = parseInt(pkg.price.replace(/[^0-9]/g, ""));
      return priceNum >= priceRange[0] && priceNum <= priceRange[1];
    });

    // Duration filter
    if (durationFilter !== "all") {
      result = result.filter(pkg => {
        const days = parseInt(pkg.duration.split(" ")[0]);

        switch(durationFilter) {
          case "short": return days <= 7;
          case "medium": return days > 7 && days <= 10;
          case "long": return days > 10;
          default: return true;
        }
      });
    }

    setFilteredPackages(result);
  }, [searchTerm, selectedCategories, priceRange, durationFilter]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 5000]);
    setDurationFilter("all");
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-black-950">
      <Header />

      {/* Main content wrapper - using flex-col to push content down */}
      <div className="flex-grow flex flex-col">
        {/* Hero Banner */}
        <section className="py-16 md:py-20 bg-meditation cosmic-bg">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black-950 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black-950 to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Our </span>
                <span className="text-gradient">Spiritual Packages</span>
              </h1>
              <p className="text-lg text-white mb-8">
                Discover our carefully curated collection of spiritual journeys through the sacred lands of Kashmir.
                Each package offers a unique blend of spiritual practices, cultural experiences, and natural beauty.
              </p>

              {/* Search bar */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search packages, destinations, or experiences..."
                    className="w-full bg-black-900/60 border border-white/20 focus:border-gold-500/50 rounded-full px-5 py-3 pl-12 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-gold-500/30"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content section - forced to display properly */}
        <section className="py-12 md:py-16 bg-black-950 flex-1">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Mobile filters toggle */}
              <div className="lg:hidden flex justify-between items-center mb-6">
                <Button
                  onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                  variant="outline"
                  className="text-white border-white/20 hover:bg-white/10"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters {selectedCategories.length > 0 && `(${selectedCategories.length})`}
                </Button>

                {(selectedCategories.length > 0 || durationFilter !== "all" || searchTerm) && (
                  <Button
                    onClick={resetFilters}
                    variant="ghost"
                    className="text-white/70 hover:text-white"
                  >
                    Reset
                  </Button>
                )}
              </div>

              {/* Filters sidebar - desktop always visible, mobile conditional */}
              <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} lg:block lg:w-64 flex-shrink-0`}>
                <div className="bg-black-900/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 lg:sticky lg:top-24">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-white">Filters</h3>
                    <Button
                      onClick={resetFilters}
                      variant="ghost"
                      className="text-white/70 hover:text-white text-sm p-0 h-auto hidden lg:block"
                    >
                      Reset all
                    </Button>
                    <Button
                      onClick={() => setMobileFiltersOpen(false)}
                      variant="ghost"
                      className="text-white/70 hover:text-white p-0 h-auto lg:hidden"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Category filter */}
                  <div className="mb-8">
                    <h4 className="text-white font-medium mb-3">Categories</h4>
                    <div className="space-y-2">
                      {packageCategories.map((category) => (
                        <label key={category.value} className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category.value)}
                            onChange={() => toggleCategory(category.value)}
                            className="sr-only"
                          />
                          <span className={`w-4 h-4 mr-2 border rounded flex-shrink-0 ${
                            selectedCategories.includes(category.value)
                              ? 'bg-gold-500 border-gold-500'
                              : 'border-white/40'
                          }`}>
                            {selectedCategories.includes(category.value) && (
                              <span className="flex items-center justify-center text-black text-xs">✓</span>
                            )}
                          </span>
                          <span className="text-white/80">{category.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Duration filter */}
                  <div className="mb-8">
                    <h4 className="text-white font-medium mb-3">Duration</h4>
                    <div className="space-y-2">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          checked={durationFilter === "all"}
                          onChange={() => setDurationFilter("all")}
                          className="sr-only"
                        />
                        <span className={`w-4 h-4 mr-2 border rounded-full flex-shrink-0 ${
                          durationFilter === "all"
                            ? 'border-gold-500'
                            : 'border-white/40'
                        }`}>
                          {durationFilter === "all" && (
                            <span className="block w-2 h-2 mx-auto mt-1 bg-gold-500 rounded-full"></span>
                          )}
                        </span>
                        <span className="text-white/80">All durations</span>
                      </label>

                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          checked={durationFilter === "short"}
                          onChange={() => setDurationFilter("short")}
                          className="sr-only"
                        />
                        <span className={`w-4 h-4 mr-2 border rounded-full flex-shrink-0 ${
                          durationFilter === "short"
                            ? 'border-gold-500'
                            : 'border-white/40'
                        }`}>
                          {durationFilter === "short" && (
                            <span className="block w-2 h-2 mx-auto mt-1 bg-gold-500 rounded-full"></span>
                          )}
                        </span>
                        <span className="text-white/80">Short (1-7 days)</span>
                      </label>

                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          checked={durationFilter === "medium"}
                          onChange={() => setDurationFilter("medium")}
                          className="sr-only"
                        />
                        <span className={`w-4 h-4 mr-2 border rounded-full flex-shrink-0 ${
                          durationFilter === "medium"
                            ? 'border-gold-500'
                            : 'border-white/40'
                        }`}>
                          {durationFilter === "medium" && (
                            <span className="block w-2 h-2 mx-auto mt-1 bg-gold-500 rounded-full"></span>
                          )}
                        </span>
                        <span className="text-white/80">Medium (8-10 days)</span>
                      </label>

                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          checked={durationFilter === "long"}
                          onChange={() => setDurationFilter("long")}
                          className="sr-only"
                        />
                        <span className={`w-4 h-4 mr-2 border rounded-full flex-shrink-0 ${
                          durationFilter === "long"
                            ? 'border-gold-500'
                            : 'border-white/40'
                        }`}>
                          {durationFilter === "long" && (
                            <span className="block w-2 h-2 mx-auto mt-1 bg-gold-500 rounded-full"></span>
                          )}
                        </span>
                        <span className="text-white/80">Long (11+ days)</span>
                      </label>
                    </div>
                  </div>

                  {/* Price filter */}
                  <div>
                    <h4 className="text-white font-medium mb-3">Price Range</h4>
                    <div className="px-2">
                      <div className="flex justify-between text-white/80 text-sm mb-2">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        step="100"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full accent-gold-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Packages grid */}
              <div className="flex-1 min-h-[600px]">
                {/* Results info */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-white font-medium">
                    {filteredPackages.length} {filteredPackages.length === 1 ? 'package' : 'packages'} found
                  </h2>

                  <div className="text-white/60 text-sm">
                    Showing all results
                  </div>
                </div>

                {/* Packages grid */}
                {filteredPackages.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPackages.map((pkg, index) => (
                      <div
                        key={pkg.id}
                        className="bg-black-900/40 backdrop-blur-sm border border-white/10 hover:border-gold-500/20 rounded-xl overflow-hidden transition-all duration-300 animate-fade-in-up hover-lift hover-glow"
                        style={{ animationDelay: `${0.1 + index * 0.05}s` }}
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
                                className="text-gold-500 border-gold-500/50 hover:bg-gold-500/10"
                              >
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-black-900/20 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="text-white/40 text-5xl mb-4">🔍</div>
                    <h3 className="text-white text-xl font-medium mb-2">No packages found</h3>
                    <p className="text-white/60 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
                    <Button onClick={resetFilters} className="bg-gold-500 text-black-950 hover:bg-gold-600">
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
