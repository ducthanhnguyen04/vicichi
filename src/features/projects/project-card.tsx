import Link from "next/link";
import type { Project } from "@/types/project";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between transition-colors hover:border-zinc-400 dark:hover:border-zinc-600">
      <div>
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <CardTitle>
              <Link
                href={`/projects/${project.slug}`}
                className="hover:underline"
              >
                {project.title}
              </Link>
            </CardTitle>
            <span className="text-xs text-zinc-500">{project.year}</span>
          </div>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </div>

      <div className="mt-6 flex items-center gap-4 text-sm font-medium">
        <Link
          href={`/projects/${project.slug}`}
          className="text-zinc-900 hover:underline dark:text-zinc-100"
        >
          Details
        </Link>
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:underline dark:text-zinc-400"
          >
            GitHub
          </a>
        ) : null}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:underline dark:text-zinc-400"
          >
            Live
          </a>
        ) : null}
      </div>
    </Card>
  );
}
