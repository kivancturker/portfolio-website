import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BlogContent } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogs: BlogContent[] = [
  {
    title: "Understanding React Server Components",
    releaseDate: "2025-07-05",
    slug: "react-server-components",
    tags: ["react", "nextjs", "javascript"],
  },
  {
    title: "Why Type Safety Matters in Node.js",
    releaseDate: "2025-06-25",
    slug: "type-safety-nodejs",
    tags: ["typescript", "nodejs", "best-practices"],
  },
  {
    title: "Optimizing PostgreSQL Queries for Performance",
    releaseDate: "2025-06-15",
    slug: "postgresql-query-optimization",
    tags: ["postgresql", "database", "performance"],
  },
];

function Page() {
  return (
    <div className="mx-4 md:mx-[var(--common-margin)] mt-8">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="flex flex-col gap-4">
        {blogs.map((blog) => (
          <BlogPost key={blog.slug} content={blog} />
        ))}
      </ul>
    </div>
  );
}

function BlogPost({ content }: { content: BlogContent }) {
  return (
    <li>
      <Card className="p-4">
        <div className="flex gap-4 items-center">
          <div
            id="img-container"
            className="min-w-24 min-h-24 rounded-lg overflox-hidden bg-secondary flex items-center justify-center"
          >
            {content.imageUrl ? (
              <Image
                src={content.imageUrl}
                alt={content.title}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            ) : null}
          </div>
          <div>
            <Link
              href={{
                pathname: "/blog/" + content.slug,
                query: { title: content.title },
              }}
              className="font-bold text-xl hover:underline hover:underline-offset-2 dark:hover:text-gray-300"
            >
              {content.title}
            </Link>
            <p className="text-gray-700 dark:text-gray-300">
              {content.releaseDate}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {content.tags.map((tag) => (
                <Badge variant={"secondary"} key={tag}>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default Page;
