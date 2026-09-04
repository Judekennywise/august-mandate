import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "../components/page-intro";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Impact stories, testimonials, gallery, and reports from The August Mandate.",
};

const galleryImages = [
  {
    src: "/images/outreach-1.jpeg",
    alt: "The August Mandate team and children gathered outside Compassionate Orphanage",
  },
  {
    src: "/images/outreach-3.jpeg",
    alt: "Team members and children holding copies of books presented during an orphanage visit",
  },
  {
    src: "/images/outreach-4.jpeg",
    alt: "Children holding school bags and books presented by The August Mandate team",
  },
  {
    src: "/images/outreach-2.jpeg",
    alt: "The August Mandate team standing with children in front of the orphanage banner",
  },
  {
    src: "/images/outreach-5.jpeg",
    alt: "Team members and children smiling together with books after an outreach visit",
  },
  {
    src: "/images/hero.jpg",
    alt: "A man showing three boys the screen of his camera outdoors",
  },
  {
    src: "/images/banner-training.jpg",
    alt: "A teenager filming outdoors with a camera mounted on a stabiliser",
  },
  {
    src: "/images/tile-media.jpg",
    alt: "A smiling young person reviewing a photograph on a camera screen",
  },
  {
    src: "/images/tile-technology.jpg",
    alt: "Two students in school uniform working together on a laptop",
  },
  {
    src: "/images/banner-mentorship.jpg",
    alt: "A tutor leaning over a desk to explain a lesson to two students",
  },
  {
    src: "/images/tile-discipleship.jpg",
    alt: "A teacher leading an outdoor lesson with children seated under trees",
  },
  {
    src: "/images/tile-community.jpg",
    alt: "A group of children smiling together outdoors",
  },
  {
    src: "/images/banner-opportunity.jpg",
    alt: "Teenagers in school uniform smiling together indoors",
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Impact"
        title="Lives Being Transformed"
        lead="Skills learned, faith deepened, doors opened. This is where we share the journey — the stories, the voices, and the pictures of the mandate at work."
      />

      {/* Impact Stories */}
      <section id="impact-stories" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-500">
          Impact Stories
        </h2>
        <h3 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-900">
          Every participant is a story in progress
        </h3>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-600">
          <p>
            Impact for us is measured one life at a time: a first photograph taken, a first
            design published, a mentor&apos;s call answered, a young person discovering they have
            something valuable to offer the world.
          </p>
          <p>
            We are documenting these journeys and will share participants&apos; stories here — told
            with their consent and in their own words — as the mandate grows.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-500">
            Testimonials
          </h2>
          <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            In their own words
          </h3>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Voices of participants, mentors, and partners will be shared here soon. If the
            mandate has touched your life or your organisation, we would love to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
          >
            Share Your Story
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-500">
          Gallery
        </h2>
        <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
          Moments from the mandate
        </h3>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-brand-950"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 17rem, (min-width: 640px) 30vw, 48vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Reports and News */}
      <section id="reports-news" className="scroll-mt-24 bg-brand-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Reports and News
          </h2>
          <h3 className="mt-3 text-3xl font-bold tracking-tight">
            Accountability you can read
          </h3>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Annual reports, programme updates, and news from The August Mandate will be published
            here. We believe partners deserve to see exactly where their support goes.
          </p>
          <Link
            href="/partner-with-us"
            className="mt-8 inline-block rounded-full bg-accent-500 px-6 py-3 font-semibold text-white transition hover:bg-accent-600"
          >
            Become a Partner
          </Link>
        </div>
      </section>
    </>
  );
}
