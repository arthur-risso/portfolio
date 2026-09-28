import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy } from 'lucide-react';
import { EMAIL } from '@/data/contact';
import { cn } from '@/lib/utils';

type CopyState = 'idle' | 'copied' | 'failed';

interface CopyEmailProps {
  /** Smaller type for use as a secondary channel next to a primary form. */
  compact?: boolean;
}

export function CopyEmail({ compact = false }: CopyEmailProps) {
  const [state, setState] = useState<CopyState>('idle');
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const handleCopy = async () => {
    window.clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(EMAIL);
      setState('copied');
      timer.current = window.setTimeout(() => setState('idle'), 2000);
    } catch {
      // Clipboard blocked (old browser or insecure context): say so instead of failing silently.
      setState('failed');
    }
  };

  return (
    <div>
      <div className="flex items-center gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className={cn(
            'min-w-0 break-all rounded font-display font-bold text-ink underline-offset-[6px] transition-colors duration-150 hover:text-signal hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2',
            compact ? 'text-base sm:text-lg' : 'text-xl sm:text-2xl lg:text-3xl',
          )}
        >
          {EMAIL}
        </a>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={state === 'copied' ? 'E-mail copiado' : 'Copiar e-mail'}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-mist/20 text-mist transition-colors duration-150 hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={state === 'copied' ? 'check' : 'copy'}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
            >
              {state === 'copied' ? <Check size={16} /> : <Copy size={16} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <p role="status" aria-live="polite" className="mt-2 min-h-5 font-mono text-xs">
        {state === 'copied' && <span className="text-signal">E-mail copiado.</span>}
        {state === 'failed' && (
          <span className="text-mist">
            Não consegui copiar automaticamente. Selecione o endereço acima ou clique nele para
            abrir seu e-mail.
          </span>
        )}
      </p>
    </div>
  );
}
