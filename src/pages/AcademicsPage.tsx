import React from 'react';
import {
  BookOpen,
  Cpu,
  Clock,
  ArrowRight,
  Palette,
  Smile,
  Activity,
  Award,
  Flame,
  Globe,
  Feather,
  Compass,
  TreePine,
  Tv,
  Users,
} from 'lucide-react';
import {
  StarDoodle,
  ScribbleUnderline,
  OrganicBlob,
  WaveDivider,
  CircleDoodle,
} from '../components/common/DoodleDecorations';
import type { NavTab } from '../components/layout/Navbar';

interface AcademicsPageProps {
  onNavigate?: (tab: NavTab) => void;
  onOpenEnquiry: () => void;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({ onOpenEnquiry }) => {
  // Early Years Programs from Prospectus
  const earlyYearsPrograms = [
    {
      title: 'Playgroup',
      age: '2+ Years',
      desc: 'Sensory exploration, motor coordination, socialization, storytelling circles, and joyful discovery through interactive tactile toys.',
      badgeColor: '#ec4899',
      bgColor: '#fdf2f8',
    },
    {
      title: 'Nursery',
      age: '3+ Years',
      desc: 'Foundational phonics sounds, color identification, number songs, rhyming sequences, and collaborative guided play.',
      badgeColor: '#16a34a',
      bgColor: '#f0fdf4',
    },
    {
      title: 'Lower Kindergarten (LKG)',
      age: '4+ Years',
      desc: 'Letter formation, vocabulary expansion, basic mathematical concepts, drawing, pattern recognition, and self-expression.',
      badgeColor: '#ca8a04',
      bgColor: '#fefce8',
    },
    {
      title: 'Upper Kindergarten (UKG)',
      age: '5+ Years',
      desc: 'Early reading readiness, sentence framing, foundational arithmetic, environmental awareness, and transition to formal school.',
      badgeColor: '#7e22ce',
      bgColor: '#f5f3ff',
    },
  ];

  // Creative & Experiential Learning Cards
  const experientialCards = [
    {
      title: 'STEAM Lab Project Works',
      desc: 'Interdisciplinary projects uniting Science, Technology, Engineering, Arts, and Mathematics through model creation and investigative experiments.',
      icon: <Cpu size={24} />,
      bg: '#fdf4ff',
      color: '#7e22ce',
    },
    {
      title: 'Annual Exhibition Day',
      desc: 'A grand showcase where students present their scientific working models, creative art installations, and social science displays to parents and visitors.',
      icon: <Award size={24} />,
      bg: '#f0fdf4',
      color: '#16a34a',
    },
    {
      title: 'Civic & Green Habits',
      desc: 'Hands-on training in campus cleanliness, waste segregation, water conservation, polite civic conduct, and personal discipline.',
      icon: <Users size={24} />,
      bg: '#fefce8',
      color: '#ca8a04',
    },
    {
      title: 'Van Mahotsav Celebration',
      desc: 'Annual environmental festival involving tree sapling plantation, eco-awareness assemblies, and nature appreciation drives.',
      icon: <TreePine size={24} />,
      bg: '#ecfdf5',
      color: '#059669',
    },
    {
      title: 'Specialized Sports Curriculum',
      desc: 'Structured training in physical agility, team games, martial arts, athletic races, and yoga for daily stamina and physical health.',
      icon: <Activity size={24} />,
      bg: '#eff6ff',
      color: '#0284c7',
    },
  ];

  // Activities List
  const activitiesList = [
    {
      title: 'Taekwondo & Martial Arts',
      desc: 'Discipline, physical endurance, motor coordination, and practical self-defence training under certified instructors.',
      icon: <Flame size={22} />,
      bg: '#fdf4ff',
      color: '#7e22ce',
    },
    {
      title: 'Yoga & Meditation',
      desc: 'Mindfulness, flexibility, posture alignment, and breathing exercises for emotional balance and focus.',
      icon: <Smile size={22} />,
      bg: '#f0fdf4',
      color: '#16a34a',
    },
    {
      title: 'Dance',
      desc: 'Rhythmic movement, spatial awareness, classical, folk, and contemporary dance forms.',
      icon: <Activity size={22} />,
      bg: '#fdf2f8',
      color: '#db2777',
    },
    {
      title: 'Singing & Vocal Music',
      desc: 'Vocal modulation, melody, classical notes, chorus singing, and musical pitch appreciation.',
      icon: <Palette size={22} />,
      bg: '#eff6ff',
      color: '#0284c7',
    },
    {
      title: 'Art & Craft Workshops',
      desc: 'Clay modeling, sketching, painting, papercraft, and tactile exploration of artistic textures.',
      icon: <Palette size={22} />,
      bg: '#fefce8',
      color: '#ca8a04',
    },
    {
      title: 'Chess Club',
      desc: 'Strategic thinking, patience, logical forward-planning, and competitive tournament preparation.',
      icon: <Award size={22} />,
      bg: '#f5f3ff',
      color: '#6d28d9',
    },
    {
      title: 'English & Communication Class',
      desc: 'Phonetics, vocabulary, public elocution, dramatic readings, and confident interpersonal speaking.',
      icon: <Feather size={22} />,
      bg: '#f0fdfa',
      color: '#0d9488',
    },
    {
      title: 'Weekend Abacus Class',
      desc: 'Mental arithmetic speed, calculation agility, memory visualization, and number confidence.',
      icon: <Cpu size={22} />,
      bg: '#fef2f2',
      color: '#dc2626',
    },
    {
      title: 'Annual Excursions & Field Trips',
      desc: 'Educational visits to science museums, botanical gardens, and community centers connecting lessons to life.',
      icon: <Compass size={22} />,
      bg: '#ecfdf5',
      color: '#059669',
    },
    {
      title: 'International Olympiad Examination',
      desc: 'Guided preparation and participation in national and international competitive Olympiads.',
      icon: <Globe size={22} />,
      bg: '#faf5ff',
      color: '#9333ea',
    },
  ];

  return (
    <div>
      {/* ========================================================================= */}
      {/* HERO SECTION: "Learning That Sparks Curiosity" */}
      {/* ========================================================================= */}
      <section
        style={{
          position: 'relative',
          padding: '4.5rem 0 5.5rem 0',
          background: 'linear-gradient(180deg, #fbf7ff 0%, #fafaf9 100%)',
          overflow: 'hidden',
        }}
        className="bg-dots-pattern"
      >
        <OrganicBlob color="#f3e8ff" size={450} style={{ top: '-10%', right: '-5%' }} />
        <OrganicBlob color="#fef9c3" size={350} style={{ bottom: '-10%', left: '-5%' }} />
        <OrganicBlob color="#fdf2f8" size={300} style={{ top: '30%', left: '35%' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow green">
                <BookOpen size={16} /> Academic Excellence
              </span>

              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: 'var(--color-purple-deep)',
                  marginBottom: '1.25rem',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Learning That <br />
                <span className="highlight-yellow">Sparks Curiosity</span>
              </h1>

              <div style={{ maxWidth: '300px', marginBottom: '1.5rem' }}>
                <ScribbleUnderline color="#facc15" />
              </div>

              <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '560px' }}>
                At Millennium English School, we combine academic learning with experiential, activity-based, and practical learning to make every subject engaging, intuitive, and enduring for young minds.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={onOpenEnquiry} className="btn btn-cta btn-lg">
                  <span>Explore Admissions</span>
                  <ArrowRight size={20} />
                </button>
                <a href="#timings" className="btn btn-secondary btn-lg">
                  <Clock size={18} color="var(--color-purple-deep)" />
                  <span>View School Timings</span>
                </a>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div style={{ position: 'relative' }}>
              <div
                className="card-playful"
                style={{
                  padding: '1.5rem',
                  borderRadius: '36px',
                  backgroundColor: '#ffffff',
                  boxShadow: 'var(--shadow-floating)',
                  border: '3px solid var(--border-playful)',
                  position: 'relative',
                }}
              >
                <div style={{ position: 'absolute', top: '-18px', right: '-18px', zIndex: 3 }}>
                  <StarDoodle size={36} color="#facc15" />
                </div>
                <div style={{ position: 'absolute', bottom: '-15px', left: '-15px', zIndex: 3 }}>
                  <CircleDoodle size={38} color="#ec4899" />
                </div>

                <div style={{ position: 'relative', borderRadius: '28px', overflow: 'hidden', height: '340px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                    alt="Students doing hands on STEAM learning at Millennium English School"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(8px)',
                      padding: '0.85rem 1.25rem',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-purple-deep)', fontFamily: 'var(--font-display)' }}>
                        Experiential Pedagogy
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        Inquiry, Discovery &amp; Real Application
                      </div>
                    </div>
                    <span className="badge-pill yellow">CBSE Aligned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave transition */}
      <WaveDivider color="#ffffff" bgColor="#fafaf9" />

      {/* ========================================================================= */}
      {/* SECTION 1: "Early Years Foundation" */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow pink">
              Foundational Stage
            </span>
            <h2 className="section-title">Early Years Foundation</h2>
            <p className="section-subtitle">
              Our early childhood learning framework follows a multi-sensory, sequential, and joyful approach that nurtures early speech, numeracy, and social readiness.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {earlyYearsPrograms.map((prog, idx) => (
              <div
                key={idx}
                className="card-playful"
                style={{
                  backgroundColor: prog.bgColor,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      backgroundColor: '#ffffff',
                      color: prog.badgeColor,
                      padding: '0.3rem 0.85rem',
                      borderRadius: '9999px',
                      fontSize: '0.825rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-display)',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                    }}
                  >
                    {prog.age}
                  </span>
                  <StarDoodle size={20} color={prog.badgeColor} />
                </div>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
                  {prog.title}
                </h3>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  {prog.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: "Primary & Lower Secondary" */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#fbf7ff', position: 'relative' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow purple">
              <BookOpen size={14} /> Progressive Learning
            </span>
            <h2 className="section-title">Primary &amp; Lower Secondary</h2>
            <p className="section-subtitle">
              Starting from <strong>Class I onwards</strong>, we follow a student-centric approach that fosters academic confidence and real-world application skills.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {/* Focus 1: Languages */}
            <div className="card-playful" style={{ backgroundColor: '#ffffff' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '16px', backgroundColor: '#fdf4ff', color: '#7e22ce', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Feather size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-purple-deep)', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                Languages &amp; Literacy
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                Strong foundation in English reading, creative writing, grammar mechanics, oral expression, and second-language fluency.
              </p>
            </div>

            {/* Focus 2: Mathematics */}
            <div className="card-playful" style={{ backgroundColor: '#ffffff' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '16px', backgroundColor: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Cpu size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-purple-deep)', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                Mathematics &amp; Numeracy
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                Conceptual number comprehension, arithmetic problem-solving, geometry visualizations, and mental math techniques.
              </p>
            </div>

            {/* Focus 3: Reasoning */}
            <div className="card-playful" style={{ backgroundColor: '#ffffff' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '16px', backgroundColor: '#fefce8', color: '#ca8a04', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-purple-deep)', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                Logical Reasoning
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                Structured deductive thinking, pattern analysis, cause-and-effect understanding, and critical evaluation.
              </p>
            </div>

            {/* Focus 4: Data Handling */}
            <div className="card-playful" style={{ backgroundColor: '#ffffff' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '16px', backgroundColor: '#eff6ff', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Globe size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-purple-deep)', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                Data Handling
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                Interpreting tables, bar graphs, charts, and gathering factual observations into organized conclusions.
              </p>
            </div>

            {/* Focus 5: Application Skills */}
            <div className="card-playful" style={{ backgroundColor: '#ffffff' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '16px', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-purple-deep)', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                Application Skills
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                Connecting textbook theory directly to real-world scenarios through experiments, projects, and group research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: "Creative & Experiential Learning" */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow yellow">
              Beyond Textbooks
            </span>
            <h2 className="section-title">Creative &amp; Experiential Learning</h2>
            <p className="section-subtitle">
              Specialized hands-on initiatives that instill innovation, cultural celebration, and green habits.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {experientialCards.map((card, idx) => (
              <div
                key={idx}
                className="card-playful"
                style={{
                  backgroundColor: card.bg,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div style={{ width: '52px', height: '52px', borderRadius: '16px', backgroundColor: '#ffffff', color: card.color, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: "Activities That Build More Than Academics" */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#fbf7ff', position: 'relative' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow pink">
              <Activity size={14} color="#db2777" /> Co-Curricular Array
            </span>
            <h2 className="section-title">Activities That Build More Than Academics</h2>
            <p className="section-subtitle">
              Developing character, discipline, agility, and artistic flair through structured daily and weekly activities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {activitiesList.map((act, idx) => (
              <div
                key={idx}
                className="card-playful"
                style={{
                  backgroundColor: act.bg,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#ffffff', color: act.color, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.06)' }}>
                  {act.icon}
                </div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
                  {act.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {act.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: "Play, Explore & Grow" (Indoor & Outdoor Play Areas) */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow green">
              <Smile size={14} color="#16a34a" /> Physical Spaces
            </span>
            <h2 className="section-title">Play, Explore &amp; Grow</h2>
            <p className="section-subtitle">
              Purpose-built recreation spaces ensuring safe indoor motor sensory play and energetic outdoor athletics.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
            {/* Card 1: Indoor Play Area */}
            <div className="card-playful" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '240px' }}>
                <img
                  src="https://images.unsplash.com/photo-1566411520896-01e7e4776a00?auto=format&fit=crop&w=800&q=80"
                  alt="Indoor Play Area at Millennium English School"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="badge-pill pink" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  Sensory &amp; Early Years
                </span>
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
                  Indoor Play Area
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  A secure, weather-protected play sanctuary featuring soft rubberized safety flooring, sensory building blocks, creative role-play stations, and early childhood motor coordination apparatus.
                </p>
              </div>
            </div>

            {/* Card 2: Outdoor Play Area */}
            <div className="card-playful" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '240px' }}>
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
                  alt="Outdoor Play Area at Millennium English School"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="badge-pill green" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  Athletics &amp; Sports Ground
                </span>
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
                  Outdoor Play Area
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  An open-air green sports ground dedicated to physical education, morning assembly gatherings, athletic races, martial arts training, and team games under the supervision of trained coaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: "School Timings" */}
      {/* ========================================================================= */}
      <section id="timings" className="section" style={{ backgroundColor: '#fbf7ff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow purple">
              <Clock size={14} /> Schedule &amp; Hours
            </span>
            <h2 className="section-title">School Timings</h2>
            <p className="section-subtitle">
              Structured daily operating schedules designed for academic focus and age-appropriate learning endurance.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Timetable Card 1: Standard Segment */}
            <div
              className="card-playful"
              style={{
                backgroundColor: '#ffffff',
                borderLeft: '6px solid var(--color-purple-main)',
                padding: '2rem 2.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
            >
              <div>
                <span className="badge-pill purple" style={{ marginBottom: '0.5rem' }}>
                  Standard Segment
                </span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-purple-deep)', margin: '0.35rem 0', fontFamily: 'var(--font-display)' }}>
                  Class 1 Onwards
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Full academic day with core subject periods, STEAM labs, and co-curricular sessions.
                </p>
              </div>
              <div
                style={{
                  backgroundColor: 'var(--color-purple-light)',
                  padding: '1rem 1.75rem',
                  borderRadius: '20px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-purple-deep)', fontFamily: 'var(--font-display)' }}>
                  09:15 AM – 02:05 PM
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-purple-main)', fontWeight: 700, marginTop: '0.2rem' }}>
                  Daily Standard Schedule
                </div>
              </div>
            </div>

            {/* Timetable Card 2: Primary Segment Shifts */}
            <div
              className="card-playful"
              style={{
                backgroundColor: '#ffffff',
                borderLeft: '6px solid var(--color-pink-accent)',
                padding: '2rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div>
                <span className="badge-pill pink" style={{ marginBottom: '0.5rem' }}>
                  Primary Segment
                </span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-purple-deep)', margin: '0.35rem 0', fontFamily: 'var(--font-display)' }}>
                  Playgroup, Nursery, LKG &amp; UKG
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Shift-based foundation hours tailored to early childhood attention spans.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                {/* Morning Shift */}
                <div style={{ backgroundColor: '#fefce8', padding: '1.25rem', borderRadius: '18px', border: '1px solid #fef08a' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#854d0e', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Morning Shift
                  </div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#854d0e', marginTop: '0.35rem', fontFamily: 'var(--font-display)' }}>
                    08:00 AM – 10:55 AM
                  </div>
                </div>

                {/* Day Shift */}
                <div style={{ backgroundColor: '#fdf2f8', padding: '1.25rem', borderRadius: '18px', border: '1px solid #fbcfe8' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#9d174d', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Day Shift
                  </div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#9d174d', marginTop: '0.35rem', fontFamily: 'var(--font-display)' }}>
                    11:20 AM – 02:15 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: "Learning Facilities" */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow yellow">
              Infrastructure
            </span>
            <h2 className="section-title">Learning Facilities</h2>
            <p className="section-subtitle">
              Specially equipped rooms supporting academic depth, literacy, and interactive technology.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
            {/* Smart Classroom */}
            <div className="card-playful" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '190px', position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80"
                  alt="Smart Classroom at Millennium English School"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="badge-pill purple" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  Interactive
                </span>
              </div>
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Tv size={20} color="var(--color-purple-deep)" />
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
                    Smart Classrooms
                  </h3>
                </div>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Equipped with digital interactive displays, rich audiovisual multimedia aids, and ergonomic seating that transforms everyday lessons into engaging discussions.
                </p>
              </div>
            </div>

            {/* STEAM Hub */}
            <div className="card-playful" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '190px', position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80"
                  alt="STEAM Discovery Hub at Millennium English School"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="badge-pill green" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  Discovery Lab
                </span>
              </div>
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Cpu size={20} color="#16a34a" />
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
                    STEAM &amp; Science Discovery Hub
                  </h3>
                </div>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  A specialized laboratory equipped with testing apparatus, experiment kits, and design materials where students test hypotheses under teacher guidance.
                </p>
              </div>
            </div>

            {/* Early Reader Library */}
            <div className="card-playful" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '190px', position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
                  alt="Early Reader Library at Millennium English School"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="badge-pill yellow" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  Literacy Nook
                </span>
              </div>
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <BookOpen size={20} color="#ca8a04" />
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
                    Early Reader Library
                  </h3>
                </div>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  A curated collection of illustrated fiction, early phonics storybooks, children's encyclopedias, and quiet reading areas to foster a habit of lifelong reading.
                </p>
              </div>
            </div>
          </div>

          {/* End CTA: Explore Admissions */}
          <div style={{ textAlign: 'center', backgroundColor: '#fdf4ff', padding: '3.5rem 2rem', borderRadius: '32px', border: '2px solid #f5d0fe' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--color-purple-deep)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
              Ready to Give Your Child an Inspiring Start?
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: 1.65 }}>
              Enrolments are open for Playgroup through Grade 8. Contact our admissions desk to schedule a campus tour.
            </p>
            <button onClick={onOpenEnquiry} className="btn btn-cta btn-lg">
              <span>Explore Admissions</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
