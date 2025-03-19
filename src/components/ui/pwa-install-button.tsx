"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { listenForInstallPrompt } from "@/lib/register-service-worker";

// Define a type for BeforeInstallPromptEvent since it's not in the standard TypeScript types
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

interface PWAInstallButtonProps {
  className?: string;
}

export function PWAInstallButton({ className }: PWAInstallButtonProps) {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(display-mode: standalone)").matches ||
        window.matchMedia("(display-mode: fullscreen)").matches ||
        window.matchMedia("(display-mode: minimal-ui)").matches ||
        // @ts-expect-error - standalone is not in the standard TypeScript types
        window.navigator.standalone === true)
    ) {
      setIsInstalled(true);
      return;
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setInstallPrompt(e);
    };

    const cleanup = listenForInstallPrompt(handleBeforeInstallPrompt as EventListener);

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setInstallPrompt(null);
    };

    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      cleanup();
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;

    // Show the install prompt
    await installPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await installPrompt.userChoice;

    // We've used the prompt, and can't use it again, throw it away
    setInstallPrompt(null);

    if (outcome === "accepted") {
      setIsInstalled(true);
    }
  };

  if (isInstalled || !installPrompt) {
    return null;
  }

  return (
    <Button
      onClick={handleInstallClick}
      variant="outline"
      size="sm"
      className={`bg-black-900/80 backdrop-blur-sm border-gold-500/30 text-gold-500 hover:bg-gold-500/10 hover:border-gold-500/50 hover:text-gold-400 ${className}`}
    >
      <Download className="mr-2 h-4 w-4" />
      Install App
    </Button>
  );
}

export default PWAInstallButton;
