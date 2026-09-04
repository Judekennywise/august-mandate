import { DotGrid } from "./artwork";

export function PageIntro({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <DotGrid className="pointer-events-none absolute inset-0 h-full w-full opacity-15" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="mb-4 inline-block rounded-full border border-accent-400/40 bg-accent-400/10 px-4 py-1 text-sm font-medium text-accent-300">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{lead}</p>
      </div>
    </section>
  );
}
