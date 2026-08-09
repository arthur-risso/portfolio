import { Dialog } from 'radix-ui';
import { AnimatePresence, motion } from 'motion/react';
import type { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

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
                className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border border-mist/15 bg-surface p-6 shadow-xl focus:outline-none"
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Dialog.Title className="font-display text-2xl font-bold text-ink">
                  {project.title}
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-sm leading-relaxed text-mist">
                  {project.fullDescription}
                </Dialog.Description>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-signal-soft px-2.5 py-1 font-mono text-xs text-signal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-signal hover:underline"
                    >
                      Ver ao vivo ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-mist hover:text-ink"
                    >
                      Código-fonte ↗
                    </a>
                  )}
                </div>

                <Dialog.Close
                  aria-label="Fechar"
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-mist transition-colors hover:bg-paper hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
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
