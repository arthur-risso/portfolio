import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ProjectStage } from '@/components/projects/ProjectStage';
import { projects, type Project } from '@/data/projects';
import { cn } from '@/lib/utils';

export function Projects() {
  const [activeId, setActiveId] = useState(projects[0]?.id);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const active = projects.find((p) => p.id === activeId) ?? projects[0];
  const isIndex = projects.length > 1;

  // Com mais de um projeto, o item que cruza o meio da tela vira o ativo no palco.
  useEffect(() => {
    if (!isIndex) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).dataset.id;
          if (entry.isIntersecting && id) setActiveId(id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isIndex]);

  if (!active) return null;

  return (
    <section id="projetos" className="py-24">
      <Container>
        <div className="max-w-xl">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Projetos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist">
            Nada de mockup: tudo aqui está publicado. Explore a página na janela ou abra o site de
            verdade.
          </p>
        </div>

        <div
          className={cn(
            'mt-14 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16',
            !isIndex && 'lg:items-center',
          )}
        >
          <ol className="flex flex-col">
            {projects.map((project, index) => (
              <li
                key={project.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                data-id={project.id}
                onMouseEnter={() => setActiveId(project.id)}
                onFocus={() => setActiveId(project.id)}
                className={cn(
                  'border-t border-mist/15 py-8 first:border-t-0 first:pt-0',
                  isIndex && 'lg:flex lg:min-h-[62vh] lg:items-center',
                )}
              >
                <ProjectEntry project={project} isActive={project.id === active.id} />
                <ProjectStage project={project} className="mt-8 lg:hidden" />
              </li>
            ))}
          </ol>

          <div className="hidden lg:block">
            <div className="sticky top-24">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(6px)' }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectStage project={active} tour />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProjectEntry({ project, isActive }: { project: Project; isActive: boolean }) {
  return (
    <div>
      <h3
        className={cn(
          'font-display text-3xl font-bold tracking-tight transition-colors duration-300 md:text-4xl',
          isActive ? 'text-ink' : 'text-mist',
        )}
      >
        {project.name}
      </h3>

      <p className="mt-4 max-w-prose text-base leading-relaxed text-mist">{project.summary}</p>

      {project.stack.length > 0 && (
        <p className="mt-5 text-sm text-mist">
          <span className="sr-only">Feito com: </span>
          {project.stack.join(' · ')}
        </p>
      )}

      <div className="mt-7 flex flex-wrap gap-3">
        <Button asChild>
          <a href={project.url} target="_blank" rel="noreferrer">
            Abrir no ar
            <ArrowUpRight size={16} aria-hidden="true" className="ml-1.5" />
          </a>
        </Button>
        {project.githubUrl && (
          <Button variant="secondary" asChild>
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <SiGithub size={15} aria-hidden="true" className="mr-2" />
              Código
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
