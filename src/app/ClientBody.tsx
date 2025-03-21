"use client";

import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import PWAUpdateNotifier from "@/components/pwa-update-notifier";
import { Phone, MessageCircle } from "lucide-react";

// Add this line to declare workbox on window type
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    workbox?: any;
  }
}

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Fix for mobile viewport height issues with address bar
    function fixViewportHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    window.addEventListener("resize", fixViewportHeight);
    fixViewportHeight();

    // Register service worker if supported
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      'workbox' in window
    ) {
      const registerServiceWorker = async () => {
        try {
          const { registerServiceWorker } = await import("@/lib/register-service-worker");
          registerServiceWorker();
        } catch (error) {
          console.error("Service worker registration failed:", error);
        }
      };
      registerServiceWorker();
    }

    return () => window.removeEventListener("resize", fixViewportHeight);
  }, []);

  // Don't render client-specific elements on server
  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <Toaster position="top-center" richColors />
      <PWAUpdateNotifier />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[99]">
        {/* Custom pulse animation */}
        <style jsx global>{`
          @keyframes subtle-pulse {
            0% { transform: scale(1); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
            50% { transform: scale(1.05); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
            100% { transform: scale(1); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
          }
          .whatsapp-btn {
            animation: subtle-pulse 3s infinite ease-in-out;
          }
          .phone-btn {
            animation: subtle-pulse 3s infinite ease-in-out;
            animation-delay: 1.5s;
          }
        `}</style>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919419955663"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-colors duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} className="text-white" />
        </a>

        {/* Phone Button */}
        <a
          href="tel:+919419955663"
          className="phone-btn w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 hover:scale-110 transition-colors duration-300"
          aria-label="Call us"
        >
          <Phone size={24} className="text-white" />
        </a>
      </div>
    </>
  );
}
