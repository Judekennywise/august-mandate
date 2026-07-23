import Image from "next/image";
import Link from "next/link";
import { DotGrid, LogoMark } from "./components/artwork";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#objectives", label: "Objectives" },
  { href: "#programme", label: "Programme" },
  { href: "#get-involved", label: "Get Involved" },
];

const objectives = [
  {
    title: "Practical Skills Training",
    text: "Provide practical training in media and technology skills that can create employment, entrepreneurship, and career opportunities for orphaned children and young adults.",
  },
  {
    title: "Future-Ready Exposure",
    text: "Expose participants to digital tools and emerging technologies that prepare them for the future of work.",
  },
  {
    title: "Mentorship & Discipleship",
    text: "Establish a structured mentorship and discipleship programme that supports participants beyond the annual August training.",
  },
  {
    title: "Leadership & Character",
    text: "Nurture leadership, character, confidence, and purpose through spiritual and personal development.",
  },
  {
    title: "Supportive Community",
    text: "Create a supportive community where participants have access to learning resources, professional guidance, and meaningful opportunities.",
  },
  {
    title: "Training & Innovation Centre",
    text: "Build a sustainable training and innovation centre that provides year-round access to facilities, equipment, and continuous learning for orphans.",
  },
  {
    title: "Partnerships & Opportunities",
    text: "Partner with individuals, organisations, churches, and industry professionals to provide scholarships, internships, employment opportunities, and other forms of support.",
  },
];

const pillars = [
  {
    title: "Media & Technology Training",
    text: "Hands-on training in relevant media and technology skills — opening doors to employment, entrepreneurship, and creative careers.",
    image: {
      src: "/images/banner-training.jpg",
      alt: "A teenager filming outdoors with a camera mounted on a stabiliser",
      position: "object-[50%_30%]",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 18v3M7 9l3 2.5L7 14M12.5 14H17" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Discipleship & Mentorship",
    text: "Godly discipleship and continuous mentorship that walk with each participant far beyond the one-week August training.",
    image: {
      src: "/images/banner-mentorship.jpg",
      alt: "A tutor leaning over a desk to explain a lesson to two students",
      position: "object-[50%_40%]",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
        <path d="M12 21c-4.5-3.5-8-6.4-8-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 11c0 3.6-3.5 6.5-8 10Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Lifelong Opportunities",
    text: "Scholarships, internships, employment pathways, and a supportive community that turn training into lasting transformation.",
    image: {
      src: "/images/banner-opportunity.jpg",
      alt: "Teenagers in school uniform smiling together indoors",
      position: "object-[50%_35%]",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8">
        <path d="M12 3v12M12 3l-4 4M12 3l4 4M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const involvement = [
  {
    title: "Partner With Us",
    text: "Individuals, organisations, and churches can partner to provide scholarships, internships, and employment opportunities for beneficiaries.",
  },
  {
    title: "Mentor & Teach",
    text: "Industry professionals can volunteer as trainers, mentors, and disciplers — investing skills and guidance into a young life.",
  },
  {
    title: "Give & Support",
    text: "Your giving helps build a sustainable training and innovation centre with year-round access to facilities and equipment.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="#" className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900">
            <LogoMark className="h-9 w-9 shrink-0" />
            <span>
              The <span className="text-amber-600">August</span> Mandate
            </span>
          </Link>
          <nav className="hidden gap-8 text-sm font-medium text-slate-600 sm:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-amber-600">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#get-involved"
            className="rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            Support Us
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-900 text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, #f59e0b 0, transparent 40%), radial-gradient(circle at 80% 80%, #d97706 0, transparent 40%)",
            }}
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="mb-4 inline-block rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1 text-sm font-medium text-amber-300">
                Raising a generation of empowered orphans
              </p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                Skills. Discipleship. <span className="text-amber-400">Opportunity.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                The August Mandate empowers orphans and young persons through practical media and
                technology education — with continuous mentorship, discipleship, and personal
                development that extends beyond a one-week training programme into a lifelong
                journey of transformation and opportunity.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#get-involved"
                  className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
                >
                  Get Involved
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-slate-500 px-6 py-3 font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-[3rem] bg-amber-500/20 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-amber-500/30 shadow-2xl">
                <Image
                  src="/images/hero.jpg"
                  alt="A man showing three boys the screen of his camera outdoors"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 100vw"
                  className="object-cover object-[50%_35%]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-600">
                Our Vision
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                To raise a generation of empowered orphans by equipping them with relevant media
                and technology skills, godly discipleship, mentorship, and opportunities that
                enable them to become self-reliant, purpose-driven, and impactful members of
                society.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-8 text-white">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-amber-400">
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

          {/* Story collage */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              {
                caption: "Media",
                src: "/images/tile-media.jpg",
                alt: "A smiling young person reviewing a photograph on a camera screen",
              },
              {
                caption: "Technology",
                src: "/images/tile-technology.jpg",
                alt: "Two students in school uniform working together on a laptop",
              },
              {
                caption: "Discipleship",
                src: "/images/tile-discipleship.jpg",
                alt: "A teacher leading an outdoor lesson with children seated under trees",
              },
              {
                caption: "Community",
                src: "/images/tile-community.jpg",
                alt: "A group of children smiling together outdoors",
              },
            ].map((tile) => (
              <figure
                key={tile.caption}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-900"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes="(min-width: 640px) 17rem, 48vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-4 py-3 text-center text-sm font-semibold text-amber-400">
                  {tile.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Pillars */}
        <section id="programme" className="scroll-mt-20 bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              More Than a One-Week Programme
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
              Every August we train. All year round we mentor, disciple, and open doors.
            </p>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative aspect-[2/1] w-full bg-slate-900">
                    <Image
                      src={pillar.image.src}
                      alt={pillar.image.alt}
                      fill
                      sizes="(min-width: 768px) 22rem, 100vw"
                      className={`object-cover ${pillar.image.position}`}
                    />
                  </div>
                  <div className="p-8">
                    <div className="-mt-14 mb-5 inline-flex rounded-xl bg-amber-100 p-3 text-amber-700 shadow-md ring-4 ring-white">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{pillar.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{pillar.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section id="objectives" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Objectives
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            Seven commitments that guide everything we do.
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {objectives.map((objective, i) => (
              <div key={objective.title} className="rounded-2xl border border-slate-200 p-6">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-slate-900">{objective.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{objective.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Get Involved */}
        <section
          id="get-involved"
          className="relative scroll-mt-20 overflow-hidden bg-slate-900 py-20 text-white"
        >
          <DotGrid className="pointer-events-none absolute inset-0 h-full w-full opacity-15" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Get Involved
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-300">
              It takes a community to raise a generation. Here is how you can be part of the
              mandate.
            </p>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {involvement.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-700 bg-slate-800/60 p-8">
                  <h3 className="text-xl font-semibold text-amber-400">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-14 text-center">
              <a
                href="mailto:hello@theaugustmandate.org"
                className="inline-block rounded-full bg-amber-500 px-8 py-4 text-lg font-semibold text-slate-900 transition hover:bg-amber-400"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:px-6">
          <p className="flex items-center gap-2.5">
            <LogoMark className="h-7 w-7 shrink-0" />
            <span>© {new Date().getFullYear()} The August Mandate. All rights reserved.</span>
          </p>
          <p>Empowering orphans through media, technology, and discipleship.</p>
        </div>
      </footer>
    </div>
  );
}
