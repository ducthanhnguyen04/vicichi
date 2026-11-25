import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    return createMetadata({ title: "Project Not Found", path: `/projects/${slug}` });
  }

  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-6 py-12">
      <Link
        href="/projects"
        className="text-sm text-zinc-600 hover:underline dark:text-zinc-400"
      >
        ← Back to Projects
      </Link>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
          <span className="text-sm text-zinc-500">{project.year}</span>
        </div>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      {project.longDescription ? (
        <p className="max-w-3xl leading-relaxed text-zinc-700 dark:text-zinc-300">
          {project.longDescription}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-3 pt-2">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "primary" })}
          >
            Live Demo
          </a>
        ) : null}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            Source Code
          </a>
        ) : null}
      </div>
    </article>
  );
}
