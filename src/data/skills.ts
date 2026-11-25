export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML & CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "REST APIs", "PostgreSQL", "Prisma"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "Docker", "ESLint", "Vercel"],
  },
];
