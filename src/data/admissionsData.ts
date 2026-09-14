export interface AdmissionProgramItem {
  id: string;
  classOrProgram: string;
  eligibility: string;
  status: 'Open' | 'Waitlist' | 'Closed';
  description: string;
  ageRequirement?: string;
  intakeSeats?: string;
}

export interface EligibilityCriteria {
  gradeLevel: string;
  ageRequirement: string;
  prerequisites: string;
  intakeSeats: string;
}

export const admissionPrograms: AdmissionProgramItem[] = [
  {
    id: 'adm-playgroup',
    classOrProgram: 'Playgroup',
    eligibility: 'Eligible toddlers (Ages 2+)',
    status: 'Open',
    description: 'Joyful sensory initiation, early motor skills, and guided play.',
    ageRequirement: '2+ years',
    intakeSeats: '20 seats',
  },
  {
    id: 'adm-nursery',
    classOrProgram: 'Nursery',
    eligibility: 'Ages 3+',
    status: 'Open',
    description: 'Foundational phonetics, early vocabulary, and curiosity-driven activities.',
    ageRequirement: '3+ years',
    intakeSeats: '25 seats',
  },
  {
    id: 'adm-lkg',
    classOrProgram: 'LKG',
    eligibility: 'Ages 4+',
    status: 'Open',
    description: 'Pre-reading readiness, number games, and interactive storytelling.',
    ageRequirement: '4+ years',
    intakeSeats: '25 seats',
  },
  {
    id: 'adm-ukg',
    classOrProgram: 'UKG',
    eligibility: 'Ages 5+',
    status: 'Open',
    description: 'Foundational sentence formation, mental arithmetic, and cognitive logic.',
    ageRequirement: '5+ years',
    intakeSeats: '25 seats',
  },
  {
    id: 'adm-primary',
    classOrProgram: 'Class I Onwards',
    eligibility: 'Eligible primary students',
    status: 'Open',
    description: 'Student-centric sequential syllabus, experiential STEAM, and Olympiad mentoring.',
    ageRequirement: '6+ years',
    intakeSeats: 'Limited vacancies',
  },
];

export const eligibilityTable: EligibilityCriteria[] = [
  {
    gradeLevel: 'Playgroup',
    ageRequirement: '2+ years as of March 31',
    prerequisites: 'Friendly parent-child informal interaction',
    intakeSeats: '20 seats',
  },
  {
    gradeLevel: 'Nursery',
    ageRequirement: '3+ years as of March 31',
    prerequisites: 'Basic readiness & sensory observation',
    intakeSeats: '25 seats',
  },
  {
    gradeLevel: 'LKG (Lower Kindergarten)',
    ageRequirement: '4+ years as of March 31',
    prerequisites: 'Playgroup/Nursery exposure or informal assessment',
    intakeSeats: '25 seats',
  },
  {
    gradeLevel: 'UKG (Upper Kindergarten)',
    ageRequirement: '5+ years as of March 31',
    prerequisites: 'Foundational phonetic & number readiness',
    intakeSeats: '25 seats',
  },
  {
    gradeLevel: 'Grade 1 to Grade 5',
    ageRequirement: '6+ years corresponding to standard',
    prerequisites: 'Previous school transfer certificate / evaluation',
    intakeSeats: 'Limited vacancies (Subject to seat availability)',
  },
  {
    gradeLevel: 'Grade 6 to Grade 8',
    ageRequirement: '11+ years corresponding to standard',
    prerequisites: 'Report card of previous grade & diagnostic interaction',
    intakeSeats: 'Subject to vacancy',
  },
];

export const admissionSteps = [
  {
    step: '01',
    title: 'Submit Online / Offline Enquiry',
    desc: 'Fill out the digital enquiry form on our website or visit the administrative admission desk for the prospectus.',
    icon: 'FileText',
  },
  {
    step: '02',
    title: 'Campus Tour & Interaction',
    desc: 'Schedule a personalized walkthrough of classrooms and facilities. Informal friendly interaction with the child and parents.',
    icon: 'Compass',
  },
  {
    step: '03',
    title: 'Document Verification',
    desc: 'Submit birth certificate, previous progress reports, transfer certificate (if applicable), and passport photos.',
    icon: 'CheckSquare',
  },
  {
    step: '04',
    title: 'Admission Confirmation & Welcome Kit',
    desc: 'Complete fee formalities, collect school handbook, uniform & booklist, and join our parent communication app.',
    icon: 'Award',
  },
];

export const requiredDocuments = [
  'Attested copy of Student Birth Certificate (Municipal Corporation / Gram Panchayat)',
  '4 Recent Passport-sized photographs of the student',
  '2 Passport-sized photographs of each parent/guardian',
  'Proof of residence (Aadhaar Card / Electricity Bill / Voter ID)',
  'Original Transfer Certificate (TC) & Report Card for Grade 2 and above',
  'Immunization / Medical fitness declaration',
];

export const admissionFaqs = [
  {
    q: 'What is the average class size / batch limit?',
    a: 'To guarantee individualized attention, we strictly maintain a maximum cap of 25 students per classroom with a 18:1 student-teacher ratio.',
  },
  {
    q: 'Is transport facility available for nearby localities?',
    a: 'Yes, secure van and bus services with female attendants and GPS monitoring are available covering key routes around Habra and adjacent zones.',
  },
  {
    q: 'How can parents obtain the exact fee structure?',
    a: 'As per our policy, comprehensive breakdown of tuition, activity fees, and admission dues is handed over with the prospectus at the school office or shared via direct enquiry.',
  },
  {
    q: 'Can we visit the campus on working days?',
    a: 'Yes! Campus tours are organized Monday to Saturday between 9:30 AM and 1:00 PM. Please submit a quick enquiry or call ahead to book a slot.',
  },
];
