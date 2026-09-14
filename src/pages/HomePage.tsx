import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
  BookOpen,
  Award,
  Users,
  Compass,
  Smile,
  Heart,
  Music,
  MapPin,
  ChevronRight,
  Eye,
  Activity,
  Flame,
  Globe,
  Feather,
  Palette,
  Camera,
  Cpu,
  Lock,
} from 'lucide-react';
import { eventsData } from '../data/eventsData';
import {
  StarDoodle,
  ScribbleUnderline,
  OrganicBlob,
  WaveDivider,
  CloudDivider,
  CircleDoodle,
  SparkleDoodle,
  CircularStampBadge,
  ConcentricArcs,
  PillTagDoodle,
} from '../components/common/DoodleDecorations';
import { SchoolImage } from '../components/common/SchoolImage';
import type { NavTab } from '../components/layout/Navbar';

interface HomePageProps {
  onNavigate: (tab: NavTab) => void;
  onOpenEnquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [activeTabCategory, setActiveTabCategory] = useState<'steam' | 'sports' | 'art' | 'music'>('steam');
  const previewEvents = eventsData.slice(0, 3);

  // 10 Activities list strictly matching prospectus
  const activitiesList = [
    {
      title: 'Taekwondo & Martial Arts',
      desc: 'Discipline, physical endurance, motor coordination, and practical self-defence training under expert instructors.',
      icon: <Flame size={24} />,
      bg: '#fdf4ff',
      color: '#7e22ce',
      category: 'sports',
    },
    {
      title: 'Yoga & Meditation',
      desc: 'Mindfulness, flexibility, posture alignment, and breathing exercises for emotional balance and focus.',
      icon: <Smile size={24} />,
      bg: '#f0fdf4',
      color: '#16a34a',
      category: 'sports',
    },
    {
      title: 'Dance',
      desc: 'Rhythmic movement, spatial awareness, classical and contemporary dance expressions.',
      icon: <Activity size={24} />,
      bg: '#fdf2f8',
      color: '#db2777',
      category: 'music',
    },
    {
      title: 'Singing & Vocal Music',
      desc: 'Vocal modulation, melody, classical notes, and chorus training to foster auditory sensitivity.',
      icon: <Music size={24} />,
      bg: '#eff6ff',
      color: '#0284c7',
      category: 'music',
    },
    {
      title: 'Art & Craft Workshops',
      desc: 'Clay modeling, sketching, painting, papercraft, and tactile exploration of textures and colors.',
      icon: <Palette size={24} />,
      bg: '#fefce8',
      color: '#ca8a04',
      category: 'art',
    },
    {
      title: 'Chess Club',
      desc: 'Strategic thinking, patience, cognitive problem-solving, and competitive tournament preparation.',
      icon: <Award size={24} />,
      bg: '#f5f3ff',
      color: '#6d28d9',
      category: 'sports',
    },
    {
      title: 'English & Communication Class',
      desc: 'Phonetics, vocabulary, public elocution, debate, and confident interpersonal speaking.',
      icon: <Feather size={24} />,
      bg: '#f0fdfa',
      color: '#0d9488',
      category: 'steam',
    },
    {
      title: 'Weekend Abacus Class',
      desc: 'Mental arithmetic agility, calculation speed, memory visualization, and number confidence.',
      icon: <Cpu size={24} />,
      bg: '#fef2f2',
      color: '#dc2626',
      category: 'steam',
    },
    {
      title: 'Annual Excursion & Field Trips',
      desc: 'Nature trails, museum expeditions, and hands-on community visits to connect textbook concepts to the real world.',
      icon: <Compass size={24} />,
      bg: '#ecfdf5',
      color: '#059669',
      category: 'steam',
    },
    {
      title: 'International Olympiad Examination',
      desc: 'Structured coaching and participation in Science, Math, English, and Cyber Olympiad competitions.',
      icon: <Globe size={24} />,
      bg: '#faf5ff',
      color: '#9333ea',
      category: 'steam',
    },
  ];

  return (
    <div>
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Layout Recommendation + Organic Visual System) */}
      {/* ========================================================================= */}
      <section
        style={{
          position: 'relative',
          padding: '4.5rem 0 6rem 0',
          background: 'linear-gradient(180deg, #fbf7ff 0%, #fafaf9 100%)',
          overflow: 'hidden',
        }}
        className="bg-dots-pattern"
      >
        <OrganicBlob color="#f3e8ff" size={520} style={{ top: '-12%', right: '-6%' }} />
        <OrganicBlob color="#fef9c3" size={380} style={{ bottom: '-8%', left: '-5%' }} />
        <OrganicBlob color="#fdf2f8" size={340} style={{ top: '30%', left: '32%' }} />
        <ConcentricArcs size={260} color="#facc15" style={{ top: '5%', right: '35%', opacity: 0.35 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            {/* Left Column */}
            <div>
              {/* Admissions Ribbon Badge & Floating Hashtags */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.45rem 1.1rem',
                    backgroundColor: '#ffffff',
                    border: '2px solid var(--border-playful)',
                    borderRadius: '9999px',
                    boxShadow: '0 4px 12px rgba(76,29,149,0.08)',
                  }}
                >
                  <Sparkles size={16} color="#db2777" />
                  <span style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--color-purple-deep)', letterSpacing: '0.02em', fontFamily: 'var(--font-display)' }}>
                    ADMISSIONS OPEN • PLAYGROUP TO GRADE 8
                  </span>
                  <StarDoodle size={16} color="#facc15" />
                </div>
                <PillTagDoodle label="#JoyfulLearning" bg="#dcfce7" color="#14532d" borderColor="#86efac" />
                <PillTagDoodle label="#CBSE" bg="#fef9c3" color="#854d0e" borderColor="#fde047" />
              </div>

              {/* Decorative Stars / Doodles */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <SparkleDoodle size={24} color="#db2777" />
                <CircleDoodle size={22} color="#facc15" />
                <StarDoodle size={20} color="#a855f7" />
              </div>

              {/* Exact Master Heading */}
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 4.8vw, 3.85rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: 'var(--color-purple-deep)',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Discover a World of <br />
                <span className="highlight-yellow">Wonder &amp; Learning</span>
              </h1>

              <div style={{ maxWidth: '340px', marginBottom: '1.5rem' }}>
                <ScribbleUnderline color="#f472b6" />
              </div>

              {/* Recommended Supporting Copy */}
              <p style={{ fontSize: '1.18rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '580px' }}>
                <strong>Happy learning starts with curiosity, creativity and care.</strong> At Millennium English School, we nurture foundational excellence through simplified teaching, progressive modern methodologies, and a joyful environment.
              </p>

              {/* Primary & Secondary CTAs */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <button onClick={onOpenEnquiry} className="btn btn-cta btn-lg">
                  <span>Explore Admissions</span>
                  <ArrowRight size={20} />
                </button>
                <button onClick={() => onNavigate('about')} className="btn btn-secondary btn-lg">
                  <BookOpen size={20} color="var(--color-purple-deep)" />
                  <span>Discover Our School</span>
                </button>
              </div>

              {/* Prospectus Grounded Trust Badges */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '2px dashed var(--border-medium)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', backgroundColor: '#ffffff', padding: '0.35rem 0.85rem', borderRadius: '9999px', border: '1px solid #bbf7d0', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
                  <ShieldCheck size={16} color="#16a34a" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-purple-deep)', fontFamily: 'var(--font-display)' }}>English Medium</span>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', backgroundColor: '#ffffff', padding: '0.35rem 0.85rem', borderRadius: '9999px', border: '1px solid #ddd6fe', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
                  <Users size={16} color="var(--color-purple-main)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-purple-deep)', fontFamily: 'var(--font-display)' }}>Co-Educational</span>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', backgroundColor: '#ffffff', padding: '0.35rem 0.85rem', borderRadius: '9999px', border: '1px solid #fef08a', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
                  <Award size={16} color="#ca8a04" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-purple-deep)', fontFamily: 'var(--font-display)' }}>CBSE Curriculum</span>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', backgroundColor: '#ffffff', padding: '0.35rem 0.85rem', borderRadius: '9999px', border: '1px solid #fbcfe8', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
                  <Sparkles size={16} color="#db2777" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-purple-deep)', fontFamily: 'var(--font-display)' }}>NEP 2020 Compliant</span>
                </div>
              </div>
            </div>

            {/* Right Column / Organic Blob Mask Image Container with Circular Stamp */}
            <div style={{ position: 'relative' }}>
              {/* Circular Rotating Stamp Badge */}
              <div style={{ position: 'absolute', top: '-28px', left: '-28px', zIndex: 10 }}>
                <CircularStampBadge size={105} color="#4c1d95" />
              </div>

              <div
                className="card-playful animate-float"
                style={{
                  padding: '1.5rem',
                  borderRadius: '36px',
                  backgroundColor: '#ffffff',
                  boxShadow: 'var(--shadow-floating)',
                  border: '3px solid var(--border-playful)',
                  position: 'relative',
                }}
              >
                {/* Playful Floating Doodles */}
                <div style={{ position: 'absolute', top: '-18px', right: '-18px', zIndex: 3 }}>
                  <StarDoodle size={36} color="#facc15" />
                </div>
                <div style={{ position: 'absolute', bottom: '-15px', left: '-15px', zIndex: 3 }}>
                  <CircleDoodle size={38} color="#ec4899" />
                </div>

                <div
                  style={{
                    position: 'relative',
                    borderRadius: '28px',
                    overflow: 'hidden',
                    height: '330px',
                    marginBottom: '1.25rem',
                  }}
                >
                  <SchoolImage
                    slotId="home-hero"
                    roundedVariant="blob1"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: 'rgba(59, 7, 100, 0.92)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      padding: '0.45rem 1rem',
                      borderRadius: '9999px',
                      fontSize: '0.825rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-display)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                    }}
                  >
                    <MapPin size={14} color="#facc15" /> South Habra Campus
                  </div>
                </div>

                {/* Key Highlights */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
                  <div style={{ backgroundColor: '#fdf4ff', padding: '0.9rem', borderRadius: '16px', border: '1px solid #f5d0fe' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#7e22ce', fontFamily: 'var(--font-display)' }}>
                      Playgroup to Gr 8
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                      Continuous learning pathway
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#f0fdf4', padding: '0.9rem', borderRadius: '16px', border: '1px solid #bbf7d0' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#16a34a', fontFamily: 'var(--font-display)' }}>
                      Max 25 / Class
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                      Personalized teacher mentorship
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud Transition at bottom of hero */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <CloudDivider color="#ffffff" bgColor="transparent" height={46} />
        </div>
      </section>

      {/* Wave transition */}
      <WaveDivider color="#ffffff" bgColor="#fafaf9" />

      {/* ========================================================================= */}
      {/* 2. WHY MILLENNIUM? [ Learning ] [ Safety ] [ Growth ] */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow purple">
              <Sparkles size={14} /> Core Philosophy
            </span>
            <h2 className="section-title">Why Millennium?</h2>
            <p className="section-subtitle" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-purple-deep)' }}>
              Learning should be joyful. Learning should be meaningful.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Card 1: Learning */}
            <div
              className="card-playful tilt-1"
              style={{
                backgroundColor: '#f5f3ff',
                borderColor: '#c4b5fd',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '20px', backgroundColor: '#ffffff', color: '#7e22ce', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 16px rgba(76,29,149,0.1)' }}>
                <BookOpen size={30} />
              </div>
              <span className="badge-pill purple" style={{ width: 'fit-content' }}>
                1. Joyful Learning
              </span>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
                Simplified &amp; Engaging
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Progressive modern methodologies tailored to make complex ideas intuitive, enjoyable, and enduring for young learners.
              </p>
            </div>

            {/* Card 2: Safety */}
            <div
              className="card-playful"
              style={{
                backgroundColor: '#f0fdf4',
                borderColor: '#86efac',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '20px', backgroundColor: '#ffffff', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 16px rgba(22,163,74,0.1)' }}>
                <ShieldCheck size={30} />
              </div>
              <span className="badge-pill green" style={{ width: 'fit-content' }}>
                2. Student Safety
              </span>
              <h3 style={{ fontSize: '1.6rem', color: '#14532d', margin: 0, fontFamily: 'var(--font-display)' }}>
                Secure &amp; Nurturing
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                24/7 CCTV surveillance, strict visitor management, hygienic surroundings, and caring pastoral mentorship.
              </p>
            </div>

            {/* Card 3: Growth */}
            <div
              className="card-playful tilt-2"
              style={{
                backgroundColor: '#fdf2f8',
                borderColor: '#fbcfe8',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '20px', backgroundColor: '#ffffff', color: '#db2777', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 16px rgba(219,39,119,0.1)' }}>
                <Heart size={30} />
              </div>
              <span className="badge-pill pink" style={{ width: 'fit-content' }}>
                3. Holistic Growth
              </span>
              <h3 style={{ fontSize: '1.6rem', color: '#9d174d', margin: 0, fontFamily: 'var(--font-display)' }}>
                Individual Attention
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Strict batch limits ensure every child receives personal attention, building high self-esteem and ethical values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave transition */}
      <WaveDivider color="#fbf7ff" bgColor="#ffffff" />

      {/* ========================================================================= */}
      {/* 3. LEARN • PLAY • CREATE [STEAM] [SPORTS] [ART] [MUSIC] */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#fbf7ff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow yellow">
              <Sparkles size={14} color="#854d0e" /> Holistic Co-Curriculars
            </span>
            <h2 className="section-title">Learn • Play • Create</h2>
            <p className="section-subtitle">
              Education extends beyond textbooks through vibrant hands-on discovery, athletic discipline, and creative expression.
            </p>

            {/* Badge Pills Row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <button
                onClick={() => setActiveTabCategory('steam')}
                className={`btn btn-sm ${activeTabCategory === 'steam' ? 'btn-purple' : 'btn-secondary'}`}
              >
                <Cpu size={16} /> <span>STEAM</span>
              </button>
              <button
                onClick={() => setActiveTabCategory('sports')}
                className={`btn btn-sm ${activeTabCategory === 'sports' ? 'btn-cta' : 'btn-secondary'}`}
              >
                <Activity size={16} /> <span>SPORTS</span>
              </button>
              <button
                onClick={() => setActiveTabCategory('art')}
                className={`btn btn-sm ${activeTabCategory === 'art' ? 'btn-yellow' : 'btn-secondary'}`}
              >
                <Palette size={16} /> <span>ART</span>
              </button>
              <button
                onClick={() => setActiveTabCategory('music')}
                className={`btn btn-sm ${activeTabCategory === 'music' ? 'btn-purple' : 'btn-secondary'}`}
              >
                <Music size={16} /> <span>MUSIC</span>
              </button>
            </div>
          </div>

          {/* Filtered 10 Activities Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {activitiesList.map((item, idx) => (
              <div
                key={idx}
                className="card-playful"
                style={{
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  padding: '1.75rem',
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: item.bg, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave transition */}
      <WaveDivider color="#ffffff" bgColor="#fbf7ff" />

      {/* ========================================================================= */}
      {/* 4. OUR ACADEMIC JOURNEY (Early Years -> Primary & Beyond) */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow green">
              <BookOpen size={14} /> Structured Pathway
            </span>
            <h2 className="section-title">Our Academic Journey</h2>
            <p className="section-subtitle">
              A sequential curriculum designed to spark curiosity and build conceptual mastery from early childhood onwards.
            </p>
          </div>

          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
            {/* Step 1: Early Years */}
            <div
              className="card-playful"
              style={{
                width: '100%',
                backgroundColor: '#fdf4ff',
                borderColor: '#f5d0fe',
                padding: '2.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
            >
              <div>
                <span className="badge-pill purple" style={{ marginBottom: '0.5rem' }}>
                  Stage 1 • Foundation
                </span>
                <h3 style={{ fontSize: '1.75rem', color: '#7e22ce', margin: '0.25rem 0', fontFamily: 'var(--font-display)' }}>
                  EARLY YEARS
                </h3>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-purple-deep)', marginTop: '0.25rem', fontFamily: 'var(--font-display)' }}>
                  Playgroup • Nursery • LKG • UKG
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.5rem', maxWidth: '520px' }}>
                  Multi-sensory phonetics, joyful play-way discovery, number games, and tactile fine-motor skill coordination.
                </p>
              </div>

              <button onClick={() => onNavigate('academics')} className="btn btn-secondary btn-sm">
                <span>View Stage</span>
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Progression Arrow */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem', color: 'var(--color-purple-main)' }}>
              <div style={{ width: '3px', height: '24px', backgroundColor: 'var(--border-playful)' }} />
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--color-purple-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: 'var(--color-purple-deep)' }}>
                ↓
              </div>
              <div style={{ width: '3px', height: '24px', backgroundColor: 'var(--border-playful)' }} />
            </div>

            {/* Step 2: Primary & Beyond */}
            <div
              className="card-playful"
              style={{
                width: '100%',
                backgroundColor: '#f0fdf4',
                borderColor: '#bbf7d0',
                padding: '2.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
            >
              <div>
                <span className="badge-pill green" style={{ marginBottom: '0.5rem' }}>
                  Stage 2 • Primary &amp; Lower Secondary
                </span>
                <h3 style={{ fontSize: '1.75rem', color: '#16a34a', margin: '0.25rem 0', fontFamily: 'var(--font-display)' }}>
                  PRIMARY &amp; BEYOND
                </h3>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-purple-deep)', marginTop: '0.25rem', fontFamily: 'var(--font-display)' }}>
                  Class I Onwards
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '0.5rem', maxWidth: '520px' }}>
                  Student-centric CBSE curriculum focusing on languages, mathematics, logical reasoning, data handling, and STEAM projects.
                </p>
              </div>

              <button onClick={() => onNavigate('academics')} className="btn btn-cta btn-sm">
                <span>Explore Academics</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wave transition */}
      <WaveDivider color="#fbf7ff" bgColor="#ffffff" />

      {/* ========================================================================= */}
      {/* 5. LEARNING BEYOND BOOKS [ STEAM ] [ SPORTS ] [ ART ] */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#fbf7ff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow pink">
              <Sparkles size={14} color="#db2777" /> Experiential Programs
            </span>
            <h2 className="section-title">Learning Beyond Books</h2>
            <p className="section-subtitle">
              Dedicated platforms designed to convert theoretical concepts into tangible creations, athletic stamina, and artistic joy.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* 1. STEAM */}
            <div className="card-playful tilt-1" style={{ backgroundColor: '#ffffff', padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '200px', position: 'relative' }}>
                <SchoolImage slotId="steam-hub" style={{ width: '100%', height: '100%' }} />
                <span className="badge-pill purple" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  STEAM Lab
                </span>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.45rem', color: 'var(--color-purple-deep)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
                  STEAM Lab &amp; Robotics
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Hands-on project apparatus, scientific experiments, abacus calculations, and model creation to cultivate problem-solving minds.
                </p>
              </div>
            </div>

            {/* 2. SPORTS */}
            <div className="card-playful" style={{ backgroundColor: '#ffffff', padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '200px', position: 'relative' }}>
                <SchoolImage slotId="outdoor-sports" style={{ width: '100%', height: '100%' }} />
                <span className="badge-pill green" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  Sports &amp; Athletics
                </span>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.45rem', color: 'var(--color-purple-deep)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
                  Specialized Sports Curriculum
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Taekwondo martial arts, yoga, athletics, chess tournaments, and team sports led by certified coaches.
                </p>
              </div>
            </div>

            {/* 3. ART */}
            <div className="card-playful tilt-2" style={{ backgroundColor: '#ffffff', padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '200px', position: 'relative' }}>
                <SchoolImage slotId="event-exhibition" style={{ width: '100%', height: '100%' }} />
                <span className="badge-pill yellow" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  Creative Arts
                </span>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.45rem', color: 'var(--color-purple-deep)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
                  Art, Craft &amp; Exhibition Day
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Annual Exhibition Day displays, clay modeling, painting workshops, and vocal music to celebrate raw creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave transition */}
      <WaveDivider color="#ffffff" bgColor="#fbf7ff" />

      {/* ========================================================================= */}
      {/* 6. SAFE • HAPPY • SUPPORTED (24/7 CCTV, Visitor Management, First Aid, Wellbeing) */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow green">
              <ShieldCheck size={14} /> Wellbeing First
            </span>
            <h2 className="section-title">Safe • Happy • Supported</h2>
            <p className="section-subtitle">
              Comprehensive safety systems and emotional care giving parents complete peace of mind.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {/* Feature 1 */}
            <div className="card-playful" style={{ backgroundColor: '#fbf7ff', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '16px', backgroundColor: 'var(--color-purple-light)', color: 'var(--color-purple-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Eye size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
                24/7 CCTV Surveillance
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Continuous video monitoring across all corridors, classrooms, gates, and play zones for robust perimeter security.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card-playful" style={{ backgroundColor: '#f0fdf4', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '16px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Lock size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#14532d', margin: 0, fontFamily: 'var(--font-display)' }}>
                Visitor Management
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Strict entry-pass protocols and identity verification ensuring only authorized guardians access campus grounds.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card-playful" style={{ backgroundColor: '#fef2f2', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '16px', backgroundColor: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Heart size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#991b1b', margin: 0, fontFamily: 'var(--font-display)' }}>
                Emergency &amp; First Aid
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                On-campus first-aid medical station, certified staff response, and rapid local clinic tie-ups for emergencies.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card-playful" style={{ backgroundColor: '#fdf2f8', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '16px', backgroundColor: '#fce7f3', color: '#db2777', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Smile size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#9d174d', margin: 0, fontFamily: 'var(--font-display)' }}>
                Student Wellbeing
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Warm, non-judgmental teachers attentive to each child's emotional comfort, peer bonding, and self-confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave transition */}
      <WaveDivider color="#fbf7ff" bgColor="#ffffff" />

      {/* ========================================================================= */}
      {/* 7. EXPLORE OUR CAMPUS (Indoor/Outdoor Play, Smart Classroom, STEAM, Library) */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#fbf7ff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow yellow">
              <Sparkles size={14} color="#854d0e" /> Modern Infrastructure
            </span>
            <h2 className="section-title">Explore Our Campus</h2>
            <p className="section-subtitle">
              Purpose-built spaces supporting interactive digital literacy, physical recreation, and quiet discovery.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Facility 1: Smart Classroom */}
            <div className="card-playful" style={{ padding: 0, overflow: 'hidden', backgroundColor: '#ffffff' }}>
              <div style={{ height: '190px' }}>
                <SchoolImage slotId="smart-classroom" style={{ width: '100%', height: '100%' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span className="badge-pill purple" style={{ marginBottom: '0.5rem' }}>Digital Hub</span>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--color-purple-deep)', margin: '0.25rem 0 0.5rem 0', fontFamily: 'var(--font-display)' }}>
                  Smart Classrooms
                </h4>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Equipped with interactive audio-visual boards and collaborative student desks.
                </p>
              </div>
            </div>

            {/* Facility 2: STEAM Discovery Hub */}
            <div className="card-playful" style={{ padding: 0, overflow: 'hidden', backgroundColor: '#ffffff' }}>
              <div style={{ height: '190px' }}>
                <SchoolImage slotId="steam-hub" style={{ width: '100%', height: '100%' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span className="badge-pill green" style={{ marginBottom: '0.5rem' }}>Hands-on Lab</span>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--color-purple-deep)', margin: '0.25rem 0 0.5rem 0', fontFamily: 'var(--font-display)' }}>
                  STEAM Discovery Hub
                </h4>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Equipped with apparatus, abacus kits, and safe science experimentation tables.
                </p>
              </div>
            </div>

            {/* Facility 3: Early Reader Library */}
            <div className="card-playful" style={{ padding: 0, overflow: 'hidden', backgroundColor: '#ffffff' }}>
              <div style={{ height: '190px' }}>
                <SchoolImage slotId="reader-library" style={{ width: '100%', height: '100%' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span className="badge-pill yellow" style={{ marginBottom: '0.5rem' }}>Literacy Center</span>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--color-purple-deep)', margin: '0.25rem 0 0.5rem 0', fontFamily: 'var(--font-display)' }}>
                  Early Reader Library
                </h4>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', margin: 0 }}>
                  A rich collection of illustrated picture books, encyclopedias, and phonics readers.
                </p>
              </div>
            </div>

            {/* Facility 4: Indoor & Outdoor Play */}
            <div className="card-playful" style={{ padding: 0, overflow: 'hidden', backgroundColor: '#ffffff' }}>
              <div style={{ height: '190px' }}>
                <SchoolImage slotId="indoor-play" style={{ width: '100%', height: '100%' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span className="badge-pill pink" style={{ marginBottom: '0.5rem' }}>Play &amp; Sports</span>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--color-purple-deep)', margin: '0.25rem 0 0.5rem 0', fontFamily: 'var(--font-display)' }}>
                  Indoor &amp; Outdoor Play
                </h4>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Rubberized soft sensory zones indoors + open athletic sports court for assemblies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave transition */}
      <WaveDivider color="#ffffff" bgColor="#fbf7ff" />

      {/* ========================================================================= */}
      {/* 8. SCHOOL LIFE [ EVENTS / PHOTOS ] */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow purple">
              <Camera size={14} /> Memorable Moments
            </span>
            <h2 className="section-title">School Life &amp; Events</h2>
            <p className="section-subtitle">
              Celebrating big milestones, annual stage performances, tree-planting drives, and competitive achievements.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
            {previewEvents.map((evt) => (
              <div
                key={evt.id}
                className="card-playful"
                style={{
                  backgroundColor: '#fbf7ff',
                  padding: 0,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ height: '210px', position: 'relative' }}>
                  <img
                    src={evt.imageUrl}
                    alt={evt.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span className="badge-pill purple" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                    {evt.category}
                  </span>
                </div>
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
                  <h4 style={{ fontSize: '1.35rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
                    {evt.title}
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>
                    {evt.description}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-purple-main)', fontWeight: 700 }}>
                      {evt.date || 'Date to be announced'}
                    </span>
                    <button
                      onClick={() => onNavigate('events')}
                      style={{ background: 'none', border: 'none', color: 'var(--color-pink-deep)', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: 0 }}
                    >
                      <span>Explore</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button onClick={() => onNavigate('events')} className="btn btn-secondary btn-lg">
              <Calendar size={18} />
              <span>View All Events &amp; Gallery</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. YOUR CHILD'S LEARNING JOURNEY STARTS HERE [ ENQUIRE NOW ] */}
      {/* ========================================================================= */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #3b0764 0%, #2e0854 100%)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '780px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', backgroundColor: 'rgba(250, 204, 21, 0.2)', color: '#facc15', padding: '0.4rem 1.1rem', borderRadius: '9999px', fontSize: '0.9rem', fontWeight: 800, border: '1px solid #facc15', marginBottom: '1.25rem', fontFamily: 'var(--font-display)' }}>
            <Sparkles size={16} /> Enrolment 2025–26
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '1.25rem',
              fontFamily: 'var(--font-display)',
              lineHeight: 1.2,
            }}
          >
            Your Child's Learning Journey <br />
            <span style={{ color: 'var(--color-yellow-highlight)' }}>Starts Here</span>
          </h2>

          <p style={{ fontSize: '1.15rem', color: '#e9d5ff', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Give your child the advantage of limited classroom occupancy, dedicated teacher mentorship, and a joyful foundation in South Habra.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenEnquiry} className="btn btn-cta btn-lg">
              <span>Enquire About Admission</span>
              <ArrowRight size={20} />
            </button>
            <button onClick={() => onNavigate('contact')} className="btn btn-secondary btn-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }}>
              <MapPin size={18} color="#facc15" />
              <span>Campus Location</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
