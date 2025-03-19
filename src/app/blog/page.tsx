"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import blogPosts from "@/data/blogPosts.json";

// Extract unique categories from blog posts
const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

// Number of posts per page
const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
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

  // Filter posts based on category and search term
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, endIndex);
  }, [filteredPosts, currentPage]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm]);

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
            <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-red-500/5 blur-3xl animate-pulse-slow" />
          </div>

          <div className="container mx-auto px-4 relative z-10 pt-16">
            <motion.div
              {...fadeInUp}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full">
                <span className="text-white text-sm font-medium">Blog & Insights</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Wisdom </span>
                <span className="text-gradient">Writings</span>
              </h1>
              <p className="text-lg white-text">
                Explore our collection of articles on spiritual practices, meditation techniques,
                and transformative journeys in the sacred lands of Kashmir.
              </p>
            </motion.div>

            {/* Back to Home Button */}
            <motion.div
              {...fadeIn}
              className="mb-8 flex justify-center"
            >
              <Link href="/#blog">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full">
                  ← Back to Home
                </Button>
              </Link>
            </motion.div>

            {/* Search and Filter Controls */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-8"
            >
              <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
                {/* Search Input */}
                <div className="relative w-full md:w-1/3">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-black-950/60 border border-white/20 rounded-full py-2 px-4 text-white placeholder:text-white/50 focus:outline-none focus:border-gold-500"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeCategory === category
                          ? "bg-gradient-to-r from-gold-500 to-gold-600 text-black-950"
                          : "bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Blog Posts Grid */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {paginatedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  {...fadeInUp}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(0.1 + index * 0.05, 0.4)
                  }}
                  className="bg-black-950/60 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-gold-500/20 hover:shadow-lg card-glow-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                      crossOrigin="anonymous"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold-500/90 text-black-950 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white/60 text-xs">{post.date}</span>
                      <span className="text-gold-500/80 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="text-white/60 text-xs">
                        By {post.author}
                      </div>
                      <Link href={`/blog/${post.id}`} className="text-gold-500 text-sm font-medium hover:text-gold-400 transition-colors">
                        Read More →
                      </Link>
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

            {/* Empty state when no posts match filter */}
            {filteredPosts.length === 0 && (
              <motion.div
                {...fadeIn}
                className="text-center py-16 bg-black-950/60 backdrop-blur-sm border border-white/10 rounded-xl"
              >
                <h3 className="text-white text-xl font-semibold mb-3">No articles found</h3>
                <p className="text-white/70 mb-6">
                  {searchTerm
                    ? `No articles matching "${searchTerm}" found in the ${activeCategory === "All" ? "selected" : activeCategory} category.`
                    : `No articles found in the ${activeCategory} category.`}
                </p>
                <Button
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchTerm("");
                  }}
                  className="bg-gold-500 hover:bg-gold-600 text-black-950"
                >
                  Reset Filters
                </Button>
              </motion.div>
            )}

            {/* Results count */}
            {filteredPosts.length > 0 && (
              <motion.div
                {...fadeIn}
                className="text-center text-white/60 mt-6"
              >
                Showing {paginatedPosts.length} of {filteredPosts.length} articles
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
