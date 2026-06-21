import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';

// Email built from parts — reduces plain-text scraping by basic bots
const em = `${'zaichikuse'}@${'gmail.com'}`;

const contactLinks = [
  { icon: <Mail size={18} />,     label: 'Email',    value: em,                href: `mailto:${em}` },
  { icon: <Phone size={18} />,    label: 'Phone',    value: '+265 991 645 387', href: 'tel:+265991645387' },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'zaithwa-chikuse-2b0628332', href: 'https://www.linkedin.com/in/zaithwa-chikuse-2b0628332' },
  { icon: <Github size={18} />,   label: 'GitHub',   value: 'Zaichikuse',       href: 'https://github.com/Zaichikuse' },
];

type Status = 'idle' | 'sending' | 'success' | 'error' | 'rate-limited';

// Client-side rate limiting (max 5 submissions per hour)
const RATE_KEY = 'zc_contact_ts';
const RATE_LIMIT = 5;
const RATE_WINDOW = 3_600_000;

function isRateLimited(): boolean {
  try {
    const raw = localStorage.getItem(RATE_KEY);
    if (!raw) return false;
    const ts: number[] = JSON.parse(raw);
    return ts.filter(t => t > Date.now() - RATE_WINDOW).length >= RATE_LIMIT;
  } catch { return false; }
}

function recordAttempt(): void {
  try {
    const raw = localStorage.getItem(RATE_KEY);
    const ts: number[] = raw ? JSON.parse(raw) : [];
    const recent = ts.filter(t => t > Date.now() - RATE_WINDOW);
    localStorage.setItem(RATE_KEY, JSON.stringify([...recent, Date.now()]));
  } catch {}
}

function sanitize(s: string): string {
  return s.replace(/<[^>]*>/g, '').replace(/javascript:/gi, '').trim();
}

function validate(f: { name: string; email: string; type: string; message: string }): string | null {
  if (sanitize(f.name).length < 2)   return 'Name must be at least 2 characters.';
  if (f.name.length > 100)            return 'Name is too long (max 100 characters).';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) || f.email.length > 254)
                                       return 'Please enter a valid email address.';
  if (!f.type)                         return 'Please select a project type.';
  if (sanitize(f.message).length < 10) return 'Message must be at least 10 characters.';
  if (f.message.length > 2000)         return 'Message is too long (max 2000 characters).';
  return null;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (validationError) setValidationError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isRateLimited()) { setStatus('rate-limited'); return; }
    const err = validate(form);
    if (err) { setValidationError(err); return; }
    setStatus('sending');
    // TODO: replace with actual serverless endpoint when backend is added
    await new Promise((r) => setTimeout(r, 1400));
    recordAttempt();
    setStatus('success');
    setForm({ name: '', email: '', type: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.72rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#1a3a52',
    marginBottom: '0.5rem',
  };

  const inputBase: React.CSSProperties = {
    width: '100%',
    padding: '0.7rem 0.875rem',
    fontSize: '0.875rem',
    background: '#ffffff',
    color: '#0f1419',
    border: '1.5px solid #e5e7eb',
    borderRadius: '0.5rem',
    outline: 'none',
    transition: 'border-color 0.15s',
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#1a3a52';
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = '#e5e7eb';
  };

  return (
    <section id="contact" className="section-offwhite py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-14 anim-up">
          <span className="section-label block mb-3">Get In Touch</span>
          <h2 className="heading-lg mb-3">Let's Connect</h2>
          <div className="flex items-center gap-3">
            <div className="divider-rose" />
            <p className="text-sm" style={{ color: '#6b7280' }}>
              Available for branding projects, UI/UX design, and software development.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left — contact info */}
          <div className="lg:col-span-2 anim-left space-y-4">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-5 rounded-xl transition-all duration-200 group card-white"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(26,58,82,0.06)', color: '#1a3a52' }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#9ca3af' }}>
                    {c.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: '#c97a6b' }}>{c.value}</p>
                </div>
              </a>
            ))}

            {/* Availability note */}
            <div
              className="p-5 rounded-xl"
              style={{ background: 'rgba(201,122,107,0.06)', border: '1px solid rgba(201,122,107,0.2)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ background: '#059669' }}
                />
                <span className="text-xs font-bold" style={{ color: '#059669' }}>Available for projects</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>
                Open to branding, design, and software projects. Typically responds within 24 hours.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 anim-up">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl space-y-5"
              style={{ background: '#ffffff', border: '1px solid #f0eeec', boxShadow: '0 2px 16px rgba(26,58,82,0.05)' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    style={inputBase}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    style={inputBase}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Project Type</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  required
                  style={{ ...inputBase, appearance: 'none' as React.CSSProperties['appearance'] }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                >
                  <option value="" disabled>Select project type...</option>
                  <option>Brand Identity Design</option>
                  <option>Logo Design</option>
                  <option>Print & Flyer Design</option>
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>Full-Stack Development</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label style={labelStyle}>Message</label>
                  <span style={{ fontSize: '0.7rem', color: form.message.length > 1800 ? '#dc2626' : '#9ca3af' }}>
                    {form.message.length}/2000
                  </span>
                </div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  maxLength={2000}
                  style={{ ...inputBase, resize: 'vertical' }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </div>

              {validationError && (
                <div
                  className="flex items-center gap-2.5 p-3.5 rounded-lg text-sm"
                  style={{ background: 'rgba(220,38,38,0.08)', color: '#dc2626', border: '1px solid rgba(220,38,38,0.2)' }}
                >
                  <AlertCircle size={15} />
                  {validationError}
                </div>
              )}
              {status === 'rate-limited' && (
                <div
                  className="flex items-center gap-2.5 p-3.5 rounded-lg text-sm"
                  style={{ background: 'rgba(234,179,8,0.08)', color: '#b45309', border: '1px solid rgba(234,179,8,0.2)' }}
                >
                  <Clock size={15} />
                  Too many messages sent. Please wait a while before trying again.
                </div>
              )}
              {status === 'success' && (
                <div
                  className="flex items-center gap-2.5 p-3.5 rounded-lg text-sm"
                  style={{ background: 'rgba(5,150,105,0.08)', color: '#059669', border: '1px solid rgba(5,150,105,0.2)' }}
                >
                  <CheckCircle size={15} />
                  Message sent! I'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div
                  className="flex items-center gap-2.5 p-3.5 rounded-lg text-sm"
                  style={{ background: 'rgba(220,38,38,0.08)', color: '#dc2626', border: '1px solid rgba(220,38,38,0.2)' }}
                >
                  <AlertCircle size={15} />
                  Something went wrong — please email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-rosegold w-full justify-center py-3"
                style={{ opacity: status === 'sending' ? 0.7 : 1, borderRadius: '0.5rem' }}
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 animate-spin" style={{ borderColor: 'rgba(255,255,255,0.3)', borderTopColor: '#fff' }} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
