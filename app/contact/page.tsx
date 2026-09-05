import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/page-intro";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The August Mandate.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Get in Touch"
        lead="Questions, partnerships, volunteering, or just want to know more? We would love to hear from you."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Email
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              The fastest way to reach us. We read every message.
            </p>
            <a
              href="mailto:theaugustmandate@gmail.com"
              className="mt-4 inline-block text-xl font-semibold text-brand-700 transition hover:text-brand-800"
            >
              theaugustmandate@gmail.com
            </a>
          </div>

          <div className="rounded-2xl bg-brand-900 p-8 text-white">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-3 text-lg">
              <li>
                <Link href="/partner-with-us" className="transition hover:text-accent-300">
                  Partner With Us →
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="transition hover:text-accent-300">
                  Explore Our Programmes →
                </Link>
              </li>
              <li>
                <Link href="/impact" className="transition hover:text-accent-300">
                  See Our Impact →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 p-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-500">
            What to include
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            When you write, let us know whether you are reaching out as an individual, an
            organisation, or a church — and whether your interest is partnering, mentoring,
            teaching, giving, or media development. It helps us respond with exactly what you
            need.
          </p>
        </div>
      </section>
    </>
  );
}
