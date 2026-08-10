import { Dialog } from 'radix-ui';
import { AnimatePresence, motion } from 'motion/react';

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

export function AboutModal({ open, onClose }: AboutModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && onClose()}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                className="fixed left-1/2 top-1/2 z-50 flex w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl border border-mist/15 bg-surface shadow-xl focus:outline-none sm:flex-row"
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative aspect-4/5 w-full shrink-0 sm:aspect-auto sm:w-2/5">
                  <img
                    src="/pfp-portfolio.jpeg"
                    alt="Foto de Arthur"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col p-6 sm:p-8">
                  <Dialog.Title className="font-display text-xl font-bold text-ink">
                    Um pouco mais sobre mim
                  </Dialog.Title>
                  <Dialog.Description asChild>
                    <div className="mt-3 space-y-3 text-sm leading-relaxed text-mist text-justify">
                      <p>
                        Olá mundo! Desde 2022 venho me interessando cada dia mais por esse iceberg
                        de conhecimentos chamado tecnologia. Com esse anseio, desenvolvi um grande
                        gosto pelo desenvolimento e design, sentindo que tinha um talento nessa
                        área.
                      </p>
                      <p>
                        Com isso em mente, com o passar dos anos fui desenvolvendo minhas
                        habilidades e principalmente, aprimorando e expandindo meu conhecimento
                        sobre o assunto.
                      </p>
                    </div>
                  </Dialog.Description>
                </div>

                <Dialog.Close
                  aria-label="Fechar"
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-surface/80 text-mist backdrop-blur-sm transition-colors hover:bg-paper hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
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
