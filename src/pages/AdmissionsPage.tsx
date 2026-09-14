import React, { useState } from 'react';
import {
  ArrowRight,
  Users,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  HeartHandshake,
  User,
  Heart,
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

interface AdmissionsPageProps {
  onNavigate?: (tab: NavTab) => void;
  onOpenEnquiry?: () => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    gradeInterest: 'Playgroup',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone || !formData.childName) {
      alert('Please fill in parent name, phone number, and child’s name.');
      return;
    }
    // Functional UI placeholder simulation
    setTimeout(() => {
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <div>
      {/* ========================================================================= */}
      {/* HERO SECTION: "Start Your Child's Learning Journey" */}
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
                Admissions Open
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
                Start Your Child's <br />
                <span className="highlight-yellow">Learning Journey</span>
              </h1>

              <div style={{ maxWidth: '320px', marginBottom: '1.5rem' }}>
                <ScribbleUnderline color="#f472b6" />
              </div>

              <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '560px' }}>
                Admissions are open for eligible students from <strong>Playgroup onwards</strong>. Join a nurturing, joyful school family in South Habra committed to individualized care and academic excellence.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#enquire-form" className="btn btn-cta btn-lg">
                  <span>Enquire for Admission</span>
                  <ArrowRight size={20} />
                </a>
                <a href="#office-hours" className="btn btn-secondary btn-lg">
                  <Clock size={18} color="var(--color-purple-deep)" />
                  <span>View Office Hours</span>
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
                    src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80"
                    alt="Happy child starting school journey at Millennium English School"
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
                        Limited Batch Admissions
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        Playgroup, Nursery, LKG, UKG &amp; Grades
                      </div>
                    </div>
                    <span className="badge-pill green">Open</span>
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
      {/* SECTION 1: "Who Can Apply?" */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow purple">
              <Users size={14} /> Eligibility
            </span>
            <h2 className="section-title">Who Can Apply?</h2>
            <p className="section-subtitle">
              Admissions are open for eligible students from <strong>Playgroup onwards</strong>. We welcome parents seeking a student-centric environment where children are valued as unique individuals.
            </p>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div
              className="card-playful"
              style={{
                backgroundColor: '#f5f3ff',
                borderColor: '#c4b5fd',
                padding: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ width: '64px', height: '64px', borderRadius: '20px', backgroundColor: '#ffffff', color: '#7e22ce', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(76,29,149,0.1)' }}>
                <Award size={32} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.45rem', color: 'var(--color-purple-deep)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
                  Open for Playgroup Onwards
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  We invite applications across foundational early childhood stages (Playgroup, Nursery, LKG, UKG) and primary/lower-secondary classes. Parents are encouraged to visit our campus during office hours for an informal interaction and prospectus consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: "Why Our Admission Approach Is Different" */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#fbf7ff', position: 'relative' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow pink">
              <Heart size={14} color="#db2777" /> Personalized Philosophy
            </span>
            <h2 className="section-title">Why Our Admission Approach Is Different</h2>
            <p className="section-subtitle">
              We purposefully maintain limited classroom occupancy to guarantee that every child receives genuine, individual teacher attention.
            </p>
          </div>

          {/* Visual: Child -> Teacher -> Individual Attention */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '32px',
              padding: '3rem 2rem',
              border: '2px solid var(--border-playful)',
              boxShadow: 'var(--shadow-floating)',
              maxWidth: '920px',
              margin: '0 auto 3rem auto',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', alignItems: 'center', textAlign: 'center' }}>
              {/* Step 1: Child */}
              <div style={{ padding: '1.5rem', backgroundColor: '#fdf2f8', borderRadius: '24px', border: '1px solid #fbcfe8' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#ffffff', color: '#db2777', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                  <User size={30} />
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#9d174d', margin: 0, fontFamily: 'var(--font-display)' }}>
                  1. The Child
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: 1.5 }}>
                  Recognized with unique talents, curiosities, and learning pace.
                </p>
              </div>

              {/* Arrow 1 */}
              <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--color-purple-main)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--color-purple-deep)', fontSize: '1.1rem' }}>
                  <span>Guides &amp; Mentors</span>
                  <ArrowRight size={24} />
                </div>
              </div>

              {/* Step 2: Teacher */}
              <div style={{ padding: '1.5rem', backgroundColor: '#f0fdf4', borderRadius: '24px', border: '1px solid #bbf7d0' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#ffffff', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                  <Users size={30} />
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#14532d', margin: 0, fontFamily: 'var(--font-display)' }}>
                  2. Dedicated Teacher
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: 1.5 }}>
                  Trained mentors providing warm supervision and customized feedback.
                </p>
              </div>

              {/* Arrow 2 */}
              <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--color-purple-main)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: '#16a34a', fontSize: '1.1rem' }}>
                  <span>Results in</span>
                  <ArrowRight size={24} />
                </div>
              </div>

              {/* Step 3: Individual Attention */}
              <div style={{ padding: '1.5rem', backgroundColor: '#fefce8', borderRadius: '24px', border: '1px solid #fef08a' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#ffffff', color: '#ca8a04', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                  <Heart size={30} />
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#854d0e', margin: 0, fontFamily: 'var(--font-display)' }}>
                  3. Individual Attention
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: 1.5 }}>
                  No child gets left behind in an overcrowded classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: "Parent-Teacher Partnership" */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow yellow">
                <HeartHandshake size={14} color="#854d0e" /> Home &amp; School Synergy
              </span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                Parent-Teacher Partnership
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Education is a collaborative endeavor. Millennium English School organizes <strong>structured monthly Parent-Teacher Meetings (PTMs)</strong> to thoroughly discuss student progress, developmental milestones, and school-related matters.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                These monthly interactions ensure that parents remain closely informed partners in their child's academic and emotional growth journey.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} color="#16a34a" />
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Structured monthly consultation schedules
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} color="#16a34a" />
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Transparent discussion of formative academic progress
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} color="#16a34a" />
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Joint problem solving for habits and wellbeing
                  </span>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div
                className="card-playful"
                style={{
                  padding: '1rem',
                  borderRadius: '32px',
                  backgroundColor: '#ffffff',
                  boxShadow: 'var(--shadow-floating)',
                  border: '3px solid var(--border-playful)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                  alt="Parent Teacher child partnership at Millennium English School"
                  style={{ width: '100%', borderRadius: '24px', height: '340px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: "How to Enquire" Form */}
      {/* ========================================================================= */}
      <section id="enquire-form" className="section" style={{ backgroundColor: '#fbf7ff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow pink">
              Application Desk
            </span>
            <h2 className="section-title">How to Enquire</h2>
            <p className="section-subtitle">
              Submit your details below and our administrative team will reach out with prospectus information and campus visit details.
            </p>
          </div>

          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div
              className="card-playful"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '32px',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-floating)',
                border: '3px solid var(--border-playful)',
              }}
            >
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'var(--color-green-light)', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--color-purple-deep)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
                    Enquiry Submitted Successfully!
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                    Thank you for your interest in Millennium English School. Our admissions coordinator will contact you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ parentName: '', phone: '', email: '', childName: '', gradeInterest: 'Playgroup', message: '' });
                    }}
                    className="btn btn-cta"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Parent / Guardian Name *</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="e.g. Ananya Mukherjee"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      />
                    </div>

                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="form-input"
                        placeholder="e.g. +91 94755 49596"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="e.g. parent@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Child's Name *</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="e.g. Aarav Mukherjee"
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label">Class Interested In *</label>
                    <select
                      className="form-input"
                      value={formData.gradeInterest}
                      onChange={(e) => setFormData({ ...formData, gradeInterest: e.target.value })}
                    >
                      <option value="Playgroup">Playgroup</option>
                      <option value="Nursery">Nursery</option>
                      <option value="Lower Kindergarten (LKG)">Lower Kindergarten (LKG)</option>
                      <option value="Upper Kindergarten (UKG)">Upper Kindergarten (UKG)</option>
                      <option value="Class 1">Class 1</option>
                      <option value="Class 2">Class 2</option>
                      <option value="Class 3">Class 3</option>
                      <option value="Class 4">Class 4</option>
                      <option value="Class 5">Class 5</option>
                      <option value="Class 6">Class 6</option>
                      <option value="Class 7">Class 7</option>
                      <option value="Class 8">Class 8</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.75rem' }}>
                    <label className="form-label">Message or Specific Query</label>
                    <textarea
                      rows={3}
                      className="form-input"
                      placeholder="Any specific questions about curriculum, school hours, or campus walkthrough..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-cta btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Submit Enquiry</span>
                    <ArrowRight size={20} />
                  </button>

                  <div style={{ marginTop: '0.85rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    * Your details are secure and used solely for admission communication.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: "Office Hours" & Contact Details */}
      {/* ========================================================================= */}
      <section id="office-hours" className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow yellow">
              <Clock size={14} color="#854d0e" /> Visit &amp; Contact
            </span>
            <h2 className="section-title">Office Hours &amp; Admissions Desk</h2>
            <p className="section-subtitle">
              Our administrative counseling desk welcomes parents for queries, prospectus collection, and campus walkthroughs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            {/* Office Timings Card */}
            <div className="card-playful" style={{ backgroundColor: '#fefce8', borderColor: '#fef08a' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '16px', backgroundColor: '#ffffff', color: '#854d0e', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                <Clock size={26} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#854d0e', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
                Office Hours
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px dashed #fef08a' }}>
                  <strong>Monday to Friday:</strong>
                  <span style={{ fontWeight: 700, color: '#854d0e' }}>09:00 AM – 02:00 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px dashed #fef08a' }}>
                  <strong>Saturday:</strong>
                  <span style={{ fontWeight: 700, color: '#854d0e' }}>09:30 AM – 01:30 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong>Sunday:</strong>
                  <span style={{ fontWeight: 700, color: '#dc2626' }}>Office Closed</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="card-playful" style={{ backgroundColor: '#fdf4ff', borderColor: '#f5d0fe' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '16px', backgroundColor: '#ffffff', color: '#7e22ce', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                <Phone size={26} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-purple-deep)', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
                Contact Numbers &amp; Email
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Telephone:</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginTop: '0.15rem' }}>
                    <a href="tel:+919475549596" style={{ color: '#16a34a', fontWeight: 800, fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
                      +91 94755 49596
                    </a>
                    <a href="tel:03216356665" style={{ color: 'var(--color-purple-deep)', fontWeight: 700, fontSize: '1rem' }}>
                      03216-356665
                    </a>
                  </div>
                </div>

                <div style={{ marginTop: '0.5rem' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Inquiries:</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginTop: '0.15rem' }}>
                    <a href="mailto:millennium.habra@gmail.com" style={{ color: 'var(--color-purple-main)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Mail size={14} /> millennium.habra@gmail.com
                    </a>
                    <a href="mailto:query.millennium@gmail.com" style={{ color: 'var(--color-purple-main)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Mail size={14} /> query.millennium@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* END CTA: "Have Questions? We're Happy to Help." */}
      {/* ========================================================================= */}
      <section style={{ backgroundColor: 'var(--color-purple-deep)', color: '#ffffff', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <OrganicBlob color="rgba(236, 72, 153, 0.25)" size={450} style={{ top: '-10%', right: '-5%' }} />
        <OrganicBlob color="rgba(250, 204, 21, 0.2)" size={350} style={{ bottom: '-15%', left: '-5%' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: 'rgba(250, 204, 21, 0.2)',
                color: '#facc15',
                padding: '0.4rem 1.1rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '1.25rem',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                fontFamily: 'var(--font-display)',
              }}
            >
              Admissions Support
            </span>

            <h2 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem', lineHeight: 1.2, fontFamily: 'var(--font-display)' }}>
              Have Questions? We're Happy to Help.
            </h2>

            <p style={{ fontSize: '1.15rem', color: '#e9d5ff', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Speak directly with our admissions coordinator or visit our campus in South Habra.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="tel:+919475549596"
                className="btn btn-cta btn-lg"
                style={{
                  backgroundColor: '#22c55e',
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  padding: '0.85rem 2.25rem',
                  textDecoration: 'none',
                }}
              >
                <Phone size={20} />
                <span>Call +91 94755 49596</span>
              </a>
              <a
                href="#enquire-form"
                className="btn btn-outline btn-lg"
                style={{
                  color: '#ffffff',
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                  fontSize: '1.05rem',
                  textDecoration: 'none',
                }}
              >
                <span>Submit Online Form</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
