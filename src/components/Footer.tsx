"use client";

import { useSyncExternalStore } from "react";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const BUILD_YEAR = 2026;

function subscribe() {
  return () => {};
}

function getYear() {
  return new Date().getFullYear();
}

function getServerYear() {
  return BUILD_YEAR;
}

export default function Footer() {
  const year = useSyncExternalStore(subscribe, getYear, getServerYear);

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          Designed &amp; Built by Maha Elsheikhe. &copy; {year}
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Maha-Elsheikhe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Maha Elsheikhe on GitHub"
            className="transition-colors hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/maha-elsheikhe-31704a427/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Maha Elsheikhe on LinkedIn"
            className="transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            Top
          </a>
        </div>
      </div>
    </footer>
  );
}
