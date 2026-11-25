import Link from "next/link";
import { projectsData } from "@/data/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectList } from "@/features/projects/project-list";

interface ProjectsSectionProps {
  featuredOnly?: boolean;
}

export function ProjectsSection({ featuredOnly = false }: ProjectsSectionProps) {
  const projects = featuredOnly
    ? projectsData.filter((project) => project.featured)
    : projectsData;

  return (
    <section id="projects" className="py-12">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading
          title={featuredOnly ? "Featured Projects" : "Projects"}
          subtitle="Selected work and side projects."
        />
        {featuredOnly ? (
          <Link
            href="/projects"
            className="mb-8 text-sm font-medium text-zinc-600 hover:underline dark:text-zinc-400"
          >
            All projects
          </Link>
        ) : null}
      </div>
      <ProjectList projects={projects} />
    </section>
  );
}
