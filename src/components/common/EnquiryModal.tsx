import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import { schoolInfo } from '../../data/schoolInfo';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    grade: 'Nursery',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Keyboard accessibility (Escape key to dismiss)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Phone validation
    const cleanedPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanedPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMessage('');
    setFormData({
      studentName: '',
      parentName: '',
      phone: '',
      email: '',
      grade: 'Nursery',
      message: '',
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-enquiry-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Header - Deep Purple Accent */}
        <div style={{ padding: '1.75rem 2rem 1.25rem 2rem', borderBottom: '2px solid var(--border-subtle)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', backgroundColor: '#f5f3ff' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#facc15', color: '#581c87', padding: '0.2rem 0.65rem', borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
              Session 2025–26 Enrolment
            </div>
            <h3 id="modal-enquiry-title" style={{ fontSize: '1.5rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
              Admission &amp; General Enquiry
            </h3>
            <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
              Fill in your details and our admission counselor will connect within 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Enquiry Modal"
            style={{ background: '#ffffff', border: '1px solid var(--border-playful)', borderRadius: '50%', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--color-purple-deep)' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '2rem' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'var(--color-green-light)', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                <CheckCircle2 size={42} />
              </div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-purple-deep)', fontFamily: 'var(--font-display)' }}>
                Enquiry Received Successfully!
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 1.75rem auto', lineHeight: 1.6 }}>
                Thank you for your interest in <strong>Millennium English School</strong>. A member of our admissions team will contact you shortly on <strong>{formData.phone || 'your phone number'}</strong>.
              </p>
              <div style={{ backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'inline-block', textAlign: 'left', marginBottom: '1.5rem', fontSize: '0.875rem', border: '1px solid var(--border-playful)' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-purple-deep)', fontFamily: 'var(--font-display)' }}>Direct Admissions Desk:</div>
                <div style={{ color: 'var(--text-secondary)' }}>Call: {schoolInfo.contact.phone[0]} | Email: {schoolInfo.contact.admissionsEmail}</div>
              </div>
              <div>
                <button onClick={handleReset} className="btn btn-cta">
                  Done / Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </div>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Student's Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    className="form-input"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  />
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Parent / Guardian Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    className="form-input"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="parent@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Grade / Class Applying For *</label>
                <select
                  className="form-select"
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                >
                  <option value="Playgroup">Playgroup (2+ Years)</option>
                  <option value="Nursery">Nursery (3+ Years)</option>
                  <option value="LKG">LKG (4+ Years)</option>
                  <option value="UKG">UKG (5+ Years)</option>
                  <option value="Grade 1">Grade 1 (6+ Years)</option>
                  <option value="Grade 2">Grade 2</option>
                  <option value="Grade 3">Grade 3</option>
                  <option value="Grade 4">Grade 4</option>
                  <option value="Grade 5">Grade 5</option>
                  <option value="Grade 6">Grade 6</option>
                  <option value="Grade 7">Grade 7</option>
                  <option value="Grade 8">Grade 8</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Additional Message or Questions</label>
                <textarea
                  className="form-textarea"
                  placeholder="Share details regarding transport requirement, previous school, or specific questions..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-purple-main)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
                  <AlertCircle size={15} color="#ec4899" /> Max 25 students per class
                </span>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button type="button" onClick={onClose} className="btn btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-cta" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Enquiry'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
