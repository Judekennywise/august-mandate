import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/page-intro";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Partner, mentor, teach, or give — how individuals, organisations, and churches can support The August Mandate.",
};

const ways = [
  {
    title: "Partner",
    text: "Individuals, organisations, and churches can partner to provide scholarships, internships, and employment opportunities for beneficiaries.",
    cta: "Discuss a partnership",
    subject: "Partnership with The August Mandate",
  },
  {
    title: "Mentor & Teach",
    text: "Industry professionals can volunteer as trainers, mentors, and disciplers — investing skills and guidance into a young life.",
    cta: "Volunteer your skills",
    subject: "Volunteering as a mentor or trainer",
  },
  {
    title: "Give & Support",
    text: "Your giving funds training, equipment, and the vision of a sustainable training and innovation centre with year-round access for orphans.",
    cta: "Give to the mandate",
    subject: "Giving to The August Mandate",
  },
  {
    title: "Host & Equip",
    text: "Churches can invite us to develop their media teams — creating serving and learning opportunities for participants while strengthening ministry.",
    cta: "Invite us to your church",
    subject: "Church media development enquiry",
  },
];

export default function PartnerPage() {
  return (
    <>
      <PageIntro
        eyebrow="Partner With Us"
        title="There Is a Place for You in the Mandate"
        lead="It takes a community to raise a generation. Whether you bring skills, opportunities, resources, or prayer — you can be part of transforming a young life."
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {ways.map((way) => (
            <div
              key={way.title}
              className="flex flex-col rounded-2xl border border-slate-200 p-8 transition hover:border-brand-200 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-brand-700">{way.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-slate-600">{way.text}</p>
              <a
                href={`mailto:hello@theaugustmandate.org?subject=${encodeURIComponent(way.subject)}`}
                className="mt-6 inline-block font-semibold text-accent-500 transition hover:text-accent-600"
              >
                {way.cta} →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-950 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to start the conversation?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Tell us how you would like to be involved and we will get back to you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@theaugustmandate.org?subject=Partnering%20with%20The%20August%20Mandate"
              className="rounded-full bg-accent-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-accent-600"
            >
              Email Us
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-slate-500 px-8 py-4 text-lg font-semibold text-white transition hover:border-accent-400 hover:text-accent-300"
            >
              Contact Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
