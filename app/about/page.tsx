import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "../components/page-intro";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, vision, mission, core values, and team behind The August Mandate.",
};

const coreValues = [
  {
    title: "Faith",
    text: "Everything we do is rooted in godly discipleship — we raise young people who know Christ and live with purpose.",
  },
  {
    title: "Love",
    text: "We serve orphaned children and young adults as family, with the care, dignity, and belonging every child deserves.",
  },
  {
    title: "Excellence",
    text: "We train to industry standard. The skills our participants gain must open real doors in real careers.",
  },
  {
    title: "Empowerment",
    text: "We equip, not just support — building self-reliant, confident young people who can stand on their own.",
  },
  {
    title: "Community",
    text: "It takes a community to raise a generation. We build one around every participant, and we build it to last.",
  },
  {
    title: "Integrity",
    text: "We are faithful stewards of every gift, partnership, and young life entrusted to us.",
  },
];

const team = [
  { name: "Shodunke Opeyemi David", role: "Team Lead", image: "/images/team-1.jpeg", position: "object-top" },
  { name: "Hannah Oniyide Ayomide", role: "Admin & Financial Advisor", image: "/images/team-4.jpeg", position: "object-top" },
  { name: "Shodunke Oluwafikayomi", role: "Team Welfare Manager", image: "/images/team-3.jpeg", position: "object-top" },
  { name: "Oniyide Oluwatosin Ayomikun", role: "Creative Designer", image: "/images/team-2.jpeg", position: "object-top" },
  { name: "Oyemade Adekunle", role: "Cinematographer & Editor", image: "/images/team-5.jpeg", position: "object-top" },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Us"
        title="Who We Are"
        lead="The August Mandate is a faith-driven initiative raising a generation of empowered orphans through media and technology skills, discipleship, mentorship, and opportunity."
      />

      {/* Our Story */}
      <section id="our-story" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-500">
              Our Story
            </h2>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              It began with one August
            </h3>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                The August Mandate was born out of a simple conviction: that orphaned children and
                young adults carry the same gifts, dreams, and potential as any other — they only
                lack the access, tools, and people to walk with them.
              </p>
              <p>
                What started as a one-week media and technology training held every August has
                grown into a year-round mandate: practical skills training, godly discipleship,
                structured mentorship, and a community that keeps opening doors long after the
                training week ends.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/tile-community.jpg"
              alt="A group of children smiling together outdoors"
              fill
              sizes="(min-width: 1024px) 34rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-100 bg-white p-8">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600">
                Our Vision
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                To raise a generation of empowered orphans by equipping them with relevant media
                and technology skills, godly discipleship, mentorship, and opportunities that
                enable them to become self-reliant, purpose-driven, and impactful members of
                society.
              </p>
            </div>
            <div className="rounded-2xl bg-brand-900 p-8 text-white">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Our Mission
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-200">
                The August Mandate exists to transform the lives of orphaned children and young
                adults by equipping them with media and technology skills, nurturing them through
                mentorship and discipleship, and providing long-term opportunities that empower
                them to become confident, skilled, and purpose-driven leaders who positively
                impact their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="core-values" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Core Values
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          Six convictions that shape how we serve.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, i) => (
            <div key={value.title} className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {i + 1}
              </div>
              <h3 className="font-semibold text-slate-900">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section id="our-team" className="scroll-mt-24 bg-brand-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-300">
            The people carrying the mandate.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((member) => (
              <figure key={member.image} className="text-center">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-56 overflow-hidden rounded-2xl ring-1 ring-white/15">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    fill
                    sizes="(min-width: 1024px) 13rem, (min-width: 640px) 45vw, 100vw"
                    className={`object-cover ${member.position}`}
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="font-semibold">{member.name}</p>
                  <p className="mt-1 text-sm text-accent-300">{member.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
