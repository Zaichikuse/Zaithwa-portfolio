import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const links = [
  { label: 'Home',         href: '#home' },
  { label: 'Design Work',  href: '#design' },
  { label: 'Software',     href: '#software' },
  { label: 'Brand Kit',    href: '#brandkit' },
  { label: 'About',        href: '#about' },
  { label: 'Contact',      href: '#contact' },
];

const socials = [
  { icon: <Linkedin size={16} />, href: 'https://linkedin.com/in/zaithwa-chikuse', label: 'LinkedIn' },
  { icon: <Github   size={16} />, href: 'https://github.com/Zaichikuse',            label: 'GitHub' },
  { icon: <Mail     size={16} />, href: 'mailto:zaichikuse@gmail.com',              label: 'Email' },
];

export default function Footer() {
  const go = (href: string) =>
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{ background: '#1a3a52' }}>
      {/* Rose gold accent top border */}
      <div style={{ height: 3, background: 'linear-gradient(90deg, #c97a6b, #d4956a, #c97a6b)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-baseline gap-0.5 mb-3">
              <span className="font-bold text-xl tracking-tight" style={{ color: '#f8f9fa' }}>Zaithwa</span>
              <span className="font-black text-2xl" style={{ color: '#c97a6b' }}>.</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(248,249,250,0.5)' }}>
              Graphic Designer &amp; Software Engineer — building brands and technology for African communities.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); go(href); }}
                className="text-xs font-medium transition-colors duration-150"
                style={{ color: 'rgba(248,249,250,0.55)' }}
                onMouseOver={(e) => { (e.target as HTMLElement).style.color = '#c97a6b'; }}
                onMouseOut={(e) => { (e.target as HTMLElement).style.color = 'rgba(248,249,250,0.55)'; }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Socials + back to top */}
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-150"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(248,249,250,0.6)' }}
                onMouseOver={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = 'rgba(201,122,107,0.2)';
                  el.style.color = '#c97a6b';
                }}
                onMouseOut={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = 'rgba(255,255,255,0.08)';
                  el.style.color = 'rgba(248,249,250,0.6)';
                }}
              >
                {s.icon}
              </a>
            ))}
            <button
              onClick={() => go('#home')}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-150"
              style={{ background: '#c97a6b', color: '#fff' }}
              aria-label="Back to top"
              onMouseOver={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#b5635a'; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#c97a6b'; }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
            style={{ color: 'rgba(248,249,250,0.35)' }}>
            <p>© 2026 Zaithwa Chikuse. All rights reserved.</p>
            <p>Blantyre, Malawi</p>
          </div>
          <p className="text-center mt-3" style={{ fontSize: '0.65rem', color: 'rgba(248,249,250,0.2)' }}>
            No tracking · No cookies · Contact form data is used solely to respond to your enquiry.
          </p>
        </div>
      </div>
    </footer>
  );
}
