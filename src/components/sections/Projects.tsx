import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Container } from '@/components/layout/Container';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectModal } from '@/components/projects/ProjectModal';
import { projects, type Project } from '@/data/projects';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="projetos" className="py-24">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-signal">Projetos</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
              Alguns trabalhos recentes
            </h2>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              onClick={scrollPrev}
              aria-label="Projeto anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-mist/20 text-ink transition-colors hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Próximo projeto"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-mist/20 text-ink transition-colors hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          className="mt-12 overflow-hidden"
          ref={emblaRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Carrossel de projetos"
        >
          <div className="-ml-6 flex">
            {projects.map((project, index) => (
              <div
                key={project.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`Projeto ${index + 1} de ${projects.length}`}
                className="min-w-0 flex-[0_0_85%] pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <ProjectCard project={project} index={index} onOpen={setSelected} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2 sm:hidden">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Ir para projeto ${index + 1}`}
              className={cn(
                'h-1.5 rounded-full transition-all',
                index === selectedIndex ? 'w-6 bg-signal' : 'w-1.5 bg-mist/30',
              )}
            />
          ))}
        </div>
      </Container>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
