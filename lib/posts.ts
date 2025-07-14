import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { BlogContent } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export async function getAllPosts(): Promise<BlogContent[]> {
  try {
    const files = await fs.readdir(BLOG_DIR);
    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith(".mdx"))
        .map(async (file) => {
          const filePath = path.join(BLOG_DIR, file);
          const source = await fs.readFile(filePath, "utf8");
          const { data } = matter(source);
          return data as BlogContent;
        })
    );

    // Sort by release date (newest first)
    return posts.sort(
      (a, b) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    );
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export async function getRawPost(slug: string): Promise<string | null> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    return await fs.readFile(filePath, "utf8");
  } catch {
    return null;
  }
}

export async function getPost(slug: string): Promise<{
  content: string;
  frontmatter: BlogContent;
} | null> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    const source = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(source);

    return {
      content,
      frontmatter: data as BlogContent,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export async function getPostSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(BLOG_DIR);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch (error) {
    console.error("Error reading post slugs:", error);
    return [];
  }
}
