"use client";

import { useEffect } from "react";
import { setViewportHeight } from "@/lib/viewport-height";
// Service worker registration removed
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

// Load the Inter font with optimal settings for mobile
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Set up viewport height calculations for mobile
  useEffect(() => {
    // Set up viewport height adjustment
    const cleanup = setViewportHeight();

    // Remove any extension-added classes during hydration
    document.body.className = cn(
      inter.className,
      "antialiased overflow-x-hidden text-base touch-manipulation"
    );

    // Service worker registration removed to prevent caching

    return cleanup;
  }, []);

  return (
    <body
      className={cn(
        inter.className,
        "antialiased overflow-x-hidden text-base touch-manipulation"
      )}
      suppressHydrationWarning
    >
      {children}
    </body>
  );
}
