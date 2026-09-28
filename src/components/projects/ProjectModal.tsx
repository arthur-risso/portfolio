import { Dialog } from 'radix-ui';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function Chapter({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-wider text-signal">{label}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-mist text-pretty">{children}</p>
    </div>
  );
}

const linkClass =
  'inline-flex items-center gap-1 rounded text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-surface';

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Dialog.Root open={!!project} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {project && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-xl border border-mist/15 bg-surface shadow-xl focus:outline-none"
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {project.image && (
                  <div className="aspect-[16/10] border-b border-mist/15 bg-signal-soft">
                    <img
                      src={project.image}
                      alt={project.imageAlt ?? ''}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <p className="font-mono text-xs text-signal">{project.kind}</p>
                  <Dialog.Title className="mt-1 pr-10 font-display text-2xl font-bold text-ink">
                    {project.title}
                  </Dialog.Title>
                  <Dialog.Description className="sr-only">
                    Estudo de caso: problema, solução e resultado.
                  </Dialog.Description>

                  <div className="mt-6 grid gap-5">
                    <Chapter label="Problema">{project.problem}</Chapter>
                    <Chapter label="Solução">{project.solution}</Chapter>
                    {project.result && <Chapter label="Resultado">{project.result}</Chapter>}
                  </div>

                  {project.tags.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologias">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-signal-soft px-2.5 py-1 font-mono text-xs text-signal"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}

                  {(project.liveUrl || project.githubUrl) && (
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-mist/15 pt-5">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`${linkClass} text-signal`}
                        >
                          Ver site no ar
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`${linkClass} text-mist hover:text-ink`}
                        >
                          Código-fonte
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <Dialog.Close
                  aria-label="Fechar"
                  className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-surface/80 text-mist backdrop-blur-sm transition-colors hover:bg-paper hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M2 2l12 12M14 2L2 14" />
                  </svg>
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
