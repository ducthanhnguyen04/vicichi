"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function handleNavClick(
    e: MouseEvent<HTMLAnchorElement>,
    item: { href: string; targetId?: string }
  ) {
    setOpen(false);
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
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        aria-expanded={open}
        aria-label="Toggle navigation menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <MdClose /> : <FiMenu />}
      </Button>

      {open ? (
        <div className="absolute inset-x-0 top-16 z-50 border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950">
          <nav className="flex flex-col gap-3">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}

