export interface Service {
  title: string;
  description: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  poster?: string;
  links: { text: string; href: string }[];
  category: ("eventos" | "bodas")[];
}

export interface Product {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  links: { text: string; href: string }[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
