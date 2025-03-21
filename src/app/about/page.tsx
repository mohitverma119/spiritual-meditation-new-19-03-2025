"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black-950">
      <Header />

      <main className="flex-grow w-full mt-16 pt-8">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-meditation">
          {/* Background gradients */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black-600 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black-700 to-transparent" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl animate-pulse-slow animation-delay-1000" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full">
                <span className="text-white text-sm font-medium">Our Story</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">About </span>
                <span className="text-gradient">Us</span>
              </h1>
              <p className="text-base sm:text-lg white-text max-w-2xl mx-auto">
                Discover the journey and passion behind Wild World Wanderers, and our mission to create transformative spiritual experiences in the mystical beauty of Kashmir.
              </p>
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="py-16 md:py-24 bg-black-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-gold-500/20 to-amber-500/20 rounded-full">
                  <span className="text-white text-sm font-medium">Our Journey</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">Spiritual Beginnings</h2>
                <div className="space-y-4 text-white/80">
                  <p>
                    Wild World Wanderers was born from a profound spiritual awakening experienced by our founder during a solitary retreat in the Himalayan mountains of Kashmir in 2012.
                  </p>
                  <p>
                    Deeply moved by the transformative power of Kashmir's sacred landscapes and ancient spiritual traditions, we embarked on a mission to create mindful journeys that connect people with the divine energy of this mystical region.
                  </p>
                  <p>
                    For over a decade, we have been crafting soulful experiences that blend meditation, yoga, and immersion in Kashmir's natural beauty, allowing travelers to discover their wild spirit within.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/packages">
                    <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 font-medium rounded-full py-6 px-8 text-base">
                      Explore Our Journeys
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-xl overflow-hidden shadow-xl shadow-black/30 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/images/gallery/photo-1566837486475-98933a0ecdbf.jpg"
                    alt="Spiritual Journey in Kashmir"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="py-16 md:py-24 bg-meditation">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full">
                <span className="text-white text-sm font-medium">Our Philosophy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">Guided by Sacred Principles</h2>
              <p className="text-base sm:text-lg white-text max-w-2xl mx-auto">
                Our approach is rooted in respect for ancient wisdom and the transformative power of nature. We believe that true spiritual growth comes through authentic experiences and mindful presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-black-950/60 bg-gradient-to-br from-gold-800/30 to-black-900/30 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl shadow-lg transition-transform hover:-translate-y-2 duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-gold-500/30 to-amber-500/30 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-500">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                    <path d="M12 8v-2"></path>
                    <path d="M12 18v-2"></path>
                    <path d="M8.5 8.5l-1.4-1.4"></path>
                    <path d="M15.5 15.5l1.4 1.4"></path>
                    <path d="M8.5 15.5l-1.4 1.4"></path>
                    <path d="M15.5 8.5l1.4-1.4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Mindful Presence</h3>
                <p className="text-white/80">
                  We practice and teach the art of being fully present in each moment, creating space for profound insights and deep connection with the divine energy that surrounds us in Kashmir's sacred landscapes.
                </p>
              </div>

              <div className="bg-black-950/60 bg-gradient-to-br from-gold-800/30 to-black-900/30 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl shadow-lg transition-transform hover:-translate-y-2 duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-gold-500/30 to-amber-500/30 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-500">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Ancient Wisdom</h3>
                <p className="text-white/80">
                  We honor and integrate the spiritual traditions that have flourished in Kashmir for centuries, drawing from Sufism, Hindu mysticism, and Buddhist teachings to create a holistic approach to spiritual growth.
                </p>
              </div>

              <div className="bg-black-950/60 bg-gradient-to-br from-gold-800/30 to-black-900/30 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-xl shadow-lg transition-transform hover:-translate-y-2 duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-gold-500/30 to-amber-500/30 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-500">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Sustainable Travel</h3>
                <p className="text-white/80">
                  We are committed to preserving the natural and cultural heritage of Kashmir, working with local communities to create experiences that are environmentally sustainable and socially responsible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-black-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-gold-500/20 to-amber-500/20 rounded-full">
                <span className="text-white text-sm font-medium">Our Team</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">Meet Our Spiritual Guides</h2>
              <p className="text-base sm:text-lg white-text max-w-2xl mx-auto">
                Our team consists of experienced meditation teachers, yoga instructors, and local experts who are passionate about sharing the spiritual treasures of Kashmir.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-black-700 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-transform hover:-translate-y-2 duration-300">
                <div className="aspect-w-3 aspect-h-4 relative h-80">
                  <Image
                    src="/images/testimonials/photo-1500648767791-00dcc994a43e.jpg"
                    alt="Rajiv Sharma"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">Rajiv Sharma</h3>
                  <p className="text-gold-500 mb-4">Founder & Head Guide</p>
                  <p className="text-white/80">
                    Rajiv discovered his passion for spiritual practices during his travels through the Himalayas. With over 15 years of experience in meditation and yoga, he founded Wild World Wanderers to share Kashmir's spiritual gifts with the world.
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-black-700 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-transform hover:-translate-y-2 duration-300">
                <div className="aspect-w-3 aspect-h-4 relative h-80">
                  <Image
                    src="/images/testimonials/photo-1494790108377-be9c29b29330.jpg"
                    alt="Priya Kapoor"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">Priya Kapoor</h3>
                  <p className="text-gold-500 mb-4">Meditation Instructor</p>
                  <p className="text-white/80">
                    With a background in psychology and traditional mindfulness practices, Priya brings a unique blend of ancient wisdom and modern understanding to our meditation sessions. She specializes in Kashmiri Shaivism meditation techniques.
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-black-700 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-transform hover:-translate-y-2 duration-300">
                <div className="aspect-w-3 aspect-h-4 relative h-80">
                  <Image
                    src="/images/testimonials/photo-1472099645785-5658abf4ff4e.jpg"
                    alt="Amir Khan"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">Amir Khan</h3>
                  <p className="text-gold-500 mb-4">Local Expert & Guide</p>
                  <p className="text-white/80">
                    Born and raised in Kashmir, Amir has an intimate knowledge of the region's hidden spiritual sites and natural wonders. His deep connection to the land and its traditions adds authenticity to our journeys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-meditation bg-black-800 text-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">Begin Your Spiritual Journey</h2>
              <p className="text-base sm:text-lg white-text max-w-2xl mx-auto mb-8">
                Are you ready to discover the transformative power of Kashmir's sacred landscapes and ancient spiritual traditions? Join us for a journey that will awaken your wild spirit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/packages">
                  <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 font-medium rounded-full py-6 px-8 text-base w-full sm:w-auto">
                    Explore Our Packages
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-gold-500/50 text-gold-500 hover:bg-gold-500/10 font-medium rounded-full py-6 px-8 text-base w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
