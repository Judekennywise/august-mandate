/**
 * Decorative pattern in the brand palette. The official logo lockups and mark
 * live in `public/images` (logo-lockup-color, logo-lockup-black, logo-mark,
 * brand-pattern) and are referenced with next/image.
 */

type ArtProps = { className?: string };

export function DotGrid({ className = "" }: ArtProps) {
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern id="am-dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="#f5822a" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#am-dots)" />
    </svg>
  );
}
