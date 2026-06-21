import type { ReactNode } from 'react';
import { Globe, Palette, Code2, Users } from 'lucide-react';

const profile = '/profile.jpg';

const highlights = [
  {
    icon: <Palette size={16} />,
    title: 'Brand Design',
    body: 'Visual identities and brand systems from concept to brand guidelines.',
  },
  {
    icon: <Code2 size={16} />,
    title: 'Engineering',
    body: 'Full-stack web and mobile apps built for real-world African users.',
  },
  {
    icon: <Globe size={16} />,
    title: 'African Context',
    body: 'Technology and design rooted in local realities — offline-first, bilingual, mobile-native.',
  },
  {
    icon: <Users size={16} />,
    title: 'Community',
    body: 'Founder of TechHer MW, Malawi\'s women-in-technology community.',
  },
];

// Email built from parts — reduces plain-text scraping by basic bots
const em = `${'zaichikuse'}@${'gmail.com'}`;

const facts: { label: string; value: ReactNode }[] = [
  { label: 'Based in',   value: 'Blantyre, Malawi' },
  { label: 'Experience', value: '4+ Years Active' },
  { label: 'Role',       value: 'Brand & Systems Lead at CTJ Tec Motors' },
  { label: 'Community',  value: 'Founder, TechHer MW' },
  { label: 'Specialty',  value: 'Graphic Design & Software Engineering' },
  {
    label: 'Email',
    value: (
      <a href={`mailto:${em}`} style={{ color: '#c97a6b', textDecoration: 'none' }}
        onMouseOver={e => { (e.target as HTMLElement).style.textDecoration = 'underline'; }}
        onMouseOut={e  => { (e.target as HTMLElement).style.textDecoration = 'none'; }}>
        {/* HTML entities prevent plain-text email scraping */}
        zaichikuse&#64;gmail&#46;com
      </a>
    ),
  },
];

export default function About() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about" className="section-white py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-14 anim-up">
          <span className="section-label block mb-3">About Me</span>
          <h2 className="heading-lg mb-3">Who I Am</h2>
          <div className="flex items-center gap-3">
            <div className="divider-rose" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — photo + facts */}
          <div className="anim-left">
            {/* Photo */}
            <div className="relative inline-block mb-8">
              {/* Rose gold gradient border */}
              <div
                className="absolute -inset-0.5 rounded-2xl"
                style={{ background: 'linear-gradient(145deg, #c97a6b, #e0b49a, #d4956a)' }}
              />
              <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: 360, aspectRatio: '4/5' }}>
                <img
                  src={profile}
                  alt="Zaithwa Chikuse"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Fast facts */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid #f0eeec', boxShadow: '0 2px 16px rgba(26,58,82,0.05)' }}
            >
              {facts.map(({ label, value }, i) => (
                <div
                  key={label}
                  className="flex gap-4 px-5 py-3.5"
                  style={{ borderBottom: i < facts.length - 1 ? '1px solid #f8f9fa' : 'none' }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-wider shrink-0 pt-0.5"
                    style={{ color: '#c97a6b', width: 80 }}
                  >
                    {label}
                  </span>
                  <span className="text-sm" style={{ color: '#374151' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — bio + highlights */}
          <div className="anim-up">
            {/* Bio paragraphs */}
            <div className="space-y-5 mb-10">
              <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
                I'm a software engineer and graphic designer from Blantyre, Malawi, with 4+ years of
                experience in freelance design and software development. I combine strong visual design
                with solid engineering to create complete solutions — from brand identity systems to
                full-stack applications.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
                I specialize in building technology and brands that serve African communities, with
                focus on agriculture, education, and women in tech. I work with discipline, attention
                to detail, and commitment to quality.
              </p>
              <div
                className="p-5 rounded-xl"
                style={{ background: '#f8f9fa', borderLeft: '3px solid #c97a6b' }}
              >
                <p className="text-sm font-medium leading-relaxed" style={{ color: '#1a3a52' }}>
                  Currently: Brand &amp; Systems Lead at CTJ Tec Motors | Founder of TechHer MW Community | Peer Tutor
                </p>
              </div>
              <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
                My work spans logo design, brand systems, mobile apps, web applications, and AI integration.
              </p>
            </div>

            {/* Highlights 2×2 */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="p-5 rounded-xl card-white"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: 'rgba(201,122,107,0.1)', color: '#c97a6b' }}
                  >
                    {h.icon}
                  </div>
                  <h4 className="text-sm font-bold mb-1" style={{ color: '#0f1419' }}>{h.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>{h.body}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => go('contact')} className="btn-navy">
                Work With Me
              </button>
              <button onClick={() => go('design')} className="btn-outline-navy">
                View Design Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
