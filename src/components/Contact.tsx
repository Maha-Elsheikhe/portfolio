import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-6 font-mono text-sm text-accent">
          <span className="text-muted">{"// "}</span>
          LET&apos;S CONNECT
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Have something in mind?
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Whether you have a project to discuss, a collaboration
          opportunity, or a role to share, I&apos;d love to hear from you.
        </p>

        <a
          href="mailto:mahaelshakhe@gmail.com"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 font-mono text-sm text-accent-foreground transition-transform hover:scale-[1.02] sm:text-base"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          mahaelshakhe@gmail.com
        </a>

        <div className="mt-10 flex items-center gap-8">
          <a
            href="https://github.com/Maha-Elsheikhe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/maha-elsheikhe-31704a427/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
