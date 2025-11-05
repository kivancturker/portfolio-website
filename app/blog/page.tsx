import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BlogContent } from "@/types";
import Link from "next/link";
import React from "react";
import { blogs } from "@/data";

async function Page() {
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
          <div>
            <Link
              href={`/blog/${content.slug}`}
              className="font-bold text-xl hover:underline hover:underline-offset-2 dark:hover:text-gray-300"
            >
              {content.title}
            </Link>
            <p className="text-gray-700 dark:text-gray-300">
              {new Date(content.releaseDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
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
