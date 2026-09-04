import Image from "next/image";
import Link from "next/link";
import { navigation } from "./nav-data";

export function SiteFooter() {
  return (
    <footer className="bg-brand-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="inline-flex items-center gap-3 rounded-2xl bg-white p-3 pr-4">
            <Image
              src="/images/logo-mark.jpeg"
              alt="The August Mandate logo"
              width={44}
              height={30}
              className="h-8 w-auto"
            />
            <span className="font-bold tracking-tight text-brand-800">
              The <span className="text-accent-500">August</span> Mandate
            </span>
          </div>
          <p className="mt-5 max-w-sm leading-relaxed">
            Raising a generation of empowered orphans through media and technology skills, godly
            discipleship, mentorship, and lifelong opportunity.
          </p>
          <a
            href="mailto:hello@theaugustmandate.org"
            className="mt-4 inline-block font-semibold text-accent-300 transition hover:text-accent-200"
          >
            hello@theaugustmandate.org
          </a>
        </div>

        <nav
          className="grid grid-cols-2 gap-8 sm:grid-cols-4"
          aria-label="Footer"
        >
          {navigation
            .filter((item) => item.children)
            .map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold uppercase tracking-widest text-white transition hover:text-accent-300"
                >
                  {item.label}
                </Link>
                <ul className="mt-4 space-y-2.5">
                  {item.children!.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="text-sm transition hover:text-accent-300"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} The August Mandate. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/partner-with-us" className="transition hover:text-accent-300">
              Partner With Us
            </Link>
            <Link href="/contact" className="transition hover:text-accent-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
