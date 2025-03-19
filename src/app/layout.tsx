import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ClientBody from "./ClientBody";
import PWAMetaTags from "@/components/pwa-meta-tags";

export const metadata: Metadata = {
  title: "Kashmir's Spiritual Meditation Journeys | Wild World Wanderers",
  description:
    "Discover transformative spiritual meditation journeys in the mystical beauty of Kashmir. Guided retreats and experiences for inner healing and awakening.",
  keywords:
    "Kashmir meditation, spiritual retreats, meditation journeys, sacred travel, Kashmir spiritual experience, Andrew Harvey, meditation retreat",
  authors: [{ name: "Wild World Wanderers" }],
  openGraph: {
    title: "Kashmir's Spiritual Meditation Journeys | Wild World Wanderers",
    description:
      "Discover transformative spiritual meditation journeys in the mystical beauty of Kashmir. Guided retreats and experiences for inner healing and awakening.",
    url: "https://www.wildworldwanderers.com",
    siteName: "Wild World Wanderers",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashmir's Spiritual Meditation Journeys | Wild World Wanderers",
    description:
      "Discover transformative spiritual meditation journeys in the mystical beauty of Kashmir. Guided retreats and experiences for inner healing and awakening.",
    creator: "@wildworldwanderers",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.wildworldwanderers.com",
  },
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/icon-192x192.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Wild World Wanderers",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#050505",
    "msapplication-tap-highlight": "no",
    /* No-cache headers */
    "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0",
    "Pragma": "no-cache",
    "Expires": "0",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#050505" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black-950 scroll-smooth">
      <head>
        <PWAMetaTags />
        {/* Force no-cache meta tags */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate, max-age=0" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <ClientBody>
        {children}
        <Analytics />
      </ClientBody>
    </html>
  );
}
