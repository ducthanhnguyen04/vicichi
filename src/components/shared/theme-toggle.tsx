"use client";

import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { GiSpiderMask } from "react-icons/gi";
import { IoManOutline } from "react-icons/io5";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  window.addEventListener("storage", callback);

  return () => {
    observer.disconnect();
    window.removeEventListener("storage", callback);
  };
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribe,
    () => document.documentElement.classList.contains("dark"),
    () => false
  );

  function toggleTheme() {
    const nextDark = !isDark;
    if (nextDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch { }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      suppressHydrationWarning
    >
      {isDark ? (
        <IoManOutline className="h-5 w-5" />
      ) : (
        <GiSpiderMask className="h-5 w-5 text-red-500" />
      )}
    </Button>
  );
}

