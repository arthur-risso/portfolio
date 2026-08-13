import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy } from 'lucide-react';

const EMAIL = 'arthur.rprodovalho@gmail.com';

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard indisponível (navegador antigo ou contexto não seguro) — falha silenciosa é aceitável aqui
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group inline-flex flex-wrap items-center gap-3 rounded font-display text-2xl font-bold text-ink transition-colors hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 sm:text-3xl"
    >
      {EMAIL}
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-mist/20 text-mist transition-colors group-hover:border-signal group-hover:text-signal sm:h-10 sm:w-10">
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="check"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
            >
              <Check size={16} />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
            >
              <Copy size={16} />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? 'E-mail copiado' : ''}
      </span>
    </button>
  );
}
