/**
 * Millennium English School - Centralized Image Asset System
 * 
 * This module manages all imagery slots across the website.
 * Replacing placeholder imagery with actual school photographs is as simple as updating
 * the URL in this single dictionary or via CMS integration.
 */

export interface SchoolImageSlot {
  id: string;
  title: string;
  url: string;
  alt: string;
  category: 'hero' | 'classroom' | 'steam' | 'sports' | 'arts' | 'library' | 'events' | 'campus';
  suggestedDimensions?: string;
  notes?: string;
}

export const imageAssets: Record<string, SchoolImageSlot> = {
  // Hero Images
  'home-hero': {
    id: 'home-hero',
    title: 'Home Hero Classroom Learning',
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
    alt: 'Happy primary school students engaged in an interactive classroom lesson at Millennium English School',
    category: 'hero',
    suggestedDimensions: '1000x800',
    notes: 'Joyful group learning with books and teacher guidance',
  },
  'about-hero': {
    id: 'about-hero',
    title: 'About Page Campus Community',
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    alt: 'Dedicated teacher assisting curious young students in a warm and supportive classroom',
    category: 'classroom',
    suggestedDimensions: '1000x750',
    notes: 'Teacher-student mentorship and holistic care',
  },
  'academics-hero': {
    id: 'academics-hero',
    title: 'Academics & Discovery Hero',
    url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=80',
    alt: 'Young students actively studying together in a collaborative learning environment',
    category: 'classroom',
    suggestedDimensions: '1000x750',
    notes: 'Focus on experiential and sequential learning',
  },
  'admissions-hero': {
    id: 'admissions-hero',
    title: 'Admissions & Enrollment Welcome',
    url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=80',
    alt: 'Smiling young students ready for school with backpacks and notebooks at Millennium English School',
    category: 'hero',
    suggestedDimensions: '1000x750',
    notes: 'Welcoming admissions mood',
  },
  'events-hero': {
    id: 'events-hero',
    title: 'Events & Co-Curricular Hero',
    url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80',
    alt: 'Students celebrating cultural day and performing in school annual festivities',
    category: 'events',
    suggestedDimensions: '1000x750',
    notes: 'Canvas Annual Day and cultural celebrations',
  },

  // Foundation & Academics
  'early-years-foundation': {
    id: 'early-years-foundation',
    title: 'Early Years Playgroup & Kindergarten',
    url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
    alt: 'Kindergarten children exploring colorful educational building blocks and sensory learning tools',
    category: 'classroom',
    suggestedDimensions: '800x600',
    notes: 'Playgroup, Nursery, LKG, UKG multi-sensory activities',
  },
  'primary-education': {
    id: 'primary-education',
    title: 'Primary & Lower Secondary (Class 1 Onwards)',
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    alt: 'Primary students writing and solving mathematics and language problems in class',
    category: 'classroom',
    suggestedDimensions: '800x600',
    notes: 'Sequential curriculum focusing on languages, logic, and reasoning',
  },

  // STEAM & Facilities
  'smart-classroom': {
    id: 'smart-classroom',
    title: 'Smart Classroom Infrastructure',
    url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    alt: 'Interactive digital classroom equipped with audiovisual boards and modern student seating',
    category: 'campus',
    suggestedDimensions: '800x550',
    notes: 'Smart boards and digital pedagogy',
  },
  'steam-hub': {
    id: 'steam-hub',
    title: 'STEAM & Science Discovery Hub',
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    alt: 'Students conducting safe experiments and building science models in the STEAM lab',
    category: 'steam',
    suggestedDimensions: '800x550',
    notes: 'Physics, chemistry models, biology slides, and robotics projects',
  },
  'reader-library': {
    id: 'reader-library',
    title: 'Early Reader & School Library',
    url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    alt: 'Quiet school library stocked with children literature, encyclopedias, and reading desks',
    category: 'library',
    suggestedDimensions: '800x550',
    notes: 'Storybooks, phonics readers, and research books',
  },
  'indoor-play': {
    id: 'indoor-play',
    title: 'Indoor Sensory Play Area',
    url: 'https://images.unsplash.com/photo-1566411520896-01e7e4776a00?auto=format&fit=crop&w=800&q=80',
    alt: 'Safe rubberized indoor play area with sensory toys for foundational learners',
    category: 'campus',
    suggestedDimensions: '800x550',
    notes: 'Early childhood physical and sensory development',
  },
  'outdoor-sports': {
    id: 'outdoor-sports',
    title: 'Outdoor Sports & Assembly Ground',
    url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
    alt: 'Open air playground and athletics area for school sports and morning assemblies',
    category: 'sports',
    suggestedDimensions: '800x550',
    notes: 'Physical education, taekwondo, yoga, and games',
  },

  // Events & Celebrations (Prospectus grounded)
  'event-annual-day': {
    id: 'event-annual-day',
    title: 'CaNvAs Annual Day Performance',
    url: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=800&q=80',
    alt: 'Students in vibrant stage costumes performing drama and dance during CaNvAs Annual Day',
    category: 'events',
    suggestedDimensions: '800x550',
    notes: 'Annual cultural stage extravaganza',
  },
  'event-exhibition': {
    id: 'event-exhibition',
    title: 'Annual Exhibition Day',
    url: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
    alt: 'Students proudly presenting handcrafted science projects and artistic paintings to parents',
    category: 'arts',
    suggestedDimensions: '800x550',
    notes: 'Art, science, and handicraft exhibits',
  },
  'event-puja-celebration': {
    id: 'event-puja-celebration',
    title: 'Pre-Durga Puja Cultural Celebration',
    url: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80',
    alt: 'Students celebrating cultural traditions with traditional music and dance performance',
    category: 'events',
    suggestedDimensions: '800x550',
    notes: 'Festive cultural bonding',
  },
  'event-van-mahotsav': {
    id: 'event-van-mahotsav',
    title: 'Van Mahotsav & Tree Planting Drive',
    url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    alt: 'Children enthusiastically planting saplings during Van Mahotsav green initiative',
    category: 'campus',
    suggestedDimensions: '800x550',
    notes: 'Ecological education and community tree planting',
  },
  'event-excursion': {
    id: 'event-excursion',
    title: 'Annual Excursion & Field Trips',
    url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
    alt: 'Students and teachers exploring nature and science during the annual educational excursion',
    category: 'events',
    suggestedDimensions: '800x550',
    notes: 'Experiential field trips',
  },
};

/**
 * Helper to get image slot by ID with fallback
 */
export function getSchoolImage(id: string, fallbackUrl?: string, fallbackAlt?: string): { url: string; alt: string } {
  const asset = imageAssets[id];
  if (asset) {
    return { url: asset.url, alt: asset.alt };
  }
  return {
    url: fallbackUrl || 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    alt: fallbackAlt || 'Millennium English School, South Habra',
  };
}
