export type AppCategory = 'all' | 'beauty' | 'gastronomy' | 'realestate_travel' | 'services';

export interface SimulationApp {
  id: string;
  name: string;
  category: AppCategory;
  categoryLabel: string;
  idealFor: string;
  shortDesc: string;
  features: string[];
  url: string;
  accentColor: string;
  tag: string;
  icon: string;
  fullTitle?: string;
  highlightBadge?: { title: string; desc: string };
  realWorldExamples?: { title: string; desc: string }[];
}

export interface FeaturedLink {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  url: string;
  icon: string;
  isPrimary?: boolean;
  buttonText?: string;
  type?: 'ebook' | 'consultancy' | 'site' | 'founder' | 'whatsapp';
}

export interface Partner {
  id: string;
  name: string;
  category: string;
  logoUrl: string;
  url: string;
  tagline: string;
  buttonText?: string;
}

export interface BusinessDiagnosticQuestion {
  id: number;
  question: string;
  description: string;
  options: {
    label: string;
    description: string;
    recommendedAppId: string;
    icon: string;
  }[];
}
