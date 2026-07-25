import { describe, it, expect } from "vitest";

describe("WhatsApp link helper", () => {
  const WHATSAPP_BASE = "https://wa.me/51940371250";
  const waLink = (message: string) => `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;

  it("generates a valid WhatsApp URL with encoded message", () => {
    const url = waLink("Hola, quiero información");
    expect(url).toBe("https://wa.me/51940371250?text=Hola%2C%20quiero%20informaci%C3%B3n");
  });

  it("handles special characters", () => {
    const url = waLink("¿Becas? Sí, gracias.");
    expect(url).toBe("https://wa.me/51940371250?text=%C2%BFBecas%3F%20S%C3%AD%2C%20gracias.");
  });
});

describe("Analytics module exports", () => {
  it("exports expected functions", async () => {
    const mod = await import("../analytics");
    expect(typeof mod.trackEvent).toBe("function");
    expect(typeof mod.trackCTAClick).toBe("function");
    expect(typeof mod.trackFormSubmission).toBe("function");
    expect(typeof mod.trackWhatsAppClick).toBe("function");
  });
});
