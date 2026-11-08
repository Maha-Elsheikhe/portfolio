function Tech({ children }: { children: string }) {
  return (
    <code className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
      {children}
    </code>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="mb-6 font-mono text-sm text-accent">
              <span className="text-muted">{"// "}</span>
              ABOUT ME
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              A little about me.
            </h2>
          </div>

          <div className="max-w-prose space-y-6 text-base leading-relaxed text-muted md:text-lg">
            <p className="text-lg text-foreground md:text-xl">
              I&apos;m a software developer passionate about building
              practical digital solutions and modern web applications.
            </p>
            <p>
              My work covers frontend development, API integration, and
              backend development. I enjoy turning ideas and requirements
              into responsive, maintainable, and user-friendly applications.
            </p>
            <p>
              I primarily work with <Tech>React</Tech>, <Tech>Next.js</Tech>,
              and <Tech>TypeScript</Tech>, while also having experience with{" "}
              <Tech>Node.js</Tech>, <Tech>Express</Tech>, <Tech>Python</Tech>,
              and relational databases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
