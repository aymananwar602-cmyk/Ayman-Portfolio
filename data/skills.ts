import { Code2, Server, Database, Wrench } from "lucide-react";

export type SkillGroup = {
  label: string;
  icon: React.ElementType;
  items: string[];
};

// Legacy flat export (kept for backward compat)
export const skills = ["TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL"];

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion","Redux Toolkit"],
  },
  {
    label: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    label: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle ORM"],
  },
  {
    label: "Tooling",
    icon: Wrench,
    items: ["Git", "Docker", "CI/CD", "Vercel", "Linux"],
  },
];
