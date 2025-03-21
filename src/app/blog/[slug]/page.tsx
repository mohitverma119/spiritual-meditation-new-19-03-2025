"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useParams, usePathname } from "next/navigation";
import blogPosts from "@/data/blogPosts.json";

// Define a proper type for debug state
interface DebugInfo {
  pathname?: string;
  paramsInfo?: string; // Use string type instead of any
  slug?: string;
  allPostIds?: string[];
  postCount?: number;
}

export default function BlogPostPage() {
  const params = useParams();
  const pathname = usePathname();
  const [post, setPost] = useState<typeof blogPosts[0] | null>(null);
  const [debug, setDebug] = useState<DebugInfo>({});
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Get the slug as string
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

    // Debug information
    setDebug({
      pathname,
      paramsInfo: JSON.stringify(params), // Convert to string to avoid type issues
      slug,
      allPostIds: blogPosts.map(p => p.id),
      postCount: blogPosts.length
    });

    // Find the post that matches the slug
    const foundPost = blogPosts.find((p) => p.id === slug);

    if (foundPost) {
      console.log("Found matching post:", foundPost.title);
      setPost(foundPost);

      // Set page title for better SEO
      document.title = `${foundPost.title} | Wild World Wanderers`;
    } else {
      console.log("No matching post found for slug:", slug);
      setPost(null);
    }

    // Fix for mobile viewport issues
    const fixViewport = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', fixViewport);
    fixViewport();

    return () => window.removeEventListener('resize', fixViewport);
  }, [params, pathname]);

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

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-black">
        <Header />
        <main className="flex-grow flex items-center justify-center pt-28 pb-16">
          <div className="text-center">
            <h1 className="text-2xl text-white mb-4">Article not found</h1>
            <p className="text-white/60 mb-6">The article you're looking for doesn't exist or has been removed.</p>

            {/* Debug information display */}
            <div className="text-sm text-white/60 mb-6 max-w-md mx-auto text-left p-4 bg-black-900 rounded">
              <h3 className="font-medium mb-2">Debug Info:</h3>
              <pre className="whitespace-pre-wrap break-words">
                {JSON.stringify(debug, null, 2)}
              </pre>
            </div>

            <Link href="/blog">
              <Button>Return to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-black-950">
      <Header />

      <main className="flex-grow w-full mt-16 pt-8">
        {/* Article container with proper padding for header */}
        <article className="w-full py-16 md:py-20 relative bg-black-700 overflow-hidden bg-meditation cosmic-bg">
          {/* Background gradients - simplified */}
  
          <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black-950 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black-950 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-red-500/5 blur-3xl animate-pulse-slow" />
            
          </div>

          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            {/* Navigation links */}
            <motion.div
              {...fadeIn}
              className="mb-8 flex flex-wrap gap-2"
            >
              <Link href="/#blog">
                <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full">
                  ← Home
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full">
                  ← All Articles
                </Button>
              </Link>
            </motion.div>

            {/* Article Header */}
            <motion.div
              {...fadeInUp}
              className="mb-8"
            >
              <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full">
                <span className="text-white text-sm font-medium">{post.category}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm mb-8">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <div className="aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={675}
                  className="object-cover w-full h-full"
                  priority
                  crossOrigin="anonymous"
                />
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <div
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
              />
            </motion.div>

            {/* Share and Navigation */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="border-t border-white/10 pt-8 flex flex-wrap justify-between items-center gap-4 mb-16"
            >
              <div>
                <h3 className="text-white text-lg font-medium mb-2">Share this article</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="w-10 h-10 rounded-full border-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="w-10 h-10 rounded-full border-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </Button>
                  <Button variant="outline" size="icon" className="w-10 h-10 rounded-full border-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </Button>
                </div>
              </div>
              <Link href="/blog">
                <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950">
                  Explore More Articles
                </Button>
              </Link>
            </motion.div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
