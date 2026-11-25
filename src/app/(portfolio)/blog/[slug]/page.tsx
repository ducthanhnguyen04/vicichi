import Link from "next/link";
import { notFound } from "next/navigation";
import type { BlogPost } from "@/types/blog";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const samplePosts: BlogPost[] = [
  {
    slug: "scalable-nextjs-folder-structure",
    title: "Organizing a Scalable Next.js Portfolio",
    excerpt:
      "How separating app routes, sections, features, and typed data keeps a growing Next.js codebase maintainable.",
    content:
      "Separating routing concerns in src/app from domain features in src/features and reusable primitives in src/components/ui helps keep code clean and easy to evolve.",
    publishedAt: "2026-11-01",
    readingTime: "3 min read",
    tags: ["Next.js", "Architecture"],
  },
];

export function generateStaticParams() {
  return samplePosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = samplePosts.find((item) => item.slug === slug);

  if (!post) {
    return createMetadata({ title: "Post Not Found", path: `/blog/${slug}` });
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = samplePosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-6 py-12">
      <Link
        href="/blog"
        className="text-sm text-zinc-600 hover:underline dark:text-zinc-400"
      >
        ← Back to Blog
      </Link>

      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm text-zinc-500">
          <span>{formatDate(post.publishedAt)}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
      </div>

      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      <p className="max-w-3xl leading-relaxed text-zinc-700 dark:text-zinc-300">
        {post.content}
      </p>
    </article>
  );
}
