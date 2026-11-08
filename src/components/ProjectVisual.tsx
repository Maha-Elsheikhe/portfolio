import { Database, Lock, ShoppingCart } from "lucide-react";
import type { ProjectVisual as ProjectVisualType } from "@/data/projects";

export default function ProjectVisual({ type }: { type: ProjectVisualType }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(var(--muted) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {type === "jadplus" && <JadPlusVisual />}
      {type === "meshhub" && <MeshHubVisual />}
      {type === "avion" && <AvionVisual />}
      {type === "backend" && <BackendVisual />}
    </div>
  );
}

function JadPlusVisual() {
  const bars = [40, 65, 35, 80, 55, 70, 45];
  return (
    <div className="relative flex h-full w-full items-stretch gap-4 p-6">
      <div className="hidden w-10 flex-col items-center gap-4 rounded-xl border border-border bg-background/40 py-4 sm:flex">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="h-2 w-2 rounded-full bg-muted/30" />
        <span className="h-2 w-2 rounded-full bg-muted/30" />
        <span className="h-2 w-2 rounded-full bg-muted/30" />
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="grid grid-cols-3 gap-3">
          {["Revenue", "Orders", "Customers"].map((label) => (
            <div
              key={label}
              className="rounded-lg border border-border bg-background/40 p-3"
            >
              <p className="font-mono text-[10px] uppercase tracking-wide text-muted">
                {label}
              </p>
              <p className="mt-1 font-mono text-sm text-foreground">— </p>
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-2 rounded-lg border border-border bg-background/40 p-4">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-accent/70"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MeshHubVisual() {
  return (
    <div className="grid h-full w-full grid-cols-3 gap-3 p-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 rounded-lg border border-border bg-background/40 p-2"
        >
          <div className="aspect-square rounded-md border border-border bg-background/60" />
          <div className="h-1.5 w-3/4 rounded bg-muted/30" />
          <div className="h-1.5 w-1/2 rounded bg-accent/60" />
        </div>
      ))}
    </div>
  );
}

function AvionVisual() {
  return (
    <div className="flex h-full w-full gap-4 p-6">
      <div className="grid flex-1 grid-cols-2 gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 rounded-lg border border-border bg-background/40 p-2"
          >
            <div className="aspect-[4/3] rounded-md border border-border bg-background/60" />
            <div className="h-1.5 w-2/3 rounded bg-muted/30" />
          </div>
        ))}
      </div>
      <div className="flex w-28 flex-col gap-3 rounded-lg border border-border bg-background/40 p-3 sm:w-36">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wide text-muted">
          <ShoppingCart className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          Cart
        </div>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-1.5 w-full rounded bg-muted/25" />
        ))}
        <div className="mt-auto h-6 w-full rounded bg-accent/70" />
      </div>
    </div>
  );
}

function BackendVisual() {
  const endpoints = [
    { method: "POST", path: "/api/auth/login" },
    { method: "GET", path: "/api/products" },
    { method: "POST", path: "/api/orders" },
    { method: "GET", path: "/api/orders/:id" },
  ];
  return (
    <div className="flex h-full w-full flex-col gap-4 p-6">
      <div className="flex flex-col gap-2 rounded-lg border border-border bg-background/40 p-3">
        {endpoints.map((e) => (
          <div
            key={e.path}
            className="flex items-center gap-3 font-mono text-[11px]"
          >
            <span
              className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                e.method === "POST"
                  ? "bg-accent/20 text-accent"
                  : "border border-border text-muted"
              }`}
            >
              {e.method}
            </span>
            <span className="text-muted">{e.path}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-1 items-center justify-center gap-6 rounded-lg border border-border bg-background/40">
        <Database className="h-6 w-6 text-accent" aria-hidden="true" />
        <Lock className="h-5 w-5 text-muted" aria-hidden="true" />
      </div>
    </div>
  );
}
