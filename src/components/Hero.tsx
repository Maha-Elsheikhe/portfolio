import { GithubIcon, LinkedinIcon } from "./icons";

const codeLines: { tokens: { text: string; className?: string }[] }[] = [
  { tokens: [{ text: "const " }, { text: "developer", className: "text-foreground" }, { text: " = {" }] },
  { tokens: [{ text: "  name: " }, { text: '"Maha Elsheikhe"', className: "text-accent" }, { text: "," }] },
  { tokens: [{ text: "  role: " }, { text: '"Frontend & Full-Stack"', className: "text-accent" }, { text: "," }] },
  {
    tokens: [
      { text: "  stack: [" },
      { text: '"React"', className: "text-accent" },
      { text: ", " },
      { text: '"Next.js"', className: "text-accent" },
      { text: ", " },
      { text: '"TypeScript"', className: "text-accent" },
      { text: "]," },
    ],
  },
  { tokens: [{ text: "  builds: " }, { text: '"interface → API"', className: "text-accent" }] },
  { tokens: [{ text: "};" }] },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(var(--muted) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="mb-6 font-mono text-sm text-accent">
            <span className="text-muted">{"// "}</span>
            FRONTEND &amp; FULL-STACK DEVELOPER
          </p>

          <h1 className="text-foreground">
            <span className="block text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Hi, I&apos;m Maha.
            </span>
            <span className="mt-2 block text-3xl font-normal tracking-tight text-foreground sm:text-4xl md:text-5xl">
              I build web experiences from interface to API.
            </span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-muted md:text-lg">
            I&apos;m a developer focused on building modern, responsive, and
            user-friendly web applications using modern frontend and backend
            technologies.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/Maha-Elsheikhe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Maha Elsheikhe on GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/maha-elsheikhe-31704a427/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Maha Elsheikhe on LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden="true"
            className="absolute -top-8 -left-6 h-24 w-24 rounded-full border border-accent/30"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-10 -right-4 h-16 w-16 rotate-12 border border-border"
          />

          <div className="relative rotate-2 rounded-2xl border border-border bg-surface p-6 shadow-xl shadow-black/10">
            <div className="mb-4 flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
            </div>
            <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed text-muted">
              {codeLines.map((line, i) => (
                <div key={i}>
                  {line.tokens.map((token, j) => (
                    <span key={j} className={token.className}>
                      {token.text}
                    </span>
                  ))}
                </div>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
