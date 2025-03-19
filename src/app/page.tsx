"use client";

import HeroSection from "@/components/sections/HeroSection";
import OverviewSection from "@/components/sections/OverviewSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import PackagesSection from "@/components/sections/PackagesSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero section */}
        <div id="home">
          <HeroSection />
        </div>

        {/* Overview section */}
        <div id="overview">
          <OverviewSection />
        </div>

        {/* Testimonials section */}
        <div id="testimonials">
          <TestimonialsSection />
        </div>

        {/* Gallery section */}
        <div id="gallery">
          <GallerySection />
        </div>

        {/* Packages section */}
        <div id="packages">
          <PackagesSection />
        </div>

        {/* Blog section */}
        <div id="blog">
          <BlogSection />
        </div>

        {/* Contact section */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
