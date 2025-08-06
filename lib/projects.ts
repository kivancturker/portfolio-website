import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { ProjectContent } from "@/types";

const PROJECT_DIR = path.join(process.cwd(), "content", "project");

export async function getAllProjects(): Promise<ProjectContent[]> {
  try {
    const files = await fs.readdir(PROJECT_DIR);
    const projects = await Promise.all(
      files
        .filter((file) => file.endsWith(".mdx"))
        .map(async (file) => {
          const filePath = path.join(PROJECT_DIR, file);
          const source = await fs.readFile(filePath, "utf8");
          const { data } = matter(source);
          return data as ProjectContent;
        })
    );

    // Sort by release date (newest first)
    return projects.sort(
      (a, b) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    );
  } catch (error) {
    console.error("Error reading projects:", error);
    return [];
  }
}

export async function getRawProject(slug: string): Promise<string | null> {
  try {
    const filePath = path.join(PROJECT_DIR, `${slug}.mdx`);
    return await fs.readFile(filePath, "utf8");
  } catch {
    return null;
  }
}

export async function getProject(slug: string): Promise<{
  content: string;
  frontmatter: ProjectContent;
} | null> {
  try {
    const filePath = path.join(PROJECT_DIR, `${slug}.mdx`);
    const source = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(source);

    return {
      content,
      frontmatter: data as ProjectContent,
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

export async function getProjectSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(PROJECT_DIR);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch (error) {
    console.error("Error reading project slugs:", error);
    return [];
  }
}
