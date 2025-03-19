"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
  threshold?: number;
  id?: string;
}

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  threshold = 0.2,
  id,
}: SectionRevealProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Direction based animations
  const getInitialStyle = () => {
    if (shouldReduceMotion) return { opacity: 1 }; // Make sure content is visible with reduced motion

    switch (direction) {
      case "up":
        return { opacity: 0, y: 50 };
      case "down":
        return { opacity: 0, y: -50 };
      case "left":
        return { opacity: 0, x: 50 };
      case "right":
        return { opacity: 0, x: -50 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  useEffect(() => {
    // Set a default state for SSR to ensure content is visible
    setIsInView(true);

    // Then check for intersection when component mounts
    const currentRef = ref.current;

    if (typeof window !== "undefined" && typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (once) {
              // If it should only animate once, disconnect the observer after triggering
              observer.disconnect();
            }
          } else if (!once) {
            // Reset if not set to "once"
            setIsInView(false);
          }
        },
        {
          threshold,
          rootMargin: "0px 0px -100px 0px" // Trigger slightly before the element is in view
        }
      );

      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }

    return undefined;
  }, [once, threshold]);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial={getInitialStyle()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitialStyle()}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
