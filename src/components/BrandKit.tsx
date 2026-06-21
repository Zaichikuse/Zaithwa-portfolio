import { useState } from 'react';
import { BookOpen, Palette, Type, Grid3x3, ExternalLink, X, ArrowRight } from 'lucide-react';
import {
  techherLogoMain,
  techherLogo1,
  techherLogo2,
  techherLogo3,
} from '../assets/images';

const features = [
  {
    icon: <Palette size={17} />,
    title: 'Color System',
    body: 'A carefully curated palette communicating trust, innovation, and empowerment for African women in tech.',
  },
  {
    icon: <Type size={17} />,
    title: 'Typography',
    body: 'Clean, modern type hierarchy maintaining readability across digital and print applications.',
  },
  {
    icon: <Grid3x3 size={17} />,
    title: 'Logo Variations',
    body: 'Primary, secondary, and mark-only versions in full-color, monochrome, and reversed.',
  },
  {
    icon: <BookOpen size={17} />,
    title: 'Brand Guidelines',
    body: 'Clear rules for spacing, sizing, and usage to keep the brand consistent across all touchpoints.',
  },
];

const logoShowcase = [techherLogoMain, techherLogo1, techherLogo2, techherLogo3];

export default function BrandKit() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="brandkit" className="section-navy py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-14 anim-up">
          <span className="block mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: '#c97a6b' }}>
            Featured Project
          </span>
          <h2 className="heading-lg mb-3" style={{ color: '#f8f9fa' }}>
            TechHer MW — Brand System
          </h2>
          <div className="flex items-center gap-3">
            <div className="divider-rose" />
            <p className="text-sm" style={{ color: 'rgba(248,249,250,0.65)' }}>
              My flagship branding project — complete brand identity as founder &amp; lead designer.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — Logo showcase */}
          <div className="anim-left">
            <div className="grid grid-cols-2 gap-3 mb-4">
              {logoShowcase.map((src, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center p-6 rounded-xl overflow-hidden"
                  style={{
                    background: i === 0 ? '#ffffff' : 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    minHeight: 120,
                  }}
                >
                  <img
                    src={src}
                    alt={`TechHer MW logo variation ${i + 1}`}
                    className="max-w-full max-h-20 object-contain"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-center" style={{ color: 'rgba(248,249,250,0.4)' }}>
              TechHer MW — 4 logo variations
            </p>
          </div>

          {/* Right — Details */}
          <div className="anim-up">
            {/* Role badge */}
            <div className="flex items-center gap-2 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold tracking-wide"
                style={{ background: '#c97a6b', color: '#fff' }}
              >
                Founder &amp; Lead Designer
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(248,249,250,0.7)' }}>
              TechHer MW is Malawi's leading women-in-technology community. As founder, I designed the
              complete visual identity — from initial concept through brand guidelines, logo system,
              social media templates, and interactive brand documentation.
            </p>

            {/* Feature list */}
            <div className="space-y-4 mb-10">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(201,122,107,0.15)', color: '#c97a6b' }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5" style={{ color: '#f8f9fa' }}>{f.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(248,249,250,0.55)' }}>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-rosegold"
              >
                <BookOpen size={15} />
                Explore Interactive Brand Kit
              </button>
              <a
                href="/brandkit.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-rosegold"
              >
                <ExternalLink size={15} />
                Open Full Screen
              </a>
            </div>
          </div>
        </div>

        {/* Preview teaser */}
        <div
          className="mt-14 p-6 rounded-2xl anim-up flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div>
            <p className="text-sm font-semibold" style={{ color: '#f8f9fa' }}>
              Interactive Brand Documentation
            </p>
            <p className="text-xs mt-1" style={{ color: 'rgba(248,249,250,0.5)' }}>
              Explore the complete TechHer MW brand guidelines — colors, typography, logo usage, and brand voice.
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="shrink-0 flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: '#c97a6b' }}
            onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#e0b49a'; }}
            onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#c97a6b'; }}
          >
            View Brand Kit
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* Iframe Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex flex-col" style={{ background: 'rgba(15,20,25,0.96)' }}>
          <div
            className="flex items-center justify-between px-5 py-3 shrink-0"
            style={{ background: '#1a3a52', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center gap-3">
              <BookOpen size={16} style={{ color: '#c97a6b' }} />
              <span className="font-semibold text-sm" style={{ color: '#f8f9fa' }}>
                TechHer MW — Interactive Brand Kit
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/brandkit.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(248,249,250,0.7)' }}
              >
                <ExternalLink size={11} />
                Full Screen
              </a>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded transition-colors hover:bg-white/10"
                style={{ color: 'rgba(248,249,250,0.6)' }}
              >
                <X size={18} />
              </button>
            </div>
          </div>
          <iframe
            src="/brandkit.html"
            title="TechHer MW Brand Kit"
            className="flex-1 w-full border-0"
            loading="lazy"
          />
        </div>
      )}
    </section>
  );
}
