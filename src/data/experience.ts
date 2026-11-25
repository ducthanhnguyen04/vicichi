import type { Experience } from "@/types/experience";

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Full-Stack Developer",
    company: "Tech Studio",
    companyUrl: "https://example.com",
    location: "Remote",
    startDate: "2024-01",
    endDate: "Present",
    description:
      "Developing and maintaining customer-facing web products and internal tooling with Next.js and TypeScript.",
    highlights: [
      "Architected modular frontend components and reusable design primitives.",
      "Improved page performance and Core Web Vitals across key user flows.",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
  },
];
