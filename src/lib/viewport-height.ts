/**
 * Updates the CSS viewport height variable to handle mobile browser address bar behavior
 *
 * Mobile browsers can have dynamic toolbars (address bar, bottom controls) that change the viewport height.
 * By setting a custom CSS variable (--vh), we can calculate the real viewport height and use it in our layout.
 * This is critical for fullscreen sections on mobile where 100vh can cause issues.
 */
export function setViewportHeight() {
  // Only run on client
  if (typeof window === 'undefined') return;

  // Initial set
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // Update on resize
  const handleResize = () => {
    // Avoid expensive recalculations during rapid resizes
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
    } else {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  };

  // Set on resize and orientation change
  window.addEventListener('resize', handleResize);
  window.addEventListener('orientationchange', handleResize);

  // Return cleanup function
  return () => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('orientationchange', handleResize);
  };
}
