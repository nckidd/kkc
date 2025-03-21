export interface Feature {
  tagline: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
  buttonText: string;
  buttonLink: string;
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}