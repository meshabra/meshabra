export interface AcademicTier {
  id: string;
  title: string;
  subtitle: string;
  grades: string;
  ageRange: string;
  description: string;
  keyFeatures: string[];
  subjects: string[];
  teachingMethodology: string;
  badge: string;
}

export const academicTiers: AcademicTier[] = [
  {
    id: 'early-years',
    title: 'Early Years Foundation',
    subtitle: 'Nurturing Curiosity & Foundational Joy',
    grades: 'Playgroup, Nursery, LKG & UKG',
    ageRange: '2.5 to 5.5 Years',
    description: 'A child-centric, joyful environment focusing on cognitive milestones, fine and gross motor skills, phonetic awareness, and social interaction through immersive play.',
    keyFeatures: [
      'Montessori-inspired hands-on activity centers',
      'Phonics & interactive story-telling circles',
      'Sensory sand & water exploration stations',
      'Music, rhyme rhythmics & creative movement',
      'Daily emotional check-ins & warm personal care',
    ],
    subjects: ['Foundational English (Phonics)', 'Early Number Concepts', 'Sensory & Nature Exploration', 'Art & Craft Expression', 'Life Skills & Etiquette'],
    teachingMethodology: 'Play-way, multi-sensory and inquiry-based pedagogy where learning happens through curiosity, games, and tactile experiences.',
    badge: 'Foundation Stage',
  },
  {
    id: 'primary',
    title: 'Primary School',
    subtitle: 'Building Conceptual Rigor & Expressive Confidence',
    grades: 'Grade 1 to Grade 5',
    ageRange: '6 to 10 Years',
    description: 'Transitioning from concrete to abstract understanding with structured subject foundations, analytical thinking, language mastery, and co-curricular exposure.',
    keyFeatures: [
      'Interactive Smartboard-equipped classrooms',
      'Integrated science experiments and math lab activities',
      'Dual-language communicative proficiency (English & Second Language)',
      'Regular reading circles & library discovery hours',
      'Dedicated physical education, yoga & sports',
    ],
    subjects: ['English Language & Literature', 'Mathematics & Mental Math', 'Environmental Studies (EVS)', 'Second Language (Bengali / Hindi)', 'Computer & Digital Literacy', 'General Knowledge & Values'],
    teachingMethodology: 'Activity-based, experiential learning with emphasis on structured problem-solving, collaborative group tasks, and continuous formative assessment.',
    badge: 'Primary Stage',
  },
  {
    id: 'lower-secondary',
    title: 'Lower Secondary',
    subtitle: 'Critical Thinking, Innovation & Leadership',
    grades: 'Grade 6 to Grade 8',
    ageRange: '11 to 14 Years',
    description: 'Fostering deep conceptual clarity across disciplines, introducing advanced STEAM concepts, analytical writing, independent research, and team leadership.',
    keyFeatures: [
      'Separate physics, chemistry, biology & computer labs',
      'STEAM projects & introductory coding/robotics modules',
      'Elocution, MUN-style debates, and creative writing workshops',
      'House system competitions & leadership appointments',
      'Individualized academic guidance & diagnostic tests',
    ],
    subjects: ['English Literature & Grammar', 'Mathematics (Algebra, Geometry, Arithmetic)', 'Science (Physics, Chemistry, Biology)', 'Social Sciences (History, Civics, Geography)', 'Second Language', 'Third Language Foundation', 'Computer Science & ICT'],
    teachingMethodology: 'Inquiry-led, project-based learning encouraging analytical debates, laboratory experiments, scientific reasoning, and self-directed research projects.',
    badge: 'Middle Stage',
  },
];

export const steamInitiatives = [
  {
    title: 'Hands-on Robotics & Logic Lab',
    desc: 'Age-appropriate block programming, sensor modules, and electronics kits to develop computational logic.',
    icon: 'Cpu',
  },
  {
    title: 'Scientific Method & Discovery',
    desc: 'Laboratory experiment cycles where hypotheses are tested, recorded, and presented collaboratively.',
    icon: 'Microscope',
  },
  {
    title: 'Design Thinking & Creative Arts',
    desc: 'Connecting aesthetic design and structural crafting to solve real-world community challenges.',
    icon: 'Palette',
  },
  {
    title: 'Applied Mathematical Modeling',
    desc: 'Transforming abstract formulas into visual models, geometry kits, and real-life data charts.',
    icon: 'TrendingUp',
  },
];

export const sportsActivities = [
  { name: 'Cricket & Football', desc: 'Team coordination, agility drills, and friendly inter-house tournaments.' },
  { name: 'Badminton & Table Tennis', desc: 'Precision, reflexes, and high-energy indoor court training.' },
  { name: 'Yoga & Mindful Fitness', desc: 'Postural wellness, breathing exercises, and mental calm.' },
  { name: 'Athletics & Track Events', desc: 'Sprint dashes, relays, long jump, and stamina conditioning.' },
  { name: 'Karate & Self Defense', desc: 'Discipline, spatial focus, physical strength, and safety awareness.' },
  { name: 'Chess & Strategic Games', desc: 'Forethought, patience, tactical memory, and concentration.' },
];

export const creativePrograms = [
  { name: 'Visual Arts & Terracotta Craft', desc: 'Watercolors, sketch technique, clay sculpting, and cultural art forms.' },
  { name: 'Music & Vocal Ensemble', desc: 'Indian classical notations, western vocal training, and instrumental harmony.' },
  { name: 'Dance & Choreography', desc: 'Classical Kathak/Bharatnatyam foundations and contemporary expressive dance.' },
  { name: 'Drama & Public Elocution', desc: 'Stage presence, voice modulation, scripted drama, and extempore confidence.' },
];
