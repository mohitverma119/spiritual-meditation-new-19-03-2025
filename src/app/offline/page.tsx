"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WifiOff, Home, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function OfflinePage() {
  const handleRefresh = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black-950 items-center justify-center p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black-900/50 backdrop-blur-lg p-6 md:p-8 rounded-xl border border-gold-500/20 max-w-md mx-auto shadow-xl"
      >
        <div className="flex flex-col items-center">
          <div className="p-4 bg-red-500/10 rounded-full mb-4">
            <WifiOff className="h-12 w-12 text-red-500" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">You're Offline</span>
          </h1>

          <p className="text-white/80 mb-8 max-w-sm">
            It seems you've lost your connection. The Wild World Wanderers app requires an internet connection to load new content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              onClick={handleRefresh}
              className="bg-gold-500 hover:bg-gold-600 text-black-950 font-medium rounded-full flex items-center"
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              Refresh Page
            </Button>

            <Link href="/" passHref>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full flex items-center"
              >
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <h2 className="text-lg font-medium text-white mb-2">Need Assistance?</h2>
          <p className="text-white/70 text-sm">
            Please check your internet connection and try again, or contact us when you're back online.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
