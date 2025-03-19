"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  {
    title: "About",
    links: [
      { name: "Our Story", href: "#" },
      { name: "Team", href: "#" },
      { name: "Philosophy", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#blog" },
      { name: "Expeditions", href: "#" },
      { name: "Travel Guides", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Contact Us", href: "#contact" },
      { name: "Support", href: "#" },
      { name: "Community", href: "#" },
      { name: "Newsletter", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-950 relative overflow-hidden cosmic-bg mt-auto">
      {/* Background gradient elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black-950 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto py-12 sm:py-16 px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4 sm:mb-6 outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg">
              <div className="relative w-40 h-10">
                <Image
                  src="/logo.svg"
                  alt="Wild World Wanderers Logo"
                  width={160}
                  height={40}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="mb-6 text-white max-w-sm text-sm sm:text-base">
              In a world of WWW (World Wide Web), we aim to find the WWW (Wild World Wanderers)
              in you. Join us for transformative journeys in the breathtaking beauty of Kashmir.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white/5 hover:bg-gold-500 text-white hover:text-black-900 p-2 sm:p-3 rounded-full transition-colors duration-300 flex items-center justify-center min-w-[44px] min-h-[44px]"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <div
              key={column.title}
              className="mt-8 sm:mt-0"
            >
              <h3 className="text-gradient font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
                {column.title}
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-gold-500 transition-colors duration-300 py-1 inline-block text-sm sm:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 mt-10 sm:mt-12 pt-10 sm:pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-gradient-to-br from-gold-500/20 to-red-500/20 flex-shrink-0">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="text-white font-medium text-base sm:text-lg">Email Us</h4>
              <a
                href="mailto:info@wildworldwanderers.com"
                className="text-white/70 hover:text-white transition-colors text-sm sm:text-base"
              >
                info@wildworldwanderers.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-gradient-to-br from-gold-500/20 to-red-500/20 flex-shrink-0">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="text-white font-medium text-base sm:text-lg">Call Us</h4>
              <a
                href="tel:+1-555-123-4567"
                className="text-white/70 hover:text-white transition-colors text-sm sm:text-base"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-gradient-to-br from-gold-500/20 to-red-500/20 flex-shrink-0">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="text-white font-medium text-base sm:text-lg">Visit Us</h4>
              <p className="text-white/70 text-sm sm:text-base">
                123 Wilderness Way, Kashmir<br />
                Himalayan Valley, 19001<br />
                India
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-0 text-center sm:text-left">
            © {currentYear} Wild World Wanderers. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-white/60 hover:text-gold-500 text-xs sm:text-sm transition-colors px-2 py-1"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-gold-500 text-xs sm:text-sm transition-colors px-2 py-1"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-gold-500 text-xs sm:text-sm transition-colors px-2 py-1"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
