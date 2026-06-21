import { ExternalLink, Github, Zap, Clock, RefreshCw } from 'lucide-react';
import { softwareProjects, type SoftwareProject } from '../data/portfolio';

const STATUS = {
  live:          { label: 'Live',        color: '#059669', bg: 'rgba(5,150,105,0.08)',  icon: <Zap size={11} /> },
  beta:          { label: 'Beta',        color: '#d97706', bg: 'rgba(217,119,6,0.08)',  icon: <Clock size={11} /> },
  'in-progress': { label: 'In Progress', color: '#c97a6b', bg: 'rgba(201,122,107,0.08)', icon: <RefreshCw size={11} /> },
};

function ProjectCard({ project }: { project: SoftwareProject }) {
  const status = STATUS[project.status];

  return (
    <div
      className="card-white rounded-2xl p-7 anim-up flex flex-col"
    >
      {/* Top row */}
      <div className="flex items-start gap-4 mb-5">
        {/* Monogram */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl shrink-0"
          style={{ background: '#1a3a52', color: '#fff', letterSpacing: '-0.02em' }}
        >
          {project.name[0]}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-base" style={{ color: '#0f1419' }}>{project.name}</h3>
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
              style={{ background: status.bg, color: status.color }}
            >
              {status.icon}
              {status.label}
            </span>
          </div>
          <p className="text-sm font-medium mt-0.5" style={{ color: '#c97a6b' }}>{project.tagline}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-5" style={{ color: '#4b5563' }}>
        {project.description}
      </p>

      {/* Features */}
      <div className="mb-5">
        <p
          className="text-xs font-bold uppercase tracking-wider mb-2.5"
          style={{ color: '#9ca3af' }}
        >
          Key Features
        </p>
        <ul className="space-y-1.5">
          {project.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-xs" style={{ color: '#6b7280' }}>
              <span
                className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                style={{ background: '#c97a6b' }}
              />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Impact */}
      <div
        className="p-3.5 rounded-lg mb-5 text-xs leading-relaxed italic"
        style={{
          background: '#f8f9fa',
          borderLeft: '3px solid #c97a6b',
          color: '#4b5563',
        }}
      >
        {project.impact}
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
        {project.tech.map((t) => (
          <span key={t} className="tag-navy text-xs">{t}</span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4" style={{ borderTop: '1px solid #f0eeec' }}>
        {project.liveUrl && project.liveUrl !== '#' ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy text-xs px-4 py-2"
            style={{ borderRadius: '0.375rem' }}
          >
            <ExternalLink size={12} />
            Live Demo
          </a>
        ) : (
          <span
            className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded"
            style={{ color: '#9ca3af', background: '#f8f9fa', cursor: 'default' }}
          >
            <ExternalLink size={12} />
            Coming Soon
          </span>
        )}
        {project.githubUrl && project.githubUrl !== '#' && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-navy text-xs px-4 py-2"
            style={{ borderRadius: '0.375rem' }}
          >
            <Github size={12} />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default function SoftwareProjects() {
  return (
    <section id="software" className="section-white py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-14 anim-up">
          <span className="section-label block mb-3">Engineering</span>
          <h2 className="heading-lg mb-3">Software Projects</h2>
          <div className="flex items-center gap-3">
            <div className="divider-rose" />
            <p className="text-sm" style={{ color: '#6b7280' }}>
              Full-stack and mobile applications built for African communities.
            </p>
          </div>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softwareProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
