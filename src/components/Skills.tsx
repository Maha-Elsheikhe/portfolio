import { skillCategories } from "@/data/skills";

export default function Skills() {
  const [primary, ...rest] = skillCategories;

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="mb-6 font-mono text-sm text-accent">
            <span className="text-muted">{"// "}</span>
            MY TOOLKIT
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Technologies I work with.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
            The technologies and tools I use to build modern web applications
            and practical digital solutions.
          </p>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <CategoryBlock category={primary} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((category) => (
            <CategoryBlock key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryBlock({ category }: { category: (typeof skillCategories)[number] }) {
  const Icon = category.icon;
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
        <h3 className="text-sm font-medium text-foreground">
          {category.title}
        </h3>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
