import { sendGAEvent } from "@next/third-parties/google";
import { ANALYTICS } from "./constants";

/**
 * GA4 custom events. All conversion-shaped actions on the site go through
 * here so the monthly AISEO report can read them from one place:
 *
 *   phone_click      a tel: link was tapped (anywhere on the site)
 *   quote_submit     the quote form was sent, with the coverage type
 *   chat_message     a visitor sent a message to the on-page chat
 *   out_of_appetite  the quote form turned away a line Linwood does not place
 *                    (`line` is the vehicle-use value). Counted, never emailed.
 *
 * Each is a no-op when analytics is disabled or gtag has not loaded.
 */
export type SiteEvent = "phone_click" | "quote_submit" | "chat_message" | "out_of_appetite";

export function track(name: SiteEvent, params: Record<string, string> = {}): void {
  if (!ANALYTICS.gaMeasurementId) return;
  try {
    sendGAEvent("event", name, params);
  } catch {
    // analytics must never break the page
  }
}
