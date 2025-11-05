import type { BlogContent } from "@/types";

export const blogs: BlogContent[] = [
  {
    title: "Understanding React Server Components",
    slug: "react-server-components",
    releaseDate: "2025-07-05",
    tags: ["react", "nextjs", "javascript"],
    // imageUrl: "/images/blog/rsc-cover.png",
  },
  {
    title: "Why Type Safety Matters in Node.js",
    slug: "type-safety-nodejs",
    releaseDate: "2025-06-25",
    tags: ["typescript", "nodejs", "best-practices"],
    // imageUrl: "/images/blog/typesafety-cover.png",
  },
  {
    title: "Optimizing PostgreSQL Queries for Performance",
    slug: "postgresql-query-optimization",
    releaseDate: "2025-06-15",
    tags: ["postgresql", "database", "performance"],
    // imageUrl: "/images/blog/postgresql-cover.png",
  },
];
