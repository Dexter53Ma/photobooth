// Google Ads & GA4 Conversion Tracking
// Replace AW-XXXXXXXXX with your actual Google Ads Conversion ID in layout.tsx

declare global {
  interface Window {
    dataLayer: unknown[][];
  }
}

export const GA_MEASUREMENT_ID_1 = "G-89VBCBGT6G";
export const GA_MEASUREMENT_ID_2 = "G-KPKM0DTYVR";

// Google Ads Conversion ID — replace with your actual ID
export const GOOGLE_ADS_ID = "AW-XXXXXXXXX";

export function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

// Fire a Google Ads conversion event
export function trackConversion(sendTo: string, value?: number) {
  gtag("event", "conversion", {
    send_to: sendTo,
    ...(value !== undefined && { value }),
  });
}

// Track form submission (lead generation)
export function trackFormSubmission() {
  gtag("event", "generate_lead", {
    send_to: `${GOOGLE_ADS_ID}/generate_lead`,
  });
}

// Track phone call click
export function trackPhoneClick() {
  gtag("event", "phone_call", {
    send_to: `${GOOGLE_ADS_ID}/phone_call`,
  });
}

// Track WhatsApp click
export function trackWhatsAppClick() {
  gtag("event", "whatsapp_click", {
    send_to: `${GOOGLE_ADS_ID}/whatsapp_click`,
  });
}
