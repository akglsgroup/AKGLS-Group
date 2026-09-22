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

export interface LeadRecord {
  id: string;
  name: string;
  email: string;
  phone?: string;
  companyName?: string;
  websiteUrl?: string;
  budget?: string;
  primaryGoal?: string;
  pageAddress: string;
  pageTitle: string;
  time: string;
  ip?: string;
  country?: string;
  city?: string;
  region?: string;
  status: 'New' | 'Contacted' | 'Proposal Sent' | 'In Progress' | 'Converted' | 'Spam' | 'Archived';
  assignedTo?: string;
  notes?: string;
  rawDetails?: Record<string, any>;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  company?: string;
  domain?: string;
  customLogo?: string;
  role: 'client' | 'admin' | 'viewer';
  createdAt: string;
  lastLoginAt: string;
}

export interface GroundingSource {
  title?: string;
  uri: string;
}

export interface GroundingMetadata {
  webSearchQueries?: string[];
  groundingChunks?: Array<{
    web?: {
      title?: string;
      uri?: string;
    };
  }>;
  groundingSupports?: any[];
  searchEntryPoint?: {
    renderedContent?: string;
  };
}

export interface ChatMessageRecord {
  id: string;
  userId: string;
  role: 'user' | 'model' | 'system';
  content: string;
  timestamp: string;
  modelUsed?: string;
  searchGrounded?: boolean;
  groundingMetadata?: GroundingMetadata;
}

export * from './types/crm';

