import Image from "next/image";
import Link from "next/link";
import { DotGrid } from "./components/artwork";

const pillars = [
  {
    title: "Media & Technology Training",
    text: "Hands-on training in relevant media and technology skills — opening doors to employment, entrepreneurship, and creative careers.",
    href: "/programmes",
    image: {
      src: "/images/banner-training.jpg",
      alt: "A teenager filming outdoors with a camera mounted on a stabiliser",
      position: "object-[50%_30%]",
    },
  },
  {
    title: "Discipleship & Mentorship",
    text: "Godly discipleship and continuous mentorship that walk with each participant far beyond the one-week August training.",
    href: "/programmes#discipleship",
    image: {
      src: "/images/banner-mentorship.jpg",
      alt: "A tutor leaning over a desk to explain a lesson to two students",
      position: "object-[50%_40%]",
    },
  },
  {
    title: "Lifelong Opportunities",
    text: "Scholarships, internships, employment pathways, and a supportive community that turn training into lasting transformation.",
    href: "/the-mandate#long-term-vision",
    image: {
      src: "/images/banner-opportunity.jpg",
      alt: "Teenagers in school uniform smiling together indoors",
      position: "object-[50%_35%]",
    },
  },
];

const explore = [
  {
    title: "About Us",
    text: "Who we are, what we believe, and the team carrying the mandate.",
    href: "/about",
  },
  {
    title: "The Mandate",
    text: "The need we exist to answer and the approach we take, all year round.",
    href: "/the-mandate",
  },
  {
    title: "Programmes",
    text: "From the flagship August Programme to church media development.",
    href: "/programmes",
  },
  {
    title: "Impact",
    text: "Stories, testimonials, and pictures from the journey so far.",
    href: "/impact",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #7a3aa4 0, transparent 40%), radial-gradient(circle at 80% 80%, #f5822a 0, transparent 40%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="mb-4 inline-block rounded-full border border-accent-400/40 bg-accent-400/10 px-4 py-1 text-sm font-medium text-accent-300">
              Raising a generation of empowered orphans
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Skills. Discipleship. <span className="text-accent-400">Opportunity.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              The August Mandate empowers orphans and young persons through practical media and
              technology education — with continuous mentorship, discipleship, and personal
              development that extends beyond a one-week training programme into a lifelong
              journey of transformation and opportunity.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/partner-with-us"
                className="rounded-full bg-accent-500 px-6 py-3 font-semibold text-white transition hover:bg-accent-600"
              >
                Get Involved
              </Link>
              <Link
                href="/the-mandate"
                className="rounded-full border border-slate-500 px-6 py-3 font-semibold text-white transition hover:border-accent-400 hover:text-accent-300"
              >
                Discover the Mandate
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-[3rem] bg-accent-500/20 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-accent-400/30 shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="A man showing three boys the screen of his camera outdoors"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 100vw"
                className="object-cover object-[50%_35%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission teaser */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              Our Vision
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              To raise a generation of empowered orphans by equipping them with relevant media and
              technology skills, godly discipleship, mentorship, and opportunities that enable
              them to become self-reliant, purpose-driven, and impactful members of society.
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
              them to become confident, skilled, and purpose-driven leaders who positively impact
              their communities.
            </p>
          </div>
        </div>
        <div className="mt-6 text-right">
          <Link href="/about" className="font-semibold text-brand-600 transition hover:text-brand-700">
            More about us →
          </Link>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            More Than a One-Week Programme
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            Every August we train. All year round we mentor, disciple, and open doors.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[2/1] w-full bg-brand-950">
                  <Image
                    src={pillar.image.src}
                    alt={pillar.image.alt}
                    fill
                    sizes="(min-width: 768px) 22rem, 100vw"
                    className={`object-cover transition duration-500 group-hover:scale-105 ${pillar.image.position}`}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 transition group-hover:text-brand-600">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{pillar.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore the site */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Explore the Mandate
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {explore.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-2xl border border-slate-200 p-6 transition hover:border-brand-200 hover:bg-brand-50"
            >
              <h3 className="font-semibold text-slate-900 transition group-hover:text-brand-700">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.text}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-accent-500">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-950 py-20 text-white">
        <DotGrid className="pointer-events-none absolute inset-0 h-full w-full opacity-15" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            It Takes a Community to Raise a Generation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Partner, mentor, teach, or give — there is a place for you in the mandate.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/partner-with-us"
              className="rounded-full bg-accent-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-accent-600"
            >
              Partner With Us
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-500 px-8 py-4 text-lg font-semibold text-white transition hover:border-accent-400 hover:text-accent-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
