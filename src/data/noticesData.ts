export type NoticeCategory =
  | 'All'
  | 'Admissions'
  | 'Academic'
  | 'Events'
  | 'Holiday'
  | 'Important';

export interface NoticeItem {
  id: string;
  title: string;
  category: Exclude<NoticeCategory, 'All'>;
  date: string;
  description: string;
  shortDescription?: string;
  content?: string;
  fullContent?: string;
  attachmentUrl?: string;
  attachmentName?: string;
  isImportant?: boolean;
  isPublished?: boolean;
}

/**
 * Notice Board Data Source
 * In production, this can be connected directly to a backend CMS or database (e.g. Supabase, Firebase, or REST API).
 * Initialized as an empty array to prevent invented/fake circulars as per prospectus guidelines.
 */
export const noticesData: NoticeItem[] = [];
