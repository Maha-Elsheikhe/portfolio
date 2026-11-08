import { Code2, Database, RefreshCw, Server, Wrench, type LucideIcon } from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "State Management & Data Fetching",
    icon: RefreshCw,
    skills: ["Zustand", "React Query"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "Python", "FastAPI"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "SQL Server", "MongoDB"],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman"],
  },
];
