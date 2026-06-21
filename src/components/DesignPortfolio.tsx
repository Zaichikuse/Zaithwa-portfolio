import { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, BookOpen } from 'lucide-react';
import { designProjects, designCategories, type DesignProject } from '../data/portfolio';

function ImageModal({ project, onClose }: { project: DesignProject; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const images = project.images;
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(15,20,25,0.88)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
        style={{ background: '#fff', boxShadow: '0 24px 80px rgba(0,0,0,0.4)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: '1px solid #f0eeec' }}
        >
          <div>
            <h3 className="font-bold text-base" style={{ color: '#0f1419' }}>{project.title}</h3>
            <p className="text-xs mt-0.5" style={{ color: '#9ca3af' }}>{project.category}</p>
          </div>
          <div className="flex items-center gap-3">
            {images.length > 1 && (
              <span className="text-sm" style={{ color: '#9ca3af' }}>{idx + 1} / {images.length}</span>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg transition-colors hover:bg-gray-100"
              style={{ color: '#6b7280' }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Image */}
        <div
          className="relative flex items-center justify-center"
          style={{ background: '#f8f9fa', minHeight: 400, maxHeight: '65vh' }}
        >
          <img
            src={images[idx]}
            alt={`${project.title} — view ${idx + 1}`}
            className="max-w-full max-h-[60vh] object-contain"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full"
                style={{ background: '#1a3a52', color: '#fff', boxShadow: '0 4px 12px rgba(26,58,82,0.35)' }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full"
                style={{ background: '#1a3a52', color: '#fff', boxShadow: '0 4px 12px rgba(26,58,82,0.35)' }}
              >
                <ChevronRight size={18} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className="rounded-full transition-all"
                    style={{
                      width: i === idx ? 20 : 7,
                      height: 7,
                      background: i === idx ? '#c97a6b' : 'rgba(26,58,82,0.25)',
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-5">
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#4b5563' }}>
            {project.description}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span key={t} className="tag-outline-navy">{t}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-0.5 rounded text-xs"
                  style={{ background: '#f8f9fa', color: '#6b7280', border: '1px solid #e5e7eb' }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          {project.hasBrandKit && (
            <a
              href="#brandkit"
              onClick={onClose}
              className="inline-flex items-center gap-2 mt-4 btn-rosegold text-sm px-4 py-2"
              style={{ borderRadius: '0.375rem' }}
            >
              <BookOpen size={13} />
              View Full Brand Kit
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  delay,
  onOpen,
}: {
  project: DesignProject;
  delay: number;
  onOpen: (p: DesignProject) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="card-white rounded-xl overflow-hidden cursor-pointer anim-up"
      style={{
        animationDelay: `${delay}s`,
        borderLeft: hovered ? '3px solid #c97a6b' : '3px solid transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(project)}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ height: 220, background: '#f8f9fa' }}
      >
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />

        {/* Zoom overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-300"
          style={{
            background: hovered ? 'rgba(26,58,82,0.5)' : 'rgba(0,0,0,0)',
            opacity: hovered ? 1 : 0,
          }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
            style={{ background: 'rgba(255,255,255,0.95)', color: '#1a3a52' }}
          >
            <ZoomIn size={15} />
            View Project
          </div>
        </div>

        {/* Image count */}
        {project.images.length > 1 && (
          <div
            className="absolute top-3 right-3 px-2 py-0.5 rounded text-xs font-bold"
            style={{ background: 'rgba(26,58,82,0.85)', color: '#fff' }}
          >
            1/{project.images.length}
          </div>
        )}

        {/* Brand Kit badge */}
        {project.hasBrandKit && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold"
            style={{ background: '#c97a6b', color: '#fff' }}
          >
            <BookOpen size={10} />
            Brand Kit
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-sm leading-tight" style={{ color: '#0f1419' }}>
            {project.title}
          </h3>
          <span className="tag-rosegold shrink-0 text-[0.6rem]">{project.filter}</span>
        </div>
        <p className="text-xs leading-relaxed line-clamp-2 mb-3" style={{ color: '#6b7280' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tools.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-xs"
              style={{ background: '#f8f9fa', color: '#6b7280', border: '1px solid #e5e7eb' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DesignPortfolio() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<DesignProject | null>(null);

  const filtered = filter === 'All'
    ? designProjects
    : designProjects.filter((p) => p.filter === filter);

  const open  = useCallback((p: DesignProject) => setSelected(p), []);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="design" className="section-offwhite py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-14 anim-up">
          <span className="section-label block mb-3">Brand &amp; Design</span>
          <h2 className="heading-lg mb-3">Design Work</h2>
          <div className="flex items-center gap-3">
            <div className="divider-rose" />
            <p className="text-sm" style={{ color: '#6b7280' }}>
              Brand identities, print materials, and visual campaigns for real clients.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10 anim-up">
          {designCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
              style={
                filter === cat
                  ? { background: '#c97a6b', color: '#fff', boxShadow: '0 4px 12px rgba(201,122,107,0.3)' }
                  : { background: 'transparent', color: '#1a3a52', border: '1.5px solid rgba(26,58,82,0.3)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.05} onOpen={open} />
          ))}
        </div>
      </div>

      {selected && <ImageModal project={selected} onClose={close} />}
    </section>
  );
}
