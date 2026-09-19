export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  deliverables: string;
  pillar: string;
  pillarId: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  authorName?: string;
  category: 'Fiction' | 'Non-Fiction' | 'Memoir' | 'Speculative' | 'Investigative';
  format: string;
  campaignType: string;
  description: string;
  strategicHighlights: string[];
  channels: string[];
  imageUrl: string;
  coverBgColor?: string;
  isbn?: string;
  publisher?: string;
  year?: string;
  goodreadsRating?: string;
  goodreadsRatingsCount?: string;
  amazonRankOrAward?: string;
  amazonUrl?: string;
  goodreadsUrl?: string;
  releaseWindow: string;
  criticalReception?: string;
}

export interface VerifiedTestimonial {
  id: string;
  authorName: string;
  bookTitle?: string;
  genre?: string;
  publisherOrImprint?: string;
  reviewText: string;
  avatarUrl?: string;
  verifiedStatus: 'Verified Client' | 'Verified Author Review' | 'Editorial Endorsement';
  rating: number;
  year?: string;
  campaignImpact?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  bookTitle: string;
  genre: string;
  publishingStage: 'Manuscript Completed' | 'Pre-Launch (1-3 mo)' | 'Newly Released' | 'Backlist Title' | 'Multi-Book Series';
  marketingBudgetTier: string;
  message: string;
}
