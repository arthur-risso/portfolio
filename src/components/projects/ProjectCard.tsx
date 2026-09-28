import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
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
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-mist/15 bg-surface transition-colors duration-200 hover:border-signal/40"
    >
      {project.image && (
        <div className="aspect-[16/10] overflow-hidden border-b border-mist/15 bg-signal-soft">
          <img
            src={project.image}
            alt={project.imageAlt ?? ''}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs text-signal">{project.kind}</p>
        <h3 className="mt-2 font-display text-xl font-bold text-ink">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mist text-pretty">{project.problem}</p>

        <button
          onClick={() => onOpen(project)}
          className="mt-auto inline-flex w-fit items-center gap-1.5 rounded pt-5 text-sm font-medium text-ink transition-colors duration-150 group-hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          Ver estudo de caso
          <ArrowRight
            size={14}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </motion.article>
  );
}
