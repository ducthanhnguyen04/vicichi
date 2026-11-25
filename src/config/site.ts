export const siteConfig = {
  name: "Vicichi",
  title: "Vicichi",
  description:
    "Personal portfolio showcasing projects, engineering experience, and technical writing.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  author: "Developer",
  links: {
    github: "https://github.com/ducthanhnguyen04/",
    linkedin: "https://www.linkedin.com/in/thanh-nguy%E1%BB%85n-02912b401/",
    email: "ndt.ducthanh04@gmail.com",
    instagram: "https://www.instagram.com/_thahnd_",
    facebook: "https://www.facebook.com/nguyen.duc.thanh.0810",
    line: "https://line.me/ti/p/JhHWg2jK9M"
  },
  navItems: [
    { label: "Home", href: "/", targetId: "hero" },
    { label: "About", href: "/about", targetId: "about" },
    { label: "Projects", href: "/projects", targetId: "projects" },
    { label: "Education & Learning", href: "/experience", targetId: "experience" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact", targetId: "contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
