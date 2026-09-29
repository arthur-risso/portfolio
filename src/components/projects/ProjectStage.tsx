import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Lock, MousePointerClick } from 'lucide-react';
import type { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

interface ProjectStageProps {
  project: Project;
  /** Faz a varredura de apresentação ao entrar na tela (só no palco do desktop). */
  tour?: boolean;
  className?: string;
}

export function ProjectStage({ project, tour = false, className }: ProjectStageProps) {
  const host = project.url.replace(/^https?:\/\//, '');
  const viewportRef = useRef<HTMLDivElement>(null);
  const [engaged, setEngaged] = useState(false);
  const [hasExplored, setHasExplored] = useState(false);
  const inView = useInView(viewportRef, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();

  // Uma única varredura: desce um pouco pela página e volta, mostrando que ela continua.
  useEffect(() => {
    const el = viewportRef.current;
    if (!tour || !inView || reduceMotion || !el || project.embeddable) return;
    const distance = Math.min(el.clientHeight * 1.4, 720);
    const controls = animate(0, distance, {
      duration: 1.6,
      delay: 0.4,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => (el.scrollTop = v),
      onComplete: () => {
        animate(distance, 0, {
          duration: 1.1,
          delay: 0.5,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (v) => (el.scrollTop = v),
        });
      },
    });
    return () => controls.stop();
  }, [tour, inView, reduceMotion, project.embeddable]);

  const engage = () => {
    setEngaged(true);
    setHasExplored(true);
    viewportRef.current?.focus({ preventScroll: true });
  };

  return (
    <figure
      className={cn(
        'overflow-hidden rounded-xl border border-mist/15 bg-surface shadow-[0_28px_60px_-30px_rgb(20_20_26/0.45)]',
        className,
      )}
      onMouseLeave={() => setEngaged(false)}
    >
      <div className="flex h-10 items-center gap-2 border-b border-mist/15 px-4">
        <Lock size={12} aria-hidden="true" className="shrink-0 text-mist" />
        <span className="truncate font-mono text-xs font-medium text-mist">{host}</span>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir ${project.name} em nova aba`}
          className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded text-mist transition-colors hover:bg-paper hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
        >
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="relative aspect-[16/10] bg-paper">
        {project.embeddable ? (
          <iframe
            src={project.url}
            title={`${project.name} rodando ao vivo`}
            loading="lazy"
            className={cn('h-full w-full', !engaged && 'pointer-events-none')}
          />
        ) : (
          <div
            ref={viewportRef}
            tabIndex={engaged ? 0 : -1}
            aria-label={`Captura da página inicial do ${project.name}`}
            onKeyDown={(e) => e.key === 'Escape' && setEngaged(false)}
            onBlur={() => setEngaged(false)}
            className={cn(
              'stage-scroll h-full w-full overscroll-contain focus-visible:outline-none',
              engaged ? 'overflow-y-auto' : 'overflow-hidden',
            )}
          >
            <img
              src={project.screenshot}
              alt={`Página inicial do ${project.name}`}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </div>
        )}

        {!engaged && (
          <button
            type="button"
            onClick={engage}
            aria-label={`Explorar a página do ${project.name} dentro da janela`}
            className="group/stage absolute inset-0 flex items-end justify-center p-4 focus-visible:outline-none"
          >
            <span
              className={cn(
                'inline-flex items-center gap-2 rounded-full bg-[#f2f2f4] px-3.5 py-2 text-xs font-medium text-[#14141a] shadow-[0_6px_18px_-6px_rgb(20_20_26/0.5)] transition-all duration-300',
                'group-focus-visible/stage:ring-2 group-focus-visible/stage:ring-signal group-focus-visible/stage:ring-offset-2',
                hasExplored
                  ? 'translate-y-1 opacity-0 group-hover/stage:translate-y-0 group-hover/stage:opacity-100 group-focus-visible/stage:translate-y-0 group-focus-visible/stage:opacity-100'
                  : 'opacity-100',
              )}
            >
              <MousePointerClick size={14} aria-hidden="true" />
              {project.embeddable ? 'Clique para usar o site aqui' : 'Clique e role pela página'}
            </span>
          </button>
        )}
      </div>
    </figure>
  );
}
