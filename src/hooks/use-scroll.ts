"use client";

import { useSyncExternalStore } from "react";
import { SCROLL_THRESHOLD } from "@/lib/constants";

function subscribe(callback: () => void): () => void {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

export function useScroll(threshold: number = SCROLL_THRESHOLD): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false
  );
}
