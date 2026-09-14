export interface ProgramItem {
  id: string;
  title: string;
  category: 'Early Years' | 'Primary' | 'Lower Secondary' | 'STEAM';
  description: string;
  image: string;
  order: number;
  grades: string;
  features: string[];
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: 'Sports' | 'Cultural' | 'Arts' | 'Academic' | 'STEAM';
  iconName?: string;
  tagColor?: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  iconName?: string;
}

export const programsData: ProgramItem[] = [
  {
    id: 'prog-playgroup',
    title: 'Playgroup',
    category: 'Early Years',
    description: 'A cheerful introduction to the school environment with sensory play, storytelling, motor coordination games, and joyful social interactions.',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
    order: 1,
    grades: 'Playgroup (Ages 2+)',
    features: ['Tactile and sensory games', 'Rhyme and music circles', 'Safe soft play environment', 'Loving teacher guidance'],
  },
  {
    id: 'prog-nursery',
    title: 'Nursery',
    category: 'Early Years',
    description: 'Foundational language listening, phonetic sounds, early pencil grip, number games, and curiosity-driven discovery stations.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    order: 2,
    grades: 'Nursery (Ages 3+)',
    features: ['Phonics foundation', 'Number recognition', 'Color & texture art', 'Daily emotional check-ins'],
  },
  {
    id: 'prog-lkg',
    title: 'Lower Kindergarten (LKG)',
    category: 'Early Years',
    description: 'Sequential early literacy, basic arithmetic concepts, nature exploration, and expressive storytelling activities.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    order: 3,
    grades: 'LKG (Ages 4+)',
    features: ['Vocabulary enrichment', 'Pattern matching & logic', 'Role-play corners', 'Physical agility games'],
  },
  {
    id: 'prog-ukg',
    title: 'Upper Kindergarten (UKG)',
    category: 'Early Years',
    description: 'Transition stage preparing young minds for formal primary schooling through structured reading, writing, and arithmetic readiness.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    order: 4,
    grades: 'UKG (Ages 5+)',
    features: ['Sentence formation & reading', 'Mental math readiness', 'Environmental awareness', 'Confidence building'],
  },
  {
    id: 'prog-primary',
    title: 'Primary & Lower Secondary',
    category: 'Primary',
    description: 'Class 1 onwards student-centric curriculum emphasizing core languages, conceptual mathematics, logical reasoning, data handling, and real-life application skills.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
    order: 5,
    grades: 'Class I Onwards',
    features: ['CBSE aligned curriculum', 'STEAM discovery lab projects', 'Digital smart classrooms', 'Olympiad coaching'],
  },
];

export const activitiesData: ActivityItem[] = [
  {
    id: 'act-taekwondo',
    title: 'Taekwondo & Martial Arts',
    description: 'Discipline, physical endurance, motor coordination, and practical self-defence training under expert instructors.',
    category: 'Sports',
    iconName: 'Flame',
  },
  {
    id: 'act-yoga',
    title: 'Yoga & Meditation',
    description: 'Mindfulness, flexibility, posture alignment, and breathing exercises for emotional balance and focus.',
    category: 'Sports',
    iconName: 'Smile',
  },
  {
    id: 'act-dance',
    title: 'Dance',
    description: 'Rhythmic movement, spatial awareness, classical and contemporary dance expressions.',
    category: 'Cultural',
    iconName: 'Activity',
  },
  {
    id: 'act-singing',
    title: 'Singing & Vocal Music',
    description: 'Vocal modulation, melody, classical notes, and chorus training to foster auditory sensitivity.',
    category: 'Cultural',
    iconName: 'Music',
  },
  {
    id: 'act-art',
    title: 'Art & Craft Workshops',
    description: 'Clay modeling, sketching, painting, papercraft, and tactile exploration of textures and colors.',
    category: 'Arts',
    iconName: 'Palette',
  },
  {
    id: 'act-chess',
    title: 'Chess Club',
    description: 'Strategic thinking, patience, cognitive problem-solving, and competitive tournament preparation.',
    category: 'Academic',
    iconName: 'Award',
  },
  {
    id: 'act-english',
    title: 'English & Communication Class',
    description: 'Phonetics, vocabulary, public elocution, debate, and confident interpersonal speaking.',
    category: 'Academic',
    iconName: 'Feather',
  },
  {
    id: 'act-abacus',
    title: 'Weekend Abacus Class',
    description: 'Mental arithmetic agility, calculation speed, memory visualization, and number confidence.',
    category: 'STEAM',
    iconName: 'Cpu',
  },
  {
    id: 'act-excursions',
    title: 'Annual Excursion & Field Trips',
    description: 'Nature trails, museum expeditions, and hands-on community visits to connect textbook concepts to the real world.',
    category: 'Academic',
    iconName: 'Compass',
  },
  {
    id: 'act-olympiad',
    title: 'International Olympiad Examination',
    description: 'Structured coaching and participation in Science, Math, English, and Cyber Olympiad competitions.',
    category: 'Academic',
    iconName: 'Globe',
  },
];

export const facilitiesData: FacilityItem[] = [
  {
    id: 'fac-smart-classes',
    title: 'Smart Classrooms',
    description: 'Interactive digital boards, multimedia audio-visual aids, and ergonomic seating for collaborative participation.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
    tag: 'Digital Learning',
    iconName: 'Tv',
  },
  {
    id: 'fac-steam-hub',
    title: 'STEAM & Science Discovery Hub',
    description: 'Equipped with apparatus, model kits, and safe experimentation kits to test scientific hypotheses.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
    tag: 'Hands-on Labs',
    iconName: 'Cpu',
  },
  {
    id: 'fac-library',
    title: 'Early Reader Library',
    description: 'A vibrant collection of illustrated storybooks, reference encyclopedias, phonics guides, and quiet reading nooks.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80',
    tag: 'Literacy Hub',
    iconName: 'BookOpen',
  },
  {
    id: 'fac-indoor-play',
    title: 'Indoor Play Area',
    description: 'Safe, rubberized flooring with soft-play sensory apparatus, role-play corners, and early motor activity toys.',
    image: 'https://images.unsplash.com/photo-1566411520896-01e7e4776a00?auto=format&fit=crop&w=600&q=80',
    tag: 'Sensory Zone',
    iconName: 'Smile',
  },
  {
    id: 'fac-outdoor-court',
    title: 'Outdoor Play Area & Sports Court',
    description: 'Dedicated open-air playground for physical education, athletics, team games, and morning assembly.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80',
    tag: 'Athletic Ground',
    iconName: 'Activity',
  },
];
