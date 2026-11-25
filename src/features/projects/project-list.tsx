import type { Project } from "@/types/project";
import { ProjectCard } from "@/features/projects/project-card";

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        No projects available yet.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
