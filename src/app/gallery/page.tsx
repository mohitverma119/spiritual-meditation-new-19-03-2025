"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import galleryImages from "@/data/galleryImages.json";

// Extract unique categories
const categories = ["all", ...Array.from(new Set(galleryImages.map((img) => img.category)))];

// Number of images per page
const IMAGES_PER_PAGE = 9;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = shouldReduceMotion ? {} : {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4 }
  };

  const fadeInUp = shouldReduceMotion ? {} : {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  // Filter images based on selected category
  const filteredImages = useMemo(() => {
    return activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredImages.length / IMAGES_PER_PAGE);
  const paginatedImages = useMemo(() => {
    const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
    const endIndex = startIndex + IMAGES_PER_PAGE;
    return filteredImages.slice(startIndex, endIndex);
  }, [filteredImages, currentPage]);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen flex flex-col bg-black-950">
      <Header />

      <main className="flex-grow">
        <section className="py-16 md:py-20 relative overflow-hidden bg-meditation cosmic-bg">
          {/* Background gradients - simplified */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black-950 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black-950 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl animate-pulse-slow" />
          </div>

          <div className="container mx-auto px-4 relative z-10 pt-16">
            <motion.div
              {...fadeInUp}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full">
                <span className="text-white text-sm font-medium">Complete Collection</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Our </span>
                <span className="text-gradient">Gallery</span>
              </h1>
              <p className="text-lg white-text">
                Explore our complete collection of breathtaking images from Kashmir.
                Filter by category to find the perfect inspiration for your meditation journey.
              </p>
            </motion.div>

            {/* Back to Home Button */}
            <motion.div
              {...fadeIn}
              className="mb-8 flex justify-center"
            >
              <Link href="/#gallery">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full">
                  ← Back to Home
                </Button>
              </Link>
            </motion.div>

            {/* Category Filters */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-gold-500 to-gold-600 text-black-950"
                      : "bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </motion.div>

            {/* Gallery Grid - optimized with simpler animations */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {paginatedImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  {...fadeInUp}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(0.1 + index * 0.05, 0.4) // Reduced max delay
                  }}
                  className="relative group card-glow-hover cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-black-950 to-transparent opacity-50 z-10 group-hover:opacity-30 transition-opacity duration-300" />
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={375}
                      loading={index < 6 ? "eager" : "lazy"} // Load first 6 eagerly
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      crossOrigin="anonymous"
                    />
                    <div className="absolute inset-0 z-20 p-5 flex flex-col justify-end">
                      <p className="text-white font-medium text-shadow">{image.alt}</p>
                      <span className="text-white/80 text-sm text-shadow">{image.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <motion.div
                {...fadeIn}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex justify-center mt-12 items-center gap-2"
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-full border-white/20 text-white disabled:opacity-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </Button>

                <div className="flex gap-1">
                  {pageNumbers.map(number => (
                    <Button
                      key={number}
                      variant={currentPage === number ? "default" : "outline"}
                      onClick={() => setCurrentPage(number)}
                      className={`rounded-full min-w-10 h-10 ${
                        currentPage === number
                          ? "bg-gold-500 hover:bg-gold-600 text-black-950"
                          : "border-white/20 text-white hover:bg-white/10"
                      }`}
                    >
                      {number}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-full border-white/20 text-white disabled:opacity-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Button>
              </motion.div>
            )}

            {/* Results count */}
            {filteredImages.length > 0 && (
              <motion.div
                {...fadeIn}
                className="text-center text-white/60 mt-6"
              >
                Showing {paginatedImages.length} of {filteredImages.length} images
              </motion.div>
            )}

            {/* Lightbox - simplified animation */}
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={shouldReduceMotion ? {} : { scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative max-w-5xl max-h-[90vh] w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-gold-500 hover:text-black transition-colors"
                  >
                    ✕
                  </button>
                  <div className="relative">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      width={1000}
                      height={750}
                      className="object-contain max-h-[80vh] w-auto h-auto mx-auto rounded-lg"
                      priority
                      crossOrigin="anonymous"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                      <h3 className="text-white text-xl font-medium">{selectedImage.alt}</h3>
                      <p className="text-white/80">{selectedImage.category}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
