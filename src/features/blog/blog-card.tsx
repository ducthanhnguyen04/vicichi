import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="transition-colors hover:border-zinc-400 dark:hover:border-zinc-600">
      <CardHeader>
        <div className="flex items-center justify-between gap-2 text-xs text-zinc-500">
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readingTime}</span>
        </div>
        <CardTitle>
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription>{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
