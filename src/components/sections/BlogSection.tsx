"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import blogPostsData from "@/data/updatedBlogPosts.json";

// Using only the first 6 blog posts for the home page section
const blogPosts = blogPostsData.slice(0, 6);

export default function BlogSection() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  return (
    <section
      id="blog"
      className="py-16 md:py-20 relative overflow-hidden bg-meditation cosmic-bg"
    >
      {/* Background gradients - simplified */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black-600 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black-950 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full">
            <span className="text-white text-sm font-medium">Our Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Wisdom</span>{" "}
            <span className="text-gradient">Writings</span>
          </h2>
          <p className="text-lg text-white">
            Insights, reflections, and teachings from our journeys and guides.
            Explore the intersection of travel, spirituality, and personal transformation.
          </p>
        </div>

        <div className="mb-10 animate-fade-in delay-200 px-0 md:px-4">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {blogPosts.map((post, index) => (
                <CarouselItem key={post.id} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3 pl-4">
                  <div
                    className="h-full bg-black-700/60 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20 hover-lift hover-glow animate-fade-in-up"
                    style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                        crossOrigin="anonymous"
                        onError={(e) => {
                          // Fallback to a placeholder image if the image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?q=80&w=2942&auto=format&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gold-500/90 text-black-950 text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-white text-xl font-semibold mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="text-white/60 text-xs">
                          {post.author} • {post.date}
                        </div>
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-gold-500 text-sm font-medium hover:text-gold-400 transition-colors"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center items-center gap-2 mt-8">
              <CarouselPrevious className="relative static left-auto right-auto bg-black/40 border-white/60 text-white hover:bg-gold-600 hover:text-black transform-none translate-y-0" />
              <div className="flex items-center gap-2 px-3">
                {blogPosts.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      current === index
                        ? "bg-gold-500 w-6"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="relative static left-auto right-auto bg-black/40 border-white/60 text-white hover:bg-gold-600 hover:text-black transform-none translate-y-0" />
            </div>
          </Carousel>
        </div>

        <div className="text-center mt-12 animate-fade-in delay-500">
          <Link href="/blog">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 font-medium px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-gold-500/20 hover:shadow-xl hover-lift"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
