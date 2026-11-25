import Image from "next/image";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/components/shared/social-links";
import DyuLogo from "@/assets/Dayeh_University_Seal.svg.webp";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © 2026 {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center justify-center">
          <a
            href="https://www.dyu.edu.tw/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Da-Yeh University Website"
            className="transition-transform hover:scale-105"
          >
            <Image
              src={DyuLogo}
              alt="Da-Yeh University Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-contain"
            />
          </a>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
