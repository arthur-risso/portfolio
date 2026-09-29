import { useRef } from 'react';
import { Dialog } from 'radix-ui';
import { AnimatePresence, motion } from 'motion/react';

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

export function AboutModal({ open, onClose }: AboutModalProps) {
  // When the visitor jumps to Contato from here, don't pull focus (and scroll) back to the photo.
  const leavingForContact = useRef(false);

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

            <Dialog.Content
              asChild
              forceMount
              onCloseAutoFocus={(event) => {
                if (leavingForContact.current) {
                  event.preventDefault();
                  leavingForContact.current = false;
                }
              }}
            >
              <motion.div
                className="fixed left-1/2 top-1/2 z-50 flex max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto overscroll-contain rounded-xl border border-mist/15 bg-surface shadow-xl focus:outline-none sm:flex-row sm:overflow-hidden"
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative aspect-[4/3] w-full shrink-0 sm:aspect-auto sm:w-2/5">
                  <img
                    src="/pfp-portfolio.jpeg"
                    alt="Foto de Arthur"
                    className="h-full w-full object-cover object-[center_25%]"
                  />
                </div>

                <div className="flex flex-col p-6 sm:overflow-y-auto sm:p-8">
                  <Dialog.Title className="pr-10 font-display text-xl font-bold text-ink">
                    Um pouco mais sobre mim
                  </Dialog.Title>
                  <Dialog.Description asChild>
                    <div className="mt-3 space-y-3 text-sm leading-relaxed text-mist text-pretty">
                      <p>
                        Sou Arthur. Estudo e construo para a web desde 2022 e, desde o começo,
                        fiquei dos dois lados da mesma tela: o design, que decide como algo deve
                        funcionar, e o código, que faz funcionar de verdade.
                      </p>
                      <p>
                        Trabalho sozinho, do primeiro rascunho ao site publicado. Isso costuma
                        significar menos reuniões, respostas mais rápidas, e nenhuma etapa perdida
                        na tradução entre quem desenha e quem programa — porque é a mesma pessoa.
                      </p>
                    </div>
                  </Dialog.Description>
                  <a
                    href="#contato"
                    onClick={() => {
                      leavingForContact.current = true;
                      onClose();
                    }}
                    className="mt-6 w-fit rounded text-sm font-medium text-signal underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                  >
                    Vamos conversar sobre o seu projeto
                  </a>
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
