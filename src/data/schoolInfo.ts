export interface AddressInfo {
  line1: string;
  area: string;
  district: string;
  state: string;
  pincode: string;
  landmark: string;
}

export interface ContactInfo {
  phone: string[];
  whatsapp: string;
  email: string;
  admissionsEmail: string;
}

export interface OfficeHoursInfo {
  weekdays: string;
  saturday: string;
  sunday: string;
  admissionCounseling: string;
}

export interface SchoolInfo {
  name: string;
  tagline: string;
  description: string;
  vision: string;
  mission: string;
  affiliationNote: string;
  address: AddressInfo;
  contact: ContactInfo;
  officeHours: OfficeHoursInfo;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  pillars: {
    title: string;
    description: string;
    icon: string;
    tag: string;
  }[];
}

export const schoolInfo: SchoolInfo = {
  name: 'Millennium English School',
  tagline: 'Nurturing Intellect, Character & Curiosity for a Boundless Future',
  description:
    'Millennium English School is an English Medium, Co-Educational institution located in South Habra, North 24 Parganas, West Bengal. We are committed to fostering a love for learning, critical thinking, moral values, and holistic child development in a happy and secure environment.',
  vision:
    'To be a beacon of transformative foundational education that empowers every child with academic curiosity, ethical fortitude, creativity, and the self-confidence to thrive in a dynamically evolving world.',
  mission:
    'To provide simplified, joyful, and student-centric learning guided by progressive modern methodologies, limited batch sizes for individualized attention, experiential STEAM exploration, and a collaborative parent-teacher partnership.',
  affiliationNote: 'English Medium Co-Educational Institution • Following CBSE Curriculum • NEP 2020 Compliant',
  address: {
    line1: 'K.N. Roy Road',
    area: 'South Habra, Habra',
    district: 'North 24 Parganas',
    state: 'West Bengal',
    pincode: '743263',
    landmark: 'South Habra, Habra',
  },
  contact: {
    phone: ['+91 94755 49596', '03216-356665', '+91 95640 00143'],
    whatsapp: '+91 94755 49596',
    email: 'millennium.habra@gmail.com',
    admissionsEmail: 'query.millennium@gmail.com',
  },
  officeHours: {
    weekdays: '09:00 AM – 02:00 PM (Mon – Fri)',
    saturday: '09:30 AM – 01:30 PM',
    sunday: 'Office Closed',
    admissionCounseling: '09:00 AM – 02:00 PM (Monday – Friday)',
  },
  stats: [
    { label: 'Student-Teacher Ratio', value: '18:1', description: 'Personalized attention for every child' },
    { label: 'Holistic Programs', value: '25+', description: 'STEAM, Sports, Creative Arts & Leadership' },
    { label: 'Smart Classrooms', value: '100%', description: 'Digitally-enabled interactive learning suites' },
    { label: 'Safety & Surveillance', value: '24/7', description: 'CCTV monitored campus & verified staff' },
  ],
  pillars: [
    {
      title: 'Individualized Mentorship',
      description: 'Strict batch caps and low student-teacher ratio empower educators to recognize and nurture each child’s unique pace.',
      icon: 'UserCheck',
      tag: 'Academic Care',
    },
    {
      title: 'Modern STEAM Pedagogy',
      description: 'Hands-on experiential discovery connecting Science, Technology, Engineering, Arts, and Mathematics.',
      icon: 'Cpu',
      tag: 'Innovation',
    },
    {
      title: 'Safe & Supportive Campus',
      description: 'CCTV-monitored premises, rigorous child protection protocols, ergonomic infrastructure, and loving pastoral care.',
      icon: 'ShieldCheck',
      tag: 'Student Safety',
    },
    {
      title: 'Holistic Character Growth',
      description: 'Balanced focus on moral ethics, public communication, arts, competitive athletics, and emotional intelligence.',
      icon: 'HeartHandshake',
      tag: 'Values & Leadership',
    },
  ],
};
