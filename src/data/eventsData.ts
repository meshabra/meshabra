export type EventCategory =
  | 'All'
  | 'Annual Celebrations'
  | 'Competitions'
  | 'Cultural & Festivals'
  | 'Exhibitions & Field Trips'
  | 'Green & Community Drives';

export interface EventItem {
  id: string;
  title: string;
  category: Exclude<EventCategory, 'All'>;
  date?: string; // Optional or 'Date to be announced'
  description: string;
  highlights?: string[];
  imageUrl: string;
  venue?: string;
  gallery?: string[];
  isPublished?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  imageUrl: string;
  aspect?: 'landscape' | 'portrait' | 'square';
}

/**
 * Prospectus Grounded Events
 * Dates marked as "Date to be announced" to prevent invented schedules.
 */
export const eventsData: EventItem[] = [
  {
    id: 'evt-01',
    title: 'CaNvAs Annual Day',
    category: 'Annual Celebrations',
    date: 'Date to be announced',
    description: 'A grand annual platform showcasing students’ stage talents, performing arts, drama, dance, and academic milestones.',
    highlights: ['Student musical drama', 'Choreographed dance performances', 'Annual achievement awards'],
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    venue: 'School Stage & Auditorium',
  },
  {
    id: 'evt-02',
    title: 'Rhymes, Recitation & Storytelling Competitions',
    category: 'Competitions',
    date: 'Date to be announced',
    description: 'Building early expression, phonetics, vocal modulation, and confidence through inter-house literary challenges.',
    highlights: ['Poetry elocution', 'Puppet-assisted storytelling', 'Certificate & prize distribution'],
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    venue: 'Activity Hall',
  },
  {
    id: 'evt-03',
    title: 'Pre-Durga Puja Celebration',
    category: 'Cultural & Festivals',
    date: 'Date to be announced',
    description: 'Joyful cultural celebration bringing students together with traditional attire, musical performances, and festive happiness.',
    highlights: ['Traditional cultural attire', 'Folk songs & dance', 'Festive assembly & art displays'],
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    venue: 'Campus Courtyard',
  },
  {
    id: 'evt-04',
    title: 'Annual Exhibition Day',
    category: 'Exhibitions & Field Trips',
    date: 'Date to be announced',
    description: 'A comprehensive exhibition where students display scientific working models, creative craft, and interdisciplinary STEAM ideas.',
    highlights: ['Interactive science experiments', 'Art and craft installations', 'Student-led demonstrations'],
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
    venue: 'Discovery Hub & Classrooms',
  },
  {
    id: 'evt-05',
    title: 'Excursions & Field Trips',
    category: 'Exhibitions & Field Trips',
    date: 'Date to be announced',
    description: 'Guided experiential journeys connecting textbook lessons to real-world museums, historical landmarks, and botanical reserves.',
    highlights: ['Supervised educational visits', 'Field notes & nature journaling', 'Real-world discovery'],
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    venue: 'Selected Educational Destinations',
  },
  {
    id: 'evt-06',
    title: 'Campus Cleanliness Drives',
    category: 'Green & Community Drives',
    date: 'Date to be announced',
    description: 'Instilling personal hygiene, civic responsibility, and environmental consciousness through active campus stewardship.',
    highlights: ['Waste segregation awareness', 'Clean classroom awards', 'Civic duty appreciation'],
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80',
    venue: 'School Campus Grounds',
  },
  {
    id: 'evt-07',
    title: 'Planting Seasons & Green Initiatives',
    category: 'Green & Community Drives',
    date: 'Date to be announced',
    description: 'Hands-on gardening sessions where students plant flowering pots, nurture green patches, and learn botanical life cycles.',
    highlights: ['Sapling planting', 'Botany observation', 'Earth care pledge'],
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    venue: 'School Garden & Courtyard',
  },
  {
    id: 'evt-08',
    title: 'Van Mahotsav Celebration',
    category: 'Green & Community Drives',
    date: 'Date to be announced',
    description: 'Annual tree plantation festival dedicated to environmental awareness, ecosystem conservation, and climate sensitivity.',
    highlights: ['Tree plantation drive', 'Eco-poetry recitals', 'Green badge ceremony'],
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    venue: 'Campus Open Grounds',
  },
  {
    id: 'evt-09',
    title: 'Cultural Activities & Drama',
    category: 'Cultural & Festivals',
    date: 'Date to be announced',
    description: 'Nurturing theatrical talents, character portrayal, script reading, and expressive self-confidence on stage.',
    highlights: ['Role-play & skits', 'Elocution training', 'Stage performance'],
    imageUrl: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=1200&q=80',
    venue: 'Activity Auditorium',
  },
  {
    id: 'evt-10',
    title: 'Dance & Vocal Singing Showcases',
    category: 'Cultural & Festivals',
    date: 'Date to be announced',
    description: 'Rhythmic coordination, vocal modulation, and classical melody practices presented during assembly and special occasions.',
    highlights: ['Group choir songs', 'Classical & contemporary dance', 'Auditory music appreciation'],
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    venue: 'School Cultural Stage',
  },
];

/**
 * Replaceable Photo Gallery Placeholders
 */
export const galleryData: GalleryItem[] = [
  {
    id: 'gal-01',
    title: 'Annual Day Stage Performance',
    category: 'Annual Celebrations',
    caption: 'Students performing thematic dance drama on CaNvAs Annual Day.',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-02',
    title: 'STEAM & Science Exhibition',
    category: 'Exhibitions & Field Trips',
    caption: 'Young scientists showcasing working models on Exhibition Day.',
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-03',
    title: 'Van Mahotsav Sapling Plantation',
    category: 'Green & Community Drives',
    caption: 'Students taking the earth care pledge and planting trees on campus.',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-04',
    title: 'Creative Art & Clay Workshop',
    category: 'Cultural & Festivals',
    caption: 'Hands-on craft, pottery, and painting exploration.',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-05',
    title: 'Storytelling & Recitation Circle',
    category: 'Competitions',
    caption: 'Junior students expressing themselves with enthusiasm.',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gal-06',
    title: 'Campus Nature Excursion',
    category: 'Exhibitions & Field Trips',
    caption: 'Field trip connecting textbook concepts to real life.',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
];
