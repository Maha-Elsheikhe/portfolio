import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="mb-6 font-mono text-sm text-accent">
            <span className="text-muted">{"// "}</span>
            SELECTED WORK
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            A few things I&apos;ve built.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            A selection of projects showcasing my work in frontend
            development, e-commerce applications, API integration, and
            backend development.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-8">
          {featured && <ProjectCard project={featured} />}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
