"use client";

import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import PWAUpdateNotifier from "@/components/pwa-update-notifier";
// No icons needed from lucide-react

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
          className="whatsapp-btn w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-colors duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white" className="text-white">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.5027 3.5C18.0365 1.24 14.8502 0 11.4458 0C5.18844 0 0.0942689 5.22 0.0942689 11.64C0.0942689 13.7 0.622147 15.72 1.6778 17.5L0 24L6.54563 22.32C8.23346 23.32 9.82129 23.82 11.4458 23.82H11.4825C17.7399 23.82 22.8341 18.6 22.8341 12.18C22.8341 8.64 21.5 5.76 20.5027 3.5ZM11.4458 21.82C9.74998 21.82 8.09016 21.32 6.65834 20.38L6.32162 20.16L2.74926 21.16L3.73853 17.54L3.48381 17.16C2.48653 15.64 1.95865 13.66 1.95865 11.64C1.95865 6.28 6.22691 1.92 11.4825 1.92C14.3229 1.92 16.9886 3 18.9831 4.96C20.9777 6.92 22.0116 9.64 21.9749 12.18C21.9749 17.54 16.7066 21.82 11.4458 21.82ZM16.6519 14.06C16.3886 13.92 14.9935 13.22 14.7669 13.14C14.5402 13.06 14.3502 13.02 14.1969 13.3C14.0436 13.58 13.5057 14.24 13.3524 14.42C13.1991 14.6 13.0458 14.62 12.7825 14.48C11.4825 13.9 10.6586 13.42 9.83471 11.92C9.61799 11.54 10.2926 11.58 10.9305 10.28C11.0104 10.08 10.9671 9.92 10.9038 9.78C10.8405 9.64 10.1659 8.2 9.94918 7.66C9.73246 7.14 9.51574 7.2 9.36244 7.2C9.20914 7.2 9.01943 7.2 8.82971 7.2C8.64 7.2 8.34998 7.26 8.12326 7.54C7.89654 7.82 7.17193 8.52 7.17193 9.96C7.17193 11.4 8.19621 12.8 8.34951 12.98C8.50281 13.16 10.1659 15.74 12.6659 16.98C14.3502 17.8 15.0382 17.88 15.9354 17.74C16.4733 17.66 17.6 17.04 17.8167 16.4C18.0334 15.76 18.0334 15.22 17.9701 15.12C17.9068 15.02 17.7168 14.96 17.4535 14.82L16.6519 14.06Z" />
          </svg>
        </a>

       {/* <a
          href="tel:+919419955663"
          className="phone-btn w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 hover:scale-110 transition-colors duration-300"
          aria-label="Call us"
        >
          <Phone size={24} className="text-white" />
        </a> */}
      </div>
    </>
  );
}
