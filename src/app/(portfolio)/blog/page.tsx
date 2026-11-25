import type { BlogPost } from "@/types/blog";
import { createMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/shared/section-heading";
import { BlogCard } from "@/features/blog/blog-card";

export const metadata = createMetadata({
  title: "Blog",
  description: "Articles and notes on software engineering and web development.",
  path: "/blog",
});

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

export default function BlogPage() {
  return (
    <section className="py-12">
      <SectionHeading
        title="Blog"
        subtitle="Thoughts on frontend architecture, TypeScript, and building products."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {samplePosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
