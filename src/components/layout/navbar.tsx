"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { siteConfig } from "@/config/site";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  const isScrolled = useScroll();
  const pathname = usePathname();

  function handleNavClick(
    e: MouseEvent<HTMLAnchorElement>,
    item: { href: string; targetId?: string }
  ) {
    if (pathname === "/" && item.targetId) {
      e.preventDefault();
      const element = document.getElementById(item.targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors",
        isScrolled
          ? "border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, { href: "/", targetId: "hero" })}
          className="text-base font-semibold tracking-tight"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

