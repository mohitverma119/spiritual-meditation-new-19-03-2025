/**
 * Service Worker Registration is DISABLED
 * This file is kept for reference but all functionality is disabled to prevent caching issues
 */

export function registerServiceWorker() {
  // Do nothing - service worker functionality is disabled
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    // Unregister any existing service workers to completely disable them
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
        console.log('Service Worker unregistered to prevent caching');
      }
    }).catch(error => {
      console.error('Error unregistering service worker:', error);
    });
  }
  return;
}

/**
 * Subscribe to push notifications - DISABLED
 */
export async function subscribeToPushNotifications(applicationServerKey: string) {
  // Do nothing - push notifications functionality is disabled
  console.log('Push notifications are disabled');
  return null;
}

/**
 * Dummy function that's kept for type compatibility but does nothing
 */
function urlBase64ToUint8Array(base64String: string): Uint8Array {
  return new Uint8Array(0);
}

/**
 * Check if the app is installable - DISABLED
 */
export function isAppInstallable(): boolean {
  return false;
}

/**
 * Interface for BeforeInstallPromptEvent
 */
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

/**
 * Listen for beforeinstallprompt event - DISABLED
 */
export function listenForInstallPrompt(callback: EventListener): () => void {
  // Do nothing - installation prompt functionality is disabled
  return () => {};
}
