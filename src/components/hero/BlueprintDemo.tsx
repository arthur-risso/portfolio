import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { Croissant } from 'lucide-react';
import { cn } from '@/lib/utils';

type Stage = 'sketch' | 'built';

const STAGES: { value: Stage; label: string }[] = [
  { value: 'sketch', label: 'Esboço' },
  { value: 'built', label: 'Pronto' },
];

/** A blueprint box: dashed navy outline with a mono label notched into its top edge. */
function Spec({
  label,
  className,
  children,
}: {
  label?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn('relative rounded-sm border border-dashed border-signal/50', className)}>
      {label && (
        <span className="absolute -top-2 left-2 bg-surface px-1 font-mono text-xs leading-none text-signal">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}

function Bar({ className }: { className?: string }) {
  return <span className={cn('block h-2 rounded-full bg-signal/15', className)} />;
}

function SketchLayer() {
  return (
    <div className="flex h-full flex-col gap-5 p-5">
      <div className="flex items-center justify-between">
        <Spec label="logo" className="h-7 w-20" />
        <div className="flex gap-3">
          <Bar className="w-8" />
          <Bar className="w-8" />
          <Bar className="w-8" />
        </div>
      </div>

      <div className="grid flex-1 grid-cols-[1.15fr_1fr] gap-4">
        <div className="flex flex-col gap-4 pt-2">
          <Spec label="título" className="flex flex-col gap-2 px-2.5 pb-2.5 pt-4">
            <Bar className="h-3 w-full bg-signal/25" />
            <Bar className="h-3 w-4/5 bg-signal/25" />
          </Spec>
          <div className="flex flex-col gap-1.5 px-1">
            <Bar className="w-full" />
            <Bar className="w-11/12" />
            <Bar className="w-2/3" />
          </div>
          <Spec label="ação" className="h-9 w-28" />
        </div>

        <Spec label="foto" className="overflow-hidden">
          <svg className="absolute inset-0 h-full w-full text-signal/30" aria-hidden="true">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeDasharray="4 4" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeDasharray="4 4" />
          </svg>
        </Spec>
      </div>
    </div>
  );
}

function BuiltLayer() {
  return (
    <div className="flex h-full flex-col gap-5 bg-surface p-5">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-bold text-ink">
          Aurora<span className="text-signal">.</span>
        </span>
        <div className="flex gap-3 text-xs text-mist">
          <span>Pães</span>
          <span>Doces</span>
          <span>Contato</span>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-[1.15fr_1fr] gap-4">
        <div className="flex flex-col gap-3 pt-2">
          <p className="font-display text-lg font-bold leading-tight text-ink text-balance">
            Pão de verdade, saindo do forno às 6h.
          </p>
          <p className="text-xs leading-relaxed text-mist">
            Fermentação natural e encomendas para a semana, direto pelo site.
          </p>
          <span className="mt-auto inline-flex h-9 w-fit items-center rounded-md bg-signal px-3 font-display text-xs font-medium text-paper">
            Fazer encomenda
          </span>
        </div>

        <div className="flex items-center justify-center rounded-md bg-signal-soft text-signal">
          <Croissant size={40} strokeWidth={1.25} />
        </div>
      </div>
    </div>
  );
}

export function BlueprintDemo() {
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState<Stage>(reduceMotion ? 'built' : 'sketch');
  const [touched, setTouched] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  // On a short mobile viewport the hero can land partly below the fold, so the reveal
  // waits for the demo to actually be seen rather than firing on a timer from mount.
  const inView = useInView(rootRef, { once: true, amount: 0.6 });

  // Draw the finished version once it's in view; the visitor can flip back afterwards.
  useEffect(() => {
    if (reduceMotion || touched || !inView) return;
    const timer = window.setTimeout(() => setStage('built'), 900);
    return () => window.clearTimeout(timer);
  }, [reduceMotion, touched, inView]);

  const select = (next: Stage) => {
    setTouched(true);
    setStage(next);
  };

  const isBuilt = stage === 'built';
  const duration = reduceMotion ? 0 : 0.9;

  return (
    <div ref={rootRef} className="rounded-xl border border-mist/15 bg-surface">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-mist/15 px-5 py-3">
        <p className="font-mono text-xs text-mist">// exemplo: do esboço ao site no ar</p>

        <div
          role="group"
          aria-label="Etapa do exemplo"
          className="flex rounded-full border border-mist/20 p-0.5"
        >
          {STAGES.map((option) => {
            const active = stage === option.value;
            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={active}
                onClick={() => select(option.value)}
                className={cn(
                  'relative h-8 rounded-full px-3.5 text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
                  active ? 'text-paper' : 'text-mist hover:text-ink',
                )}
              >
                {active && (
                  <motion.span
                    layoutId="blueprint-stage"
                    className="absolute inset-0 rounded-full bg-signal"
                    transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                  />
                )}
                <span className="relative">{option.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Taller below lg, where the demo column is narrow (full width on mobile, ~1fr of
          a 1.1fr/1fr split at md): the built layer's text needs the extra height to avoid
          clipping. Reverts to 4/3 once the column has room to spare. */}
      <div
        className="relative aspect-[5/4] overflow-hidden rounded-b-xl lg:aspect-[4/3]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 [background-image:repeating-linear-gradient(to_right,color-mix(in_srgb,var(--color-signal)_8%,transparent)_0_1px,transparent_1px_24px),repeating-linear-gradient(to_bottom,color-mix(in_srgb,var(--color-signal)_8%,transparent)_0_1px,transparent_1px_24px)]" />

        <div className="absolute inset-0">
          <SketchLayer />
        </div>

        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{ clipPath: isBuilt ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)' }}
          transition={{ duration, ease: [0.65, 0, 0.35, 1] }}
        >
          <BuiltLayer />
        </motion.div>

        {/* The pen: a navy rule that rides the edge of the reveal. */}
        <motion.span
          className="absolute inset-y-0 w-px bg-signal"
          initial={false}
          animate={{ left: isBuilt ? '100%' : '0%', opacity: [0, 1, 1, 0] }}
          transition={{ duration, ease: [0.65, 0, 0.35, 1], times: [0, 0.1, 0.9, 1] }}
        />
      </div>

      <p className="sr-only" aria-live="polite">
        {isBuilt
          ? 'Exemplo pronto: página de uma padaria com título, texto, botão de encomenda e foto.'
          : 'Exemplo em esboço: caixas tracejadas marcando logo, título, texto, botão e foto.'}
      </p>
    </div>
  );
}
