/**
 * Brand marks and decorative pattern. Photography lives in `public/images`
 * (sourced from Pexels under the Pexels license) and is referenced from page.tsx.
 */

type ArtProps = { className?: string };

export function LogoMark({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="#0f172a" />
      <path d="M6 26a14 14 0 0 1 28 0Z" fill="#f59e0b" />
      <path d="M20 9.5 27 26H13Z" fill="#0f172a" />
      <path d="M20 15.5 23.5 24h-7Z" fill="#fbbf24" />
      <circle cx="20" cy="20" r="18.25" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
    </svg>
  );
}

export function DotGrid({ className = "" }: ArtProps) {
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern id="am-dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="#f59e0b" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#am-dots)" />
    </svg>
  );
}
