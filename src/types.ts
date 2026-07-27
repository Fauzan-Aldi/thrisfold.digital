export type Language = 'id' | 'en';

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  fullDetails: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  badgeText: string;
  mockupType: 'hotel' | 'brochure' | 'vaneshub' | 'ai-photo' | 'erp';
  demoImage?: string;
  accentColor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  estimatedDays: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  period?: string;
  badge?: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface EstimatorFeature {
  id: string;
  name: string;
  category: 'core' | 'addons' | 'support';
  price: number;
  description: string;
}

export interface ConsultationForm {
  businessName: string;
  businessType: 'hotel' | 'kos' | 'restaurant' | 'umkm' | 'enterprise' | 'other';
  needs: string[];
  budget: string;
  contactName: string;
  whatsappNumber: string;
  additionalNotes: string;
}
