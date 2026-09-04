export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#our-story" },
      { label: "Vision & Mission", href: "/about#vision-mission" },
      { label: "Core Values", href: "/about#core-values" },
      { label: "Our Team", href: "/about#our-team" },
    ],
  },
  {
    label: "The Mandate",
    href: "/the-mandate",
    children: [
      { label: "The Need", href: "/the-mandate#the-need" },
      { label: "Our Approach", href: "/the-mandate#our-approach" },
      { label: "Beyond August", href: "/the-mandate#beyond-august" },
      { label: "Long-Term Vision", href: "/the-mandate#long-term-vision" },
    ],
  },
  {
    label: "Programmes",
    href: "/programmes",
    children: [
      { label: "August Programme", href: "/programmes#august-programme" },
      { label: "Media & Creative Skills", href: "/programmes#media-creative-skills" },
      { label: "Technology", href: "/programmes#technology" },
      { label: "Mentorship & Leadership", href: "/programmes#mentorship-leadership" },
      { label: "Discipleship", href: "/programmes#discipleship" },
      { label: "Church Media Development", href: "/programmes#church-media-development" },
    ],
  },
  {
    label: "Impact",
    href: "/impact",
    children: [
      { label: "Impact Stories", href: "/impact#impact-stories" },
      { label: "Testimonials", href: "/impact#testimonials" },
      { label: "Gallery", href: "/impact#gallery" },
      { label: "Reports and News", href: "/impact#reports-news" },
    ],
  },
  { label: "Partner With Us", href: "/partner-with-us" },
  { label: "Contact", href: "/contact" },
];
