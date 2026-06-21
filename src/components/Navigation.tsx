import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',              href: '#home' },
  { label: 'Design Work',       href: '#design' },
  { label: 'Software',          href: '#software' },
  { label: 'Brand Kit',         href: '#brandkit' },
  { label: 'About',             href: '#about' },
  { label: 'Contact',           href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const pos = window.scrollY + 100;
      for (const { href } of navLinks) {
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? '#ffffff' : 'rgba(255,255,255,0.96)',
        boxShadow: scrolled ? '0 1px 0 #f0eeec, 0 4px 20px rgba(26,58,82,0.06)' : 'none',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); go('#home'); }}
            className="flex items-center gap-1"
            aria-label="Zaithwa Chikuse — Home"
          >
            <span
              className="font-bold tracking-tight text-lg"
              style={{ color: '#0f1419' }}
            >
              Zaithwa
            </span>
            <span style={{ color: '#c97a6b', fontWeight: 800, fontSize: '1.25rem' }}>.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ label, href }) => {
              const id = href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); go(href); }}
                  className="relative px-3.5 py-2 text-sm font-medium transition-colors duration-150"
                  style={{ color: isActive ? '#1a3a52' : '#4b5563' }}
                  onMouseOver={(e) => !isActive && ((e.target as HTMLElement).style.color = '#1a3a52')}
                  onMouseOut={(e) => !isActive && ((e.target as HTMLElement).style.color = '#4b5563')}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full"
                      style={{ background: '#c97a6b' }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); go('#contact'); }}
              className="hidden md:inline-flex btn-navy text-sm px-5 py-2"
            >
              Hire Me
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden p-2 rounded-md transition-colors"
              style={{ color: '#1a3a52' }}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '440px' : '0', opacity: open ? 1 : 0 }}
      >
        <div
          className="px-5 py-5 space-y-1"
          style={{ background: '#ffffff', borderTop: '1px solid #f0eeec' }}
        >
          {navLinks.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); go(href); }}
                className="flex items-center gap-3 px-3 py-3 rounded-md text-sm font-medium transition-colors"
                style={{ color: isActive ? '#1a3a52' : '#4b5563' }}
              >
                {isActive && (
                  <span className="w-1 h-4 rounded-full" style={{ background: '#c97a6b' }} />
                )}
                {label}
              </a>
            );
          })}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); go('#contact'); }}
              className="btn-navy w-full justify-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
