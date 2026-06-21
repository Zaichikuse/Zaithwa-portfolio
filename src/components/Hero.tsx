import { ArrowRight, ArrowDown } from 'lucide-react';

const profile = '/profile.jpg';

export default function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-white"
    >
      {/* Very subtle rose gold gradient top-right */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(201,122,107,0.06) 0%, transparent 65%)',
        }}
      />
      {/* Very subtle navy gradient bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom left, rgba(26,58,82,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Text ── */}
          <div className="order-2 lg:order-1">

            {/* Availability badge */}
            <div className="flex items-center gap-3 mb-10 anim-fade">
              <span
                className="flex items-center gap-2 text-xs font-semibold tracking-wide"
                style={{ color: '#6b7280' }}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full animate-ping-slow"
                  style={{ background: '#c97a6b', animationDuration: '2s' }}
                />
                Available for projects
              </span>
            </div>

            {/* Name */}
            <h1 className="heading-xl mb-3 anim-up">
              Zaithwa<br />Chikuse
            </h1>

            {/* Role — rose gold */}
            <p
              className="text-xl font-semibold mb-6 anim-up"
              style={{ color: '#c97a6b', animationDelay: '0.08s', letterSpacing: '-0.01em' }}
            >
              Graphic Designer &amp; Software Engineer
            </p>

            {/* Bio */}
            <p
              className="text-base leading-relaxed mb-8 max-w-lg anim-up"
              style={{ color: '#4b5563', animationDelay: '0.14s' }}
            >
              I combine strong visual design with solid engineering to create complete solutions —
              from brand identity systems to full-stack applications built for African communities.
            </p>

            {/* Role tags */}
            <div className="flex flex-wrap gap-2 mb-10 anim-up" style={{ animationDelay: '0.18s' }}>
              {['Brand Identity', 'Software Engineering', 'UI / UX', 'Founder — TechHer MW'].map((r) => (
                <span
                  key={r}
                  className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: 'rgba(201,122,107,0.08)',
                    color: '#b5635a',
                    border: '1px solid rgba(201,122,107,0.2)',
                  }}
                >
                  {r}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 anim-up" style={{ animationDelay: '0.22s' }}>
              <button onClick={() => go('design')} className="btn-navy">
                View My Work
                <ArrowRight size={15} />
              </button>
              <button onClick={() => go('contact')} className="btn-outline-navy">
                Get in Touch
              </button>
            </div>

            {/* Stats */}
            <div
              className="flex gap-10 mt-12 pt-10 anim-up"
              style={{ animationDelay: '0.28s', borderTop: '1px solid #f0eeec' }}
            >
              {[
                { n: '12+', label: 'Design Projects' },
                { n: '4',   label: 'Software Apps' },
                { n: '4+',  label: 'Years Active' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold" style={{ color: '#0f1419' }}>{s.n}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#9ca3af' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Photo ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end anim-fade">
            <div className="relative animate-float">

              {/* Subtle rose gold glow */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-40"
                style={{
                  background: 'radial-gradient(ellipse, rgba(201,122,107,0.25) 0%, transparent 70%)',
                  filter: 'blur(24px)',
                }}
              />

              {/* Rose gold gradient border ring */}
              <div
                className="absolute -inset-0.5 rounded-3xl"
                style={{
                  background: 'linear-gradient(145deg, #c97a6b 0%, #e0b49a 40%, #d4956a 70%, #c97a6b 100%)',
                }}
              />

              {/* White inner gap */}
              <div className="absolute -inset-0 rounded-3xl" style={{ background: 'transparent' }} />

              {/* Photo */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ width: '18rem', height: '22rem' }}
              >
                <img
                  src={profile}
                  alt="Zaithwa Chikuse — Graphic Designer & Software Engineer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                {/* Subtle bottom vignette */}
                <div
                  className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(248,249,250,0.3), transparent)' }}
                />
              </div>

              {/* Floating badge — top left */}
              <div
                className="absolute -top-4 -left-8 flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-lg"
                style={{ background: '#1a3a52', color: '#fff', boxShadow: '0 8px 24px rgba(26,58,82,0.3)' }}
              >
                <span className="text-xs font-bold tracking-wide">Brand Identity</span>
              </div>

              {/* Floating badge — bottom right */}
              <div
                className="absolute -bottom-4 -right-8 flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-lg"
                style={{
                  background: '#ffffff',
                  border: '1.5px solid rgba(201,122,107,0.35)',
                  boxShadow: '0 8px 24px rgba(201,122,107,0.2)',
                }}
              >
                <span className="text-xs font-bold" style={{ color: '#c97a6b' }}>React · Flutter</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#design"
        onClick={(e) => { e.preventDefault(); go('design'); }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-opacity hover:opacity-60"
        style={{ color: '#9ca3af' }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
