import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectModal } from '@/components/projects/ProjectModal';
import { projects, type Project } from '@/data/projects';

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projetos" className="py-24">
      <Container>
        <p className="font-mono text-xs uppercase tracking-wider text-signal">Projetos</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
          Alguns trabalhos recentes
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpen={setSelected} />
          ))}
        </div>
      </Container>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
