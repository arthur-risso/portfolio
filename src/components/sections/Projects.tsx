import { useState } from 'react';
import { motion } from 'motion/react';
import { SiGithub } from 'react-icons/si';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectModal } from '@/components/projects/ProjectModal';
import { projects, type Project } from '@/data/projects';
import { GITHUB_URL } from '@/data/contact';

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
  const [selected, setSelected] = useState<Project | null>(null);
  const hasProjects = projects.length > 0;

  return (
    <section id="projetos" className="py-24">
      <Container>
        <p className="font-mono text-xs uppercase tracking-wider text-signal">Projetos</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink text-balance md:text-4xl">
          {hasProjects ? 'Alguns trabalhos recentes' : 'Casos em escrita'}
        </h2>

        {hasProjects ? (
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <li key={project.id}>
                <ProjectCard project={project} index={index} onOpen={setSelected} />
              </li>
            ))}
          </ul>
        ) : (
          <CaseStudiesInProgress />
        )}
      </Container>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
