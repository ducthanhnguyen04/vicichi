import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare, FaLine, FaLinkedin } from "react-icons/fa";

interface SocialLinksProps {
  className?: string;
}

const socialItems = [
  { label: <FaSquareGithub size={25} />, href: siteConfig.links.github },
  { label: <FaLinkedin size={25} />, href: siteConfig.links.linkedin },
  { label: <FaFacebookSquare size={25} />, href: siteConfig.links.facebook },
  { label: <FaSquareInstagram size={25} />, href: siteConfig.links.instagram },
  { label: <FaLine size={25} />, href: siteConfig.links.line },
];

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-4 text-sm", className)}>
      {socialItems.map((item) => (
        <a
          key={item.href}
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
