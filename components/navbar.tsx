"use client";

import Link from "next/link";
import { useState } from "react";
import { CtaButton } from "./cta-button";

const navLinks = [
  { href: "/food-tour", label: "Food Tour" },
  { href: "/day-tour", label: "Day Tour" },
  { href: "/hakomi", label: "Hakomi Therapy" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-accent bg-paper text-ink">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-4 md:px-10"
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display text-2xl text-ink md:text-[1.75rem]"
        >
          Sherry Chang
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-semibold tracking-wide lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cta after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <CtaButton className="px-5 py-2.5 text-sm" />
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-accent bg-paper px-4 pb-8 pt-4 lg:hidden"
      >
        <ul className="flex flex-col gap-5 font-display text-3xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <CtaButton className="mt-8 w-full" />
      </div>
    </header>
  );
}
