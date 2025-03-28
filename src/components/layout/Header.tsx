"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react"; // Added Phone icon
import PWAInstallButton from "@/components/ui/pwa-install-button";
import Image from "next/image"; // Importing Image from next/image

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Packages", href: "/packages" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle initial mounting to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initialize scroll state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a navigation link
  const handleNavClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Don't render anything until client-side
  if (!isMounted) {
    return <header className="fixed top-0 left-0 right-0 h-[70px] sm:h-[80px] z-[100]"></header>;
  }

  // Build header classes
  let headerClasses = "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 py-3 sm:py-3";

  // Apply different background colors based on state
  if (isScrolled) {
    headerClasses += " bg-black shadow-xl";
  } else if (isMobileMenuOpen) {
    headerClasses += " bg-black shadow-xl md:bg-transparent";
  } else {
    headerClasses += " bg-transparent";
  }

  // Add a specific mobile menu open class
  if (isMobileMenuOpen) {
    headerClasses += " mobile-menu-open";
  }

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-20 outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg">
          <div className="relative h-16 w-20">
            <Image
              src="/logo.webp"
              alt="Wild World Wanderers Logo"
              width={84}
              height={84}
              className="object-contain"
              priority
              unoptimized // Use unoptimized to treat it like an external image
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gold-400 hover:text-gold-300 transition-colors relative group py-2 px-1"
            >
              <span>{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* PWA Install Button */}
          <PWAInstallButton className="mr-2" />

          <a href="tel:+919419955663">
            <Button
              className="bg-red-500 hover:bg-red-600 text-white ml-2 md:ml-4 min-h-[44px] min-w-[120px] flex items-center gap-2"
            >
              <Phone size={18} />
              <span>9419955663</span>
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-20 flex items-center">
          {/* PWA Install Button on mobile */}
          <PWAInstallButton className="mr-2" />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gold-500 hover:text-gold-400 h-12 w-12"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <style jsx global>{`
            @media (max-width: 767px) {
              .mobile-menu-open {
                background-color: black !important;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
              }
            }
          `}</style>
          <div className="md:hidden bg-black-950 fixed inset-0 top-16 z-10 bg-black border-gold-500/20 overflow-auto flex flex-col">
            <div className="container mx-auto py-6 mt-6 flex flex-col space-y-4 px-4 flex-grow">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-gold-400 hover:text-gold-300 transition-colors py-2 px-4 hover:bg-black-800 rounded-md text-xl flex items-center"
                >
                  {item.name}
                </Link>
              ))}
              <a href="tel:+919419955663" className="w-full">
                <Button
                  onClick={handleNavClick}
                  className="bg-red-500 hover:bg-red-600 text-white mt-4 w-full py-6 text-lg flex items-center justify-center gap-2"
                >
                  <Phone size={24} />
                  <span>9419955663</span>
                </Button>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
