import { notFound } from "next/navigation";
import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost } from "@/lib/posts";
import {
  CodeBlock,
  Callout,
  Quote,
  ShareButton,
  DateText,
} from "@/components/blog";

// MDX components mapping
const components = {
  pre: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  code: ({ children, className }: { children: string; className?: string }) => {
    const lang = className?.replace("language-", "") || "text";
    return <CodeBlock lang={lang}>{children}</CodeBlock>;
  },
  // Custom components used directly in MDX
  CodeBlock,
  Callout,
  Quote,
  ShareButton,
  DateText,
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | Kivanc Turker",
    };
  }

  return {
    title: `${post.frontmatter.title} | Kivanc Turker`,
    description: `${post.frontmatter.title} - Published on ${post.frontmatter.releaseDate}`,
  };
}

async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-4 md:mx-[var(--common-margin)] mt-8">
      <article className="prose dark:prose-invert max-w-none">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{post.frontmatter.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <MDXRemote source={post.content} components={components} />
      </article>
    </div>
  );
}

export default Page;
