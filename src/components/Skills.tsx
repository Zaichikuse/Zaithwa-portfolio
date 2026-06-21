import { Paintbrush, Code2 } from 'lucide-react';
import { designSkills, engineeringSkills } from '../data/portfolio';

function SkillColumn({
  icon,
  title,
  subtitle,
  skills,
  animClass,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  skills: string[];
  animClass: string;
}) {
  return (
    <div className={animClass}>
      {/* Column header */}
      <div className="flex items-center gap-3 mb-7">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: '#1a3a52', color: '#fff' }}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-base" style={{ color: '#0f1419' }}>{title}</h3>
          <p className="text-xs mt-0.5" style={{ color: '#9ca3af' }}>{subtitle}</p>
        </div>
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-lg text-sm font-medium cursor-default transition-all duration-200"
            style={{
              background: '#fff',
              color: '#1a3a52',
              border: '1.5px solid rgba(26,58,82,0.15)',
              boxShadow: '0 1px 4px rgba(26,58,82,0.05)',
            }}
            onMouseOver={(e) => {
              const el = e.currentTarget as HTMLSpanElement;
              el.style.background = '#1a3a52';
              el.style.color = '#fff';
              el.style.border = '1.5px solid #1a3a52';
              el.style.boxShadow = '0 4px 16px rgba(26,58,82,0.2)';
              el.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              const el = e.currentTarget as HTMLSpanElement;
              el.style.background = '#fff';
              el.style.color = '#1a3a52';
              el.style.border = '1.5px solid rgba(26,58,82,0.15)';
              el.style.boxShadow = '0 1px 4px rgba(26,58,82,0.05)';
              el.style.transform = 'translateY(0)';
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-offwhite py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-14 anim-up">
          <span className="section-label block mb-3">Capabilities</span>
          <h2 className="heading-lg mb-3">Skills &amp; Expertise</h2>
          <div className="flex items-center gap-3">
            <div className="divider-rose" />
            <p className="text-sm" style={{ color: '#6b7280' }}>
              A creative-technical hybrid — equally fluent in design suites and developer tools.
            </p>
          </div>
        </div>

        {/* Two columns */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10 rounded-2xl"
          style={{ background: '#fff', border: '1px solid #f0eeec', boxShadow: '0 2px 16px rgba(26,58,82,0.05)' }}
        >
          <SkillColumn
            icon={<Paintbrush size={18} />}
            title="Design Skills"
            subtitle="Visual identity, print & digital design"
            skills={designSkills}
            animClass="anim-left"
          />

          {/* Divider */}
          <div className="hidden lg:block absolute w-px" style={{ background: '#f0eeec', top: 0, bottom: 0, left: '50%' }} />

          <SkillColumn
            icon={<Code2 size={18} />}
            title="Engineering Skills"
            subtitle="Web, mobile & AI development"
            skills={engineeringSkills}
            animClass="anim-up"
          />
        </div>

        {/* Note */}
        <p className="text-sm text-center mt-8 anim-fade" style={{ color: '#9ca3af' }}>
          Always learning — currently exploring{' '}
          <span style={{ color: '#c97a6b' }}>AI / ML integration</span> and{' '}
          <span style={{ color: '#c97a6b' }}>advanced motion design</span>.
        </p>
      </div>
    </section>
  );
}
