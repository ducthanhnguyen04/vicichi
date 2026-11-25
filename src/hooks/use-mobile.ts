"use client";

import { useCallback, useSyncExternalStore } from "react";
import { MOBILE_BREAKPOINT } from "@/lib/constants";

export function useMobile(breakpoint: number = MOBILE_BREAKPOINT): boolean {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery.removeEventListener("change", callback);
    },
    [breakpoint]
  );

  return useSyncExternalStore(
    subscribe,
    () => window.innerWidth < breakpoint,
    () => false
  );
}
