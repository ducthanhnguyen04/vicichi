import type { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    slug: "portfolio-platform",
    title: "Developer Portfolio Platform",
    description:
      "A modular Next.js App Router portfolio featuring clean feature-based architecture and responsive UI.",
    longDescription:
      "Built with Next.js, TypeScript, and Tailwind CSS using a scalable folder structure separating UI primitives, sections, features, and typed content data.",
    image: "/icons/globe.svg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    year: "2026",
  },
  {
    slug: "task-flow-workspace",
    title: "TaskFlow Workspace",
    description:
      "Collaborative project management dashboard with real-time updates and keyboard-first workflows.",
    longDescription:
      "Designed for fast engineering teams to organize sprints, track issues, and inspect analytics with minimal friction.",
    image: "/icons/window.svg",
    tags: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com",
    featured: true,
    year: "2025",
  },
];
