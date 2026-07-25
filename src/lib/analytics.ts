declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    fbq?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined;

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  if (window.gtag && GA_ID) {
    window.gtag("event", name, params);
  }

  if (window.fbq && META_PIXEL_ID) {
    window.fbq("trackCustom", name, params);
  }
}

export function trackCTAClick(label: string, destination?: string) {
  trackEvent("cta_click", { cta_label: label, destination });
}

export function trackFormSubmission(formName: string) {
  trackEvent("form_submission", { form_name: formName });
}

export function trackSectionView(section: string) {
  trackEvent("section_view", { section });
}

export function trackWhatsAppClick(label: string) {
  trackEvent("whatsapp_click", { cta_label: label });
}

export function getGAScript() {
  if (!GA_ID) return null;
  return {
    src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`,
    "data-cfasync": "false",
  };
}

export function getGAInitScript() {
  if (!GA_ID) return null;
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `;
}

export function getMetaPixelScript() {
  if (!META_PIXEL_ID) return null;
  return `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${META_PIXEL_ID}');
    fbq('track', 'PageView');
  `;
}
