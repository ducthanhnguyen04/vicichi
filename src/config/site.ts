export const siteConfig = {
  name: "Vicichi",
  title: "Vicichi",
  description:
    "Personal portfolio showcasing projects, engineering experience, and technical writing.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  author: "Developer",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:hello@example.com",
  },
  navItems: [
    { label: "Home", href: "/#hero" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Education & Learning", href: "/#experience" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
