import { motion } from 'motion/react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-xl border border-mist/15 bg-surface p-6 transition-colors hover:border-signal/40"
    >
      <span className="font-mono text-xs text-mist">{String(index + 1).padStart(2, '0')}</span>

      <h3 className="mt-3 font-display text-xl font-bold text-ink">{project.title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-mist">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-xs text-signal">
            #{tag}
          </span>
        ))}
      </div>

      <button
        onClick={() => onOpen(project)}
        className="mt-5 inline-flex items-center gap-1 rounded text-sm font-medium text-ink transition-colors group-hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
      >
        Ver detalhes
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </button>
    </motion.article>
  );
}
