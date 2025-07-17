import { notFound } from "next/navigation";
import React from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import { getPost, getRawPost } from "@/lib/posts";
import { getMDXComponents } from "@/lib/mdx-components";

type BlogPostProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | Kivanc Turker",
      description: "Post not found",
    };
  }

  return {
    title: post.frontmatter.title + " | Kivanc Turker",
    description:
      post.frontmatter.title +
      " - Published on " +
      post.frontmatter.releaseDate,
  };
}

async function Page({ params }: BlogPostProps) {
  const { slug } = await params;
  const rawPost = await getRawPost(slug);
  if (!rawPost) return notFound();

  const components = getMDXComponents({});

  const { content, frontmatter } = await compileMDX<{
    title: string;
    releaseDate: string;
    tags: string[];
  }>({
    source: rawPost,
    options: { parseFrontmatter: true },
    components,
  });

  return (
    <div className="mx-4 md:mx-[var(--common-margin)] mt-8">
      <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground">
        <div className="mb-8 not-prose">
          <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {content}
        </div>
      </article>
    </div>
  );
}

export default Page;
