import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
}

const socialItems = [
  { label: "GitHub", href: siteConfig.links.github },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "Email", href: siteConfig.links.email },
];

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-4 text-sm", className)}>
      {socialItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
