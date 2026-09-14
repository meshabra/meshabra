import React from 'react';
import {
  GraduationCap,
  Eye,
  Compass,
  ShieldCheck,
  Users,
  ArrowRight,
  Heart,
  Camera,
  HeartHandshake,
  CheckCircle2,
  BookOpen,
  Smile,
  Award,
} from 'lucide-react';
import {
  StarDoodle,
  ScribbleUnderline,
  OrganicBlob,
  WaveDivider,
  CircleDoodle,
} from '../components/common/DoodleDecorations';
import type { NavTab } from '../components/layout/Navbar';

interface AboutPageProps {
  onNavigate: (tab: NavTab) => void;
  onOpenEnquiry?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* ========================================================================= */}
      {/* HERO SECTION: "Where Young Minds Discover, Learn & Grow" */}
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
              <span className="section-eyebrow purple">
                <GraduationCap size={16} /> About Millennium English School
              </span>

              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: 'var(--color-purple-deep)',
                  marginBottom: '1.25rem',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Where Young Minds <br />
                <span className="highlight-yellow">Discover, Learn &amp; Grow</span>
              </h1>

              <div style={{ maxWidth: '320px', marginBottom: '1.5rem' }}>
                <ScribbleUnderline color="#ec4899" />
              </div>

              <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '560px' }}>
                Established in South Habra, Millennium English School is dedicated to creating a joyful, safe, and academically rigorous environment where every child discovers their full potential.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => onNavigate('academics')} className="btn btn-cta btn-lg">
                  <span>Explore Academic Pathways</span>
                  <ArrowRight size={20} />
                </button>
                <button onClick={() => onNavigate('admissions')} className="btn btn-secondary btn-lg">
                  <span>Admissions Overview</span>
                </button>
              </div>
            </div>

            {/* Hero Visual with Organic Rounded Shapes */}
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
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                    alt="Children happily learning in school environment at Millennium English School"
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
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-purple-deep)', fontFamily: 'var(--font-display)' }}>
                        Nurturing Potential
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        Playgroup to Grade 8 • CBSE Curriculum
                      </div>
                    </div>
                    <span className="badge-pill green">NEP 2020</span>
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
      {/* SECTION 1: "Welcome to Our Community" */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow pink">
              Our Community
            </span>
            <h2 className="section-title">Welcome to Our Community</h2>
            <p className="section-subtitle">
              Millennium English School is a vibrant educational home where young minds thrive under the guidance of passionate educators and modern teaching methodologies.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
            {/* 7 Core Focus Areas from Prospectus */}
            <div className="card-playful" style={{ backgroundColor: '#fdf4ff', borderColor: '#f5d0fe' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#ffffff', color: '#7e22ce', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Heart size={24} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--color-purple-deep)', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                Love for Learning
              </h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Cultivating natural curiosity so children view study not as a task, but as an exciting daily journey of discovery.
              </p>
            </div>

            <div className="card-playful" style={{ backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#ffffff', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Compass size={24} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--color-purple-deep)', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                Critical Thinking
              </h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Encouraging questioning, analytical reasoning, and independent problem-solving across all academic subjects.
              </p>
            </div>

            <div className="card-playful" style={{ backgroundColor: '#fefce8', borderColor: '#fef08a' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#ffffff', color: '#ca8a04', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Award size={24} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--color-purple-deep)', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                Holistic Development
              </h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Balancing academic excellence with arts, athletics, martial arts, vocal music, and public communication.
              </p>
            </div>

            <div className="card-playful" style={{ backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#ffffff', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <BookOpen size={24} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--color-purple-deep)', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                Simplified Learning
              </h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Breaking complex concepts down into intuitive, visual, and experiential steps for effortless comprehension.
              </p>
            </div>

            <div className="card-playful" style={{ backgroundColor: '#fdf2f8', borderColor: '#fbcfe8' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#ffffff', color: '#db2777', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Smile size={24} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--color-purple-deep)', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                Happy Learning Environment
              </h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                A cheerful, encouraging atmosphere where children feel safe, celebrated, and excited to participate.
              </p>
            </div>

            <div className="card-playful" style={{ backgroundColor: '#faf5ff', borderColor: '#e9d5ff' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#ffffff', color: '#9333ea', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <ShieldCheck size={24} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--color-purple-deep)', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                Strong Moral Values
              </h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Instilling honesty, empathy, respect, civic responsibility, and environmental stewardship from early childhood.
              </p>
            </div>

            <div className="card-playful" style={{ backgroundColor: '#f0fdfa', borderColor: '#99f6e4' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#ffffff', color: '#0d9488', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <GraduationCap size={24} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--color-purple-deep)', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                Progressive Methodologies
              </h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Employing modern NEP 2020 pedagogical tools, smart boards, and hands-on discovery activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2 & 3: "Our Vision" & "Our Mission" */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#fbf7ff', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {/* Section 2: Our Vision */}
            <div
              className="card-playful"
              style={{
                backgroundColor: '#ffffff',
                borderColor: '#c4b5fd',
                padding: '3rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
                boxShadow: 'var(--shadow-floating)',
              }}
            >
              <div style={{ width: '64px', height: '64px', borderRadius: '20px', backgroundColor: 'var(--color-purple-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-purple-deep)', boxShadow: '0 6px 16px rgba(76,29,149,0.1)' }}>
                <Eye size={32} />
              </div>
              <span className="badge-pill purple" style={{ width: 'fit-content' }}>
                Institutional Direction
              </span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
                Our Vision
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
                To nurture young minds into confident, empathetic, and intellectually curious global citizens who possess strong ethical convictions, critical analytical abilities, and an enduring passion for discovery.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-purple-main)', fontWeight: 700, fontSize: '0.9rem' }}>
                <StarDoodle size={16} color="#facc15" /> Fostering character, curiosity, and leadership
              </div>
            </div>

            {/* Section 3: Our Mission */}
            <div
              className="card-playful"
              style={{
                backgroundColor: '#ffffff',
                borderColor: '#f5d0fe',
                padding: '3rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
                boxShadow: 'var(--shadow-floating)',
              }}
            >
              <div style={{ width: '64px', height: '64px', borderRadius: '20px', backgroundColor: '#fdf2f8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#db2777', boxShadow: '0 6px 16px rgba(219,39,119,0.1)' }}>
                <Compass size={32} />
              </div>
              <span className="badge-pill pink" style={{ width: 'fit-content' }}>
                Pedagogical Commitment
              </span>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
                Our Mission
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
                To deliver a child-centric, joyful, and NEP 2020-compliant learning environment through simplified experiential pedagogies, dedicated faculty mentorship, modern facilities, and a steadfast emphasis on safety and moral integrity.
              </p>
              <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#db2777', fontWeight: 700, fontSize: '0.9rem' }}>
                <StarDoodle size={16} color="#ec4899" /> Empowering every child's unique journey
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: "Student Care, Safety & Wellbeing" */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow green">
              <ShieldCheck size={14} color="#16a34a" /> Child Protection
            </span>
            <h2 className="section-title">Student Care, Safety &amp; Wellbeing</h2>
            <p className="section-subtitle">
              The safety, health, and emotional comfort of our students form the non-negotiable foundation of our educational community.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2rem' }}>
            {/* Card 1: 24/7 CCTV Surveillance */}
            <div className="card-playful" style={{ backgroundColor: '#f0fdf4', borderColor: '#bbf7d0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '16px', backgroundColor: '#ffffff', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                <Camera size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#14532d', margin: 0, fontFamily: 'var(--font-display)' }}>
                24/7 CCTV Surveillance
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Continuous real-time video monitoring across all entry and exit gates, corridors, indoor halls, and outdoor play areas.
              </p>
            </div>

            {/* Card 2: Strict Visitor Management */}
            <div className="card-playful" style={{ backgroundColor: '#fefce8', borderColor: '#fef08a', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '16px', backgroundColor: '#ffffff', color: '#854d0e', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#713f12', margin: 0, fontFamily: 'var(--font-display)' }}>
                Strict Visitor Management
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Gated security protocols requiring visitor identity registration, appointment verification, and authorized parent pick-up passes.
              </p>
            </div>

            {/* Card 3: Emergency & Medical First Aid */}
            <div className="card-playful" style={{ backgroundColor: '#fdf4ff', borderColor: '#f5d0fe', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '16px', backgroundColor: '#ffffff', color: '#7e22ce', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                <Heart size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
                Emergency &amp; Medical First Aid
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Equipped first aid care station with trained responders on-site and established emergency protocols with local healthcare centers.
              </p>
            </div>

            {/* Card 4: Emotional & Psychological Support */}
            <div className="card-playful" style={{ backgroundColor: '#eff6ff', borderColor: '#bfdbfe', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '16px', backgroundColor: '#ffffff', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                <Smile size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#075985', margin: 0, fontFamily: 'var(--font-display)' }}>
                Emotional &amp; Psychological Support
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Regular pastoral check-ins, anti-bullying awareness, and supportive behavioral counseling ensuring psychological wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: "Learning With Parents" & Parent-Teacher Partnership */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#fafaf9', borderTop: '2px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            {/* Visual showing collaboration */}
            <div>
              <div
                className="card-playful"
                style={{
                  padding: '1.25rem',
                  borderRadius: '32px',
                  backgroundColor: '#ffffff',
                  boxShadow: 'var(--shadow-floating)',
                  border: '3px solid var(--border-playful)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                  alt="Parent Teacher child collaboration meeting at Millennium English School"
                  style={{ width: '100%', borderRadius: '24px', height: '340px', objectFit: 'cover' }}
                />
                <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
                  <Users size={18} color="var(--color-purple-deep)" />
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-purple-deep)', fontFamily: 'var(--font-display)' }}>
                    Active Parent-Teacher Partnership Model
                  </span>
                </div>
              </div>
            </div>

            {/* Explanation & Content */}
            <div>
              <span className="section-eyebrow yellow">
                <HeartHandshake size={14} color="#854d0e" /> Home &amp; School Alignment
              </span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                Learning With Parents
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                We believe that a child flourishes best when home and school speak the same encouraging language. Our <strong>Parent-Teacher Partnership</strong> creates an open, transparent bridge of communication between families and educators.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Through scheduled <strong>Monthly Parent-Teacher Meetings (PTMs)</strong>, digital progress updates, and personalized counseling, teachers and parents work together to celebrate strengths, resolve developmental hurdles, and nurture every child's passions.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} color="#16a34a" />
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Monthly one-on-one progress consultations
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} color="#16a34a" />
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Continuous qualitative and formative academic feedback
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} color="#16a34a" />
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Parent workshops on home study habits and emotional wellbeing
                  </span>
                </div>
              </div>

              {/* End CTA */}
              <button
                onClick={() => onNavigate('academics')}
                className="btn btn-cta btn-lg"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span>Discover Our Academic Programs</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
