"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import testimonials from "@/data/testimonials.json";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-20 relative overflow-hidden bg-meditation"
    >
      {/* Simple background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black-600 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black-900 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full">
            <span className="text-white text-sm font-medium">Traveler Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Transformed</span>{" "}
            <span className="text-gradient">Journeys</span>
          </h2>
          <p className="text-lg text-white">
            Hear from those who have walked the path before you. Their stories of
            transformation and awakening in the sacred landscapes of Kashmir inspire
            and illuminate the possibilities that await.
          </p>
        </div>

        <div className="max-w-7xl mx-auto animate-fade-in delay-200">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4">
                  <div className="h-full bg-black-700/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-6 flex flex-col hover-lift hover-glow transition-all duration-300">
                    <div className="text-3xl text-gold-500 mb-4">❝</div>
                    <p className="text-white text-base mb-6 italic flex-grow">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center mt-auto pt-4 border-t border-white/10">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-500/50 flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="w-full h-full object-cover"
                          crossOrigin="anonymous"
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-gradient font-bold">{testimonial.name}</h4>
                        <p className="text-white/70 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="relative static left-auto right-auto bg-black/40 border-white/10 text-white hover:bg-gold-500 hover:text-black transform-none translate-y-0" />
              <CarouselNext className="relative static left-auto right-auto bg-black/40 border-white/10 text-white hover:bg-gold-500 hover:text-black transform-none translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
