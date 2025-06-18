import type { TechStackItem } from "@/types/tech";

export const techStack: {
  frontend: TechStackItem[];
  backend: TechStackItem[];
  devops: TechStackItem[];
} = {
  frontend: [
    { name: "React", iconPath: "/icons/techstack/react.svg" },
    { name: "Next.js", iconPath: "/icons/techstack/next.svg" },
    { name: "JavaScript", iconPath: "/icons/techstack/javascript.svg" },
    { name: "TypeScript", iconPath: "/icons/techstack/typescript.svg" },
    { name: "Tailwind", iconPath: "/icons/techstack/tailwind.svg" },
    { name: "HTML", iconPath: "/icons/techstack/html.svg" },
    { name: "CSS", iconPath: "/icons/techstack/css.svg" },
    { name: "Motion", iconPath: "/icons/techstack/framer-motion.svg" },
    { name: "Figma", iconPath: "/icons/techstack/figma.svg" },
  ],
  backend: [
    { name: "Node.js", iconPath: "/icons/techstack/nodejs.svg" },
    { name: "Express", iconPath: "/icons/techstack/expressjs.svg" },
    { name: "MongoDB", iconPath: "/icons/techstack/mongodb.svg" },
    { name: "PostgreSQL", iconPath: "/icons/techstack/posgresql.svg" },
    { name: "C#", iconPath: "/icons/techstack/csharp.svg" },
    { name: ".NET", iconPath: "/icons/techstack/dotnet.svg" },
    { name: "Prisma", iconPath: "/icons/techstack/prisma.svg" },
  ],
  devops: [
    { name: "Docker", iconPath: "/icons/techstack/docker.svg" },
    { name: "Git", iconPath: "/icons/techstack/git.svg" },
    { name: "GitHub", iconPath: "/icons/techstack/github.svg" },
    { name: "AWS", iconPath: "/icons/techstack/aws.svg" },
    { name: "Digital Ocean", iconPath: "/icons/techstack/digital-oceans.svg" },
    { name: "Linux", iconPath: "/icons/techstack/linux.svg" },
    { name: "Vault", iconPath: "/icons/techstack/hashicorp-vault.svg" },
  ],
};
