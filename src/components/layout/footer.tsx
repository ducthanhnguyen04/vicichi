import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/components/shared/social-links";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © 2026 {siteConfig.name}. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
