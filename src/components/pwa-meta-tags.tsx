/**
 * Basic meta tags component (service worker functionality removed)
 * This adds various meta tags but PWA functionality is disabled to prevent caching
 */
export default function PWAMetaTags() {
  return (
    <>
      {/* Basic meta tags only - PWA functionality is disabled */}
      <meta name="application-name" content="Wild World Wanderers" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-TileColor" content="#050505" />
      <meta name="msapplication-tap-highlight" content="no" />

      <link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />

      {/* No-cache headers */}
      <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate, max-age=0" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />
    </>
  );
}
