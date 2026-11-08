import { ExternalLink, FileText } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "./icons";
import ProjectVisual from "./ProjectVisual";

function ActionLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {icon}
      {children}
    </a>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const [primaryDoc, ...secondaryDocs] = project.docs ?? [];
  const hasActions = Boolean(project.github || project.liveDemo || primaryDoc);

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent/60 ${
        project.featured ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={
          project.featured
            ? "aspect-[16/10] w-full lg:aspect-auto lg:w-1/2"
            : "aspect-[16/10] w-full"
        }
      >
        <ProjectVisual type={project.visual} />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">
          {project.category}
        </p>
        <h3
          className={`mt-2 font-semibold tracking-tight text-foreground ${
            project.featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {project.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {hasActions && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.github && (
              <ActionLink
                href={project.github}
                icon={<GithubIcon className="h-3.5 w-3.5" aria-hidden="true" />}
              >
                View Source Code
              </ActionLink>
            )}
            {project.liveDemo && (
              <ActionLink
                href={project.liveDemo}
                icon={<ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />}
              >
                {project.liveDemoLabel ?? "Live Demo"}
              </ActionLink>
            )}
            {primaryDoc && (
              <ActionLink
                href={primaryDoc.href}
                icon={<FileText className="h-3.5 w-3.5" aria-hidden="true" />}
              >
                {primaryDoc.label}
              </ActionLink>
            )}
          </div>
        )}

        {secondaryDocs.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-4">
            {secondaryDocs.map((doc) => (
              <a
                key={doc.href}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {doc.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
