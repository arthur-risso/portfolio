import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ProjectStage } from '@/components/projects/ProjectStage';
import { projects, type Project } from '@/data/projects';
import { GITHUB_URL } from '@/data/contact';
import { cn } from '@/lib/utils';

/** Shown until real case studies land in src/data/projects.ts. Drawn as an unfinished blueprint sheet. */
function CaseStudiesInProgress() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mt-12 grid overflow-hidden rounded-xl border border-mist/15 bg-surface md:grid-cols-[1fr_1.1fr]"
    >
      <div className="flex flex-col p-6 sm:p-8">
        <h3 className="font-display text-2xl font-bold text-ink text-balance">
          Estudos de caso em produção.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-mist text-pretty">
          Estou escrevendo com calma a história dos meus trabalhos recentes: o problema de cada
          cliente, as decisões de design e código, e o que mudou depois. Prefiro mostrar poucos
          projetos bem contados a uma vitrine genérica.
        </p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-mist text-pretty">
          Enquanto isso, o código está aberto no GitHub, e posso mostrar exemplos numa conversa.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button asChild>
            <a href="#contato">Pedir exemplos de trabalhos</a>
          </Button>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded text-sm font-medium text-mist underline-offset-4 transition-colors duration-150 hover:text-ink hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <SiGithub size={16} aria-hidden="true" />
            Ver meu GitHub
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="relative min-h-56 border-t border-mist/15 p-6 [background-image:repeating-linear-gradient(to_right,color-mix(in_srgb,var(--color-signal)_7%,transparent)_0_1px,transparent_1px_24px),repeating-linear-gradient(to_bottom,color-mix(in_srgb,var(--color-signal)_7%,transparent)_0_1px,transparent_1px_24px)] sm:p-8 md:border-l md:border-t-0"
      >
        <div className="relative h-full min-h-44 rounded-sm border border-dashed border-signal/40">
          <svg className="absolute inset-0 h-full w-full text-signal/20">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeDasharray="4 4" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeDasharray="4 4" />
          </svg>

          <dl className="absolute bottom-3 right-3 grid grid-cols-[auto_auto] border border-signal/40 bg-surface font-mono text-xs">
            <dt className="border-b border-r border-signal/40 px-2 py-1 text-mist">folha</dt>
            <dd className="border-b border-signal/40 px-2 py-1 text-ink">estudos de caso</dd>
            <dt className="border-r border-signal/40 px-2 py-1 text-mist">status</dt>
            <dd className="px-2 py-1 text-signal">em produção</dd>
          </dl>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const hasProjects = projects.length > 0;

  return (
    <section id="projetos" className="py-24">
      <Container>
        <div className="max-w-xl">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink text-balance md:text-5xl">
            {hasProjects ? 'Projetos' : 'Casos em escrita'}
          </h2>
          {hasProjects && (
            <p className="mt-4 text-base leading-relaxed text-mist text-pretty">
              Nada de mockup: tudo aqui está publicado. Explore a página na janela ou abra o site de
              verdade.
            </p>
          )}
        </div>

        {hasProjects ? <ProjectsShowcase /> : <CaseStudiesInProgress />}
      </Container>
    </section>
  );
}

function ProjectsShowcase() {
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

      <p className="mt-4 max-w-prose text-base leading-relaxed text-mist text-pretty">
        {project.summary}
      </p>

      {(project.problem || project.solution || project.result) && (
        <dl className="mt-6 grid max-w-prose gap-4 text-sm leading-relaxed">
          {[
            ['Problema', project.problem],
            ['Solução', project.solution],
            ['Resultado', project.result],
          ].map(
            ([label, text]) =>
              text && (
                <div key={label}>
                  <dt className="font-medium text-ink">{label}</dt>
                  <dd className="mt-1 text-mist text-pretty">{text}</dd>
                </div>
              ),
          )}
        </dl>
      )}

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
