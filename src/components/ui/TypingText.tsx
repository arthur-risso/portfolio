import { useId, useLayoutEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TypingTextProps {
  text: string;
  className?: string;
}

export function TypingText({ text, className }: TypingTextProps) {
  const id = useId().replace(/:/g, '');
  const cls = `typing-${id}`;
  const measureRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    const measure = () => {
      if (measureRef.current) {
        setWidth(measureRef.current.scrollWidth);
      }
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(measure);
    } else {
      measure();
    }
  }, [text, className]);

  return (
    <span className="relative inline-block">
      <span
        ref={measureRef}
        className={cn('invisible absolute whitespace-nowrap', className)}
        aria-hidden="true"
      >
        {text}
      </span>

      {width !== null && (
        <span
          className={cn(
            'inline-block overflow-hidden whitespace-nowrap border-r-2 border-signal align-top',
            cls,
            className,
          )}
        >
          {text}
          <style>{`
            .${cls} {
              width: ${width}px;
              border-right-color: transparent;
              animation:
                type-${id} 1.2s steps(${text.length}, end) 0.4s both,
                blink-${id} 0.75s step-end 0s 4;
            }
            @keyframes type-${id} {
              from { width: 0; }
              to { width: ${width}px; }
            }
            @keyframes blink-${id} {
              0%, 49% { border-right-color: var(--color-signal); }
              50%, 100% { border-right-color: transparent; }
            }
            @media (prefers-reduced-motion: reduce) {
              .${cls} {
                animation: none;
                width: ${width}px;
                border-right-color: transparent;
              }
            }
          `}</style>
        </span>
      )}
    </span>
  );
}
