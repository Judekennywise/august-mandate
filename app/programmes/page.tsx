import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "../components/page-intro";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "The August Programme, media and creative skills, technology, mentorship and leadership, discipleship, and church media development.",
};

const programmes = [
  {
    id: "august-programme",
    eyebrow: "Flagship",
    title: "August Programme",
    text: [
      "Our flagship one-week intensive, held every August. Participants are immersed in hands-on media and technology training led by industry professionals — cameras in hand, laptops open, projects shipped by the end of the week.",
      "The week closes with each participant joining the year-round mentorship and discipleship community, so the momentum of August never stops.",
    ],
    image: {
      src: "/images/banner-training.jpg",
      alt: "A teenager filming outdoors with a camera mounted on a stabiliser",
      position: "object-[50%_30%]",
    },
  },
  {
    id: "media-creative-skills",
    eyebrow: "Skills Track",
    title: "Media & Creative Skills",
    text: [
      "Photography, videography, editing, graphic design, and storytelling — practical creative skills with real market demand.",
      "Participants learn by doing: shooting, cutting, and publishing real work, and building portfolios that open doors to paid opportunities.",
    ],
    image: {
      src: "/images/tile-media.jpg",
      alt: "A smiling young person reviewing a photograph on a camera screen",
      position: "object-center",
    },
  },
  {
    id: "technology",
    eyebrow: "Skills Track",
    title: "Technology",
    text: [
      "Digital literacy, productivity tools, and pathways into software, data, and emerging technologies that define the future of work.",
      "From first keystrokes to real projects, we expose participants to the tools and thinking the modern economy rewards.",
    ],
    image: {
      src: "/images/tile-technology.jpg",
      alt: "Two students in school uniform working together on a laptop",
      position: "object-center",
    },
  },
  {
    id: "mentorship-leadership",
    eyebrow: "Year-Round",
    title: "Mentorship & Leadership",
    text: [
      "Every participant is paired with mentors who walk with them all year — professionals who offer guidance, accountability, and belief.",
      "Leadership, character, and confidence are built deliberately, through personal development that prepares young people to lead in their communities.",
    ],
    image: {
      src: "/images/banner-mentorship.jpg",
      alt: "A tutor leaning over a desk to explain a lesson to two students",
      position: "object-[50%_40%]",
    },
  },
  {
    id: "discipleship",
    eyebrow: "Year-Round",
    title: "Discipleship",
    text: [
      "Godly discipleship is the foundation of the mandate. Participants grow in faith through structured discipleship that nurtures purpose and spiritual maturity.",
      "We raise young people who are not only skilled, but grounded — confident in who they are and whose they are.",
    ],
    image: {
      src: "/images/tile-discipleship.jpg",
      alt: "A teacher leading an outdoor lesson with children seated under trees",
      position: "object-center",
    },
  },
  {
    id: "church-media-development",
    eyebrow: "Partnership",
    title: "Church Media Development",
    text: [
      "We help churches build and train their media teams — sound, projection, livestreaming, photography, and content.",
      "It creates a double win: churches gain capable media ministries, and our participants gain real teams to serve in, learn from, and grow with.",
    ],
    image: {
      src: "/images/banner-opportunity.jpg",
      alt: "Teenagers in school uniform smiling together indoors",
      position: "object-[50%_35%]",
    },
  },
];

export default function ProgrammesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Programmes"
        title="What We Do"
        lead="Six programmes, one mandate: practical skills, godly discipleship, and real opportunity for orphaned children and young adults."
      />

      <section className="mx-auto max-w-6xl space-y-24 px-4 py-20 sm:px-6">
        {programmes.map((programme, i) => (
          <article
            key={programme.id}
            id={programme.id}
            className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2"
          >
            <div className={i % 2 === 1 ? "lg:order-last" : ""}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={programme.image.src}
                  alt={programme.image.alt}
                  fill
                  sizes="(min-width: 1024px) 34rem, 100vw"
                  className={`object-cover ${programme.image.position}`}
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-500">
                {programme.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                {programme.title}
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-600">
                {programme.text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-brand-950 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Want to teach, mentor, or sponsor a programme?
          </h2>
          <Link
            href="/partner-with-us"
            className="mt-8 inline-block rounded-full bg-accent-500 px-8 py-4 font-semibold text-white transition hover:bg-accent-600"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </>
  );
}
