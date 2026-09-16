"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/**
 * One document-level listener that reports every tel: link tap as a GA4
 * `phone_click`. The tel links live in server components (header, footer,
 * contact page), so a single client listener is simpler than wrapping each.
 */
export function PhoneClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.("a[href^='tel:']");
      if (!a) return;
      track("phone_click", { location: window.location.pathname });
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
