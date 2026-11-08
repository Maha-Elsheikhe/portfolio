export interface ProjectLink {
  label: string;
  href: string;
}

export type ProjectVisual = "jadplus" | "meshhub" | "avion" | "backend";

export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  github?: string;
  liveDemo?: string;
  liveDemoLabel?: string;
  docs?: ProjectLink[];
  visual: ProjectVisual;
}

export const projects: Project[] = [
  {
    slug: "jadplus",
    name: "JadPlus",
    category: "Multi-tenant E-commerce Platform",
    description:
      "A multi-tenant e-commerce platform featuring product, order, and customer management, with integrated REST APIs and a responsive dashboard interface.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Query", "Zustand"],
    featured: true,
    visual: "jadplus",
  },
  {
    slug: "mesh-hub",
    name: "Mesh Hub",
    category: "E-commerce Web Application",
    description:
      "A modern e-commerce web application designed to provide a smooth and user-friendly online shopping experience.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    liveDemo: "https://mesh-shop-hub.vercel.app/",
    visual: "meshhub",
  },
  {
    slug: "avion",
    name: "Avion",
    category: "E-commerce Storefront",
    description:
      "A frontend e-commerce storefront featuring product browsing and shopping cart interactions, with a focus on a clean and responsive shopping experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Maha-Elsheikhe/avion",
    liveDemo: "https://avion-theta-red.vercel.app/",
    visual: "avion",
  },
  {
    slug: "ecommerce-backend",
    name: "E-commerce Backend",
    category: "Backend Development / REST API",
    description:
      "A RESTful backend for an e-commerce application, built with Node.js and Express.js, using PostgreSQL for database management and JWT-based authentication.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT", "bcrypt", "Cloudinary", "Resend"],
    github: "https://github.com/Maha-Elsheikhe/ecommerce-backend",
    liveDemo: "https://ecommerce-backend-8zh3.onrender.com",
    liveDemoLabel: "Live API",
    docs: [
      {
        label: "API Documentation",
        href: "https://github.com/Maha-Elsheikhe/ecommerce-backend/blob/main/API.md",
      },
      {
        label: "Database Diagram",
        href: "https://github.com/Maha-Elsheikhe/ecommerce-backend/blob/main/docs/ER_DIAGRAM.md",
      },
    ],
    visual: "backend",
  },
];
