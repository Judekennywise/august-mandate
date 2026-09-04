"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "./nav-data";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 8 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Close the mobile menu whenever the route changes (state reset during render).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setOpenSection(null);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/logo-mark.jpeg"
            alt=""
            width={44}
            height={30}
            priority
            className="h-8 w-auto"
          />
          <span className="text-lg font-bold tracking-tight text-brand-800">
            The <span className="text-accent-500">August</span> Mandate
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition hover:text-brand-600 ${
                    pathname.startsWith(item.href) ? "text-brand-600" : "text-slate-600"
                  }`}
                >
                  {item.label}
                  <Chevron className="h-4 w-4 transition group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="min-w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition hover:text-brand-600 ${
                  pathname === item.href ? "text-brand-600" : "text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/partner-with-us"
            className="hidden rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-600 sm:inline-block"
          >
            Support Us
          </Link>
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-slate-200 bg-white lg:hidden" aria-label="Main mobile">
          <div className="mx-auto max-w-6xl space-y-1 px-4 py-4 sm:px-6">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSection((current) => (current === item.label ? null : item.label))
                    }
                    aria-expanded={openSection === item.label}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left font-medium text-slate-700"
                  >
                    {item.label}
                    <Chevron
                      className={`h-4 w-4 transition ${openSection === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openSection === item.label && (
                    <div className="ml-3 border-l border-slate-200 pl-3">
                      <Link
                        href={item.href}
                        className="block rounded-xl px-3 py-2 text-sm text-slate-600"
                      >
                        Overview
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3 py-2 text-sm text-slate-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl px-3 py-2.5 font-medium text-slate-700"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/partner-with-us"
              className="mt-2 block rounded-full bg-accent-500 px-4 py-2.5 text-center font-semibold text-white"
            >
              Support Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
