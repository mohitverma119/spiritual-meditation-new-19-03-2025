"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 md:py-20 relative overflow-hidden bg-meditation"
    >
      {/* Simple background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black-600 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black-700 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full">
            <span className="text-white text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-white">Begin Your</span>{" "}
            <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-base sm:text-lg white-text max-w-2xl mx-auto">
            Ready to transform your life through the sacred landscapes of Kashmir?
            Contact us to learn more about our transformative journeys or to
            book your experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Contact Form */}
          <div className="bg-black-950/60 backdrop-blur-sm border border-white/10 p-5 sm:p-6 md:p-8 rounded-xl transition-transform hover:-translate-y-1 duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6 text-white">Send Us a Message</h3>

            <form className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white font-medium block mb-1 text-sm sm:text-base">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="bg-black-800 border-white/10 text-white placeholder:text-white/50 focus:border-gold-500 focus-visible:ring-gold-500/20 h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white font-medium block mb-1 text-sm sm:text-base">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-black-800 border-white/10 text-white placeholder:text-white/50 focus:border-gold-500 focus-visible:ring-gold-500/20 h-12 text-base"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-white font-medium block mb-1 text-sm sm:text-base">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What are you inquiring about?"
                  className="bg-black-800 border-white/10 text-white placeholder:text-white/50 focus:border-gold-500 focus-visible:ring-gold-500/20 h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-white font-medium block mb-1 text-sm sm:text-base">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your interest in our journeys..."
                  rows={5}
                  className="bg-black-800 border-white/10 text-white placeholder:text-white/50 focus:border-gold-500 focus-visible:ring-gold-500/20 resize-none min-h-[120px] text-base"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 font-medium rounded-full py-6 text-base"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:space-y-5">
            <div className="bg-black-950/60 backdrop-blur-sm border border-white/10 p-5 sm:p-6 md:p-8 rounded-xl transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-gradient-to-br from-gold-500/20 to-purple-500/20 flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">Email Us</h4>
                  <p className="text-white/80 mb-2">
                    For general inquiries and booking information:
                  </p>
                  <a
                    href="mailto:info@wildworldwanderers.com"
                    className="text-gold-500 hover:text-gold-400 transition-colors inline-block text-base sm:text-lg"
                  >
                    info@wildworldwanderers.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-black-950/60 backdrop-blur-sm border border-white/10 p-5 sm:p-6 md:p-8 rounded-xl transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-gradient-to-br from-gold-500/20 to-purple-500/20 flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">Call Us</h4>
                  <p className="text-white/80 mb-2">
                    For immediate assistance and inquiries:
                  </p>
                  <a
                    href="tel:+1-555-123-4567"
                    className="text-gold-500 hover:text-gold-400 transition-colors inline-block text-base sm:text-lg"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-black-950/60 backdrop-blur-sm border border-white/10 p-5 sm:p-6 md:p-8 rounded-xl transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-gradient-to-br from-gold-500/20 to-purple-500/20 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">Visit Us</h4>
                  <p className="text-white/80 mb-2">
                    Our Himalayan Base:
                  </p>
                  <address className="text-gold-500 not-italic">
                    123 Wilderness Way<br />
                    Kashmir Valley<br />
                    Himalayan Region, 19001<br />
                    India
                  </address>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
