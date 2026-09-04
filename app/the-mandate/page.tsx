import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "../components/page-intro";

export const metadata: Metadata = {
  title: "The Mandate",
  description:
    "The August Mandate (TAM) is dedicated to the empowerment and development of orphans — through Media, Technology, Mentorship, Discipleship and Opportunity.",
};

const approachAreas = [
  {
    title: "Media",
    intro: "We introduce orphans to practical creative and communication skills:",
    items: [
      "Photography",
      "Videography",
      "Graphic design",
      "Video editing",
      "Content creation",
      "Social media",
      "Broadcasting",
      "Digital storytelling",
    ],
    outro:
      "The aim is to expose them to creative possibilities and allow them to discover areas in which they may have interest and potential.",
  },
  {
    title: "Technology",
    intro: "We provide exposure to relevant technology and digital skills:",
    items: [
      "Computer literacy",
      "Digital tools",
      "Artificial Intelligence",
      "Digital communication",
      "Technology-based creativity",
      "Other relevant digital skills",
    ],
    outro:
      "Our goal is to help bridge the digital exposure gap and prepare orphans to participate meaningfully in an increasingly technology-driven world.",
  },
  {
    title: "Mentorship",
    intro:
      "Skills alone are not enough. We seek to connect orphans with responsible professionals, mentors and role models who can provide encouragement, guidance, career exposure and practical advice as they grow.",
    items: [],
    outro: "Through mentorship, an orphan can see possibilities beyond their current circumstances.",
  },
  {
    title: "Discipleship",
    intro:
      "The August Mandate is built on the belief that true development includes character, values, purpose and faith.",
    items: [],
    outro:
      "Through appropriate discipleship and values-based engagement, we help orphans understand their identity, purpose and responsibility, while encouraging them to use their lives and abilities positively.",
  },
  {
    title: "Opportunity",
    intro: "Training should lead somewhere.",
    items: [],
    outro:
      "We create opportunities for orphans to continue learning, practise their skills, meet professionals, participate in projects and, where appropriate, access further education, internships, scholarships, equipment, employment pathways and other developmental opportunities.",
  },
];

const beyondAugustWork = [
  "Follow-up training",
  "Continued mentorship",
  "Skills development",
  "Career guidance",
  "Educational support",
  "Practical projects",
  "Digital learning",
  "Professional exposure",
  "Access to equipment and resources",
  "Scholarships and opportunities",
];

const model = ["Identify", "Expose", "Equip", "Mentor", "Develop", "Connect", "Empower"];

const centreOfferings = [
  "Media training",
  "Technology training",
  "Computers and digital resources",
  "Creative equipment",
  "Mentorship",
  "Discipleship",
  "Leadership development",
  "Career guidance",
  "Practical projects",
  "Professional exposure",
  "Educational and career opportunities",
];

const kingdomPathways = [
  "Photographers",
  "Videographers",
  "Graphic designers",
  "Video editors",
  "Content creators",
  "Broadcasters",
  "Technology professionals",
  "Digital communicators",
  "Church media personnel",
];

const structure = [
  { label: "Primary Beneficiaries", value: "Orphans" },
  {
    label: "Core Areas of Empowerment",
    value: "Media • Technology • Mentorship • Discipleship • Opportunity",
  },
  {
    label: "Key Access & Implementation Partners",
    value: "Orphanage Homes • Caregivers • Churches • Communities • NGOs • Professionals • Sponsors",
  },
  { label: "Flagship Period", value: "August" },
  { label: "Long-Term Direction", value: "Continuous Empowerment & The TAM Centre" },
  {
    label: "Strategic Outcome",
    value: "Empowered orphans with skills, purpose, character and access to opportunity",
  },
];

export default function TheMandatePage() {
  return (
    <>
      <PageIntro
        eyebrow="The Mandate"
        title="Being an Orphan Should Never Mean Being Without Opportunity"
        lead="The August Mandate (TAM) is an initiative dedicated to the empowerment and development of orphans — helping them discover their potential and gain access to the skills, mentorship, discipleship and opportunities they need to build meaningful futures."
      />

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              Every orphan has potential, gifts, dreams and a future. Our mandate is to create
              pathways through which that potential can be identified, nurtured and developed.
            </p>
            <p>
              Our primary areas of empowerment are{" "}
              <strong className="text-brand-700">
                Media, Technology, Mentorship, Discipleship and Opportunity
              </strong>
              .
            </p>
            <p>
              While orphanage homes are an important part of our work, our focus extends beyond
              children living in residential orphanage facilities. We seek to reach and support
              orphans wherever they are — working with orphanage homes, caregivers, churches,
              communities, organisations and other relevant stakeholders to identify and provide
              appropriate support.
            </p>
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

      {/* The Need */}
      <section id="the-need" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-500">
                The Need
              </h2>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Behind every circumstance is a child with potential
              </h3>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Across Nigeria, many orphans grow up facing circumstances that can affect their
                  access to education, technology, practical skills, mentorship, career exposure
                  and other opportunities for personal development.
                </p>
                <p>
                  An orphan may have an interest in photography, technology, design, media,
                  communication, entrepreneurship or another field — but lack the resources,
                  exposure or guidance necessary to discover and develop that interest.
                </p>
                <p className="font-semibold text-brand-700">
                  The August Mandate exists to help close that gap.
                </p>
              </div>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-slate-600 lg:pt-24">
              <p>
                We believe that empowerment should go beyond providing immediate care. While food,
                shelter, education and basic welfare remain important, we also want to contribute
                to the long-term development of the orphan — opportunities to learn practical
                skills, discover their strengths, meet positive role models, receive mentorship
                and understand that they can have a meaningful future.
              </p>
              <p>
                We also recognise the growing importance of Media and Technology in education,
                communication, employment and entrepreneurship. For this reason, TAM places
                particular emphasis on equipping orphans with relevant Media and Technology
                skills, combined with mentorship, discipleship, personal development and exposure
                to opportunities.
              </p>
            </div>
          </div>
          <blockquote className="mx-auto mt-14 max-w-3xl text-center">
            <p className="text-2xl font-bold leading-snug tracking-tight text-brand-800 sm:text-3xl">
              Our desire is not simply to teach an orphan a skill. Our desire is to help an orphan
              discover what they can become.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Our Approach */}
      <section id="our-approach" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-500">
          Our Approach
        </h2>
        <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
          Centred on the individual orphan
        </h3>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          Every orphan has a different background, age, interest, ability and need. We work with
          trusted organisations and caregivers to understand those needs and develop interventions
          that are appropriate and meaningful. Our approach is built around five key areas:
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {approachAreas.map((area, i) => (
            <div
              key={area.title}
              className={`rounded-2xl border border-slate-200 p-7 ${
                i === 0 ? "bg-brand-50 border-brand-100" : ""
              }`}
            >
              <h4 className="text-lg font-bold uppercase tracking-wide text-brand-700">
                {area.title}
              </h4>
              <p className="mt-3 leading-relaxed text-slate-600">{area.intro}</p>
              {area.items.length > 0 && (
                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-slate-600">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-4 text-sm leading-relaxed text-slate-500">{area.outro}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond August */}
      <section id="beyond-august" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-500">
                Beyond August
              </h2>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                August is the starting point, not the finishing point
              </h3>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  The name <em>The August Mandate</em> reflects our commitment to make August a
                  significant period of intentional intervention, empowerment and service to
                  orphans. During the annual August programme, TAM brings together trainers,
                  mentors, volunteers, partners and supporters to provide structured training and
                  engagement.
                </p>
                <p>
                  But we recognise an important reality:{" "}
                  <strong className="text-brand-700">
                    one week of training cannot transform an orphan&apos;s future by itself.
                  </strong>
                </p>
                <p>
                  A child may discover an interest in photography during the August programme.
                  Another may discover graphic design. Another may develop an interest in
                  technology. Another may simply gain the confidence to believe they can achieve
                  something meaningful. What happens next matters.
                </p>
                <p>
                  This is why TAM develops a continuous relationship with beneficiaries and the
                  organisations and caregivers supporting them — a continuum of empowerment,
                  rather than a one-off intervention.
                </p>
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/banner-mentorship.jpg"
                  alt="A tutor leaning over a desk to explain a lesson to two students"
                  fill
                  sizes="(min-width: 1024px) 34rem, 100vw"
                  className="object-cover object-[50%_40%]"
                />
              </div>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-600">
                  Beyond August, our work includes
                </h4>
                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-600">
                  {beyondAugustWork.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* The model */}
          <div className="mt-16">
            <h4 className="text-center text-sm font-semibold uppercase tracking-widest text-brand-600">
              Our Model
            </h4>
            <ol className="mt-6 flex flex-wrap items-center justify-center gap-y-3">
              {model.map((step, i) => (
                <li key={step} className="flex items-center">
                  <span className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white">
                    {step}
                  </span>
                  {i < model.length - 1 && (
                    <span aria-hidden="true" className="px-2 text-accent-500">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Long-Term Vision */}
      <section id="long-term-vision" className="scroll-mt-24 bg-brand-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Long-Term Vision
          </h2>
          <h3 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            A dedicated centre for the empowerment and development of orphans
          </h3>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            The proposed TAM Centre would be more than a classroom — an ecosystem of opportunity
            where an orphan can discover an interest, develop a skill, find a mentor, practise
            that skill and eventually connect to opportunities that can influence their future.
          </p>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-7">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-accent-300">
              A consistent environment with access to
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-300 sm:grid-cols-3">
              {centreOfferings.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Kingdom Media Development */}
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h4 className="text-2xl font-bold tracking-tight text-accent-300">
                Kingdom Media Development
              </h4>
              <div className="mt-4 space-y-4 leading-relaxed text-slate-300">
                <p>
                  An important part of this long-term vision is identifying orphans who
                  demonstrate particular interest and ability in Media and Technology, and helping
                  them develop those abilities.
                </p>
                <p>
                  Through this pathway, TAM can help raise a generation of skilled, purpose-driven
                  and Kingdom-minded professionals who can use their abilities to serve God,
                  support the Church and advance the Kingdom agenda — one outcome of the broader
                  mandate to empower orphans, rather than a replacement of its central focus.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h5 className="text-sm font-semibold uppercase tracking-widest text-accent-300">
                Some may eventually become
              </h5>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-300">
                {kingdomPathways.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Heart of the Mandate */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-500">
            The Heart of The August Mandate
          </h2>
          <p className="mt-6 text-3xl font-bold leading-snug tracking-tight text-brand-800 sm:text-4xl">
            We exist for the orphan.
          </p>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              We believe every orphan deserves more than survival. They deserve the opportunity to
              discover their potential, develop their abilities, receive guidance, experience love
              and mentorship, and have access to opportunities that can help shape their future.
            </p>
            <p>
              Through Media, Technology, Mentorship, Discipleship and Opportunity, we invest in
              orphans — not just for a week in August, but towards a future of purpose, dignity,
              skill and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Structure of the Mandate */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The Structure of the Mandate
          </h2>
          <dl className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {structure.map((row) => (
              <div key={row.label} className="rounded-2xl border border-slate-200 bg-white p-6">
                <dt className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                  {row.label}
                </dt>
                <dd className="mt-2 font-semibold text-slate-800">{row.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 text-center">
            <Link
              href="/partner-with-us"
              className="inline-block rounded-full bg-accent-500 px-8 py-4 font-semibold text-white transition hover:bg-accent-600"
            >
              Be Part of the Mandate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
