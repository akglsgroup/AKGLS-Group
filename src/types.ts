export interface ServiceItem {
  name: string;
  href: string;
  badge?: string;
  isTrending?: boolean;
}

export interface MegaColumn {
  title: string;
  items: ServiceItem[];
  featuredCta?: {
    text: string;
    href: string;
    badge?: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  category: 'seo' | 'ppc' | 'webdev' | 'aiseo';
  categoryLabel: string;
  metrics: {
    label: string;
    value: string;
  };
  beforeAfter: {
    before: string;
    after: string;
  };
  clientLogo: string;
  description: string;
  date: string;
  graphData: { name: string; traffic: number }[];
}

export interface QuizState {
  friction: string;
  spend: string;
  tech: string;
  email: string;
  website: string;
}

export interface SearchResult {
  title: string;
  category: string;
  href: string;
  description: string;
}
