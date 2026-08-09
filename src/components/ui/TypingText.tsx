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
              animation: type-${id} 4s infinite, blink-${id} 0.75s step-end infinite;
            }
            @keyframes type-${id} {
              0% { width: 0; animation-timing-function: steps(${text.length}, end); }
              30% { width: ${width}px; }
              55% { width: ${width}px; animation-timing-function: steps(${text.length}, end); }
              85% { width: 0; }
              100% { width: 0; }
            }
            @keyframes blink-${id} {
              50% { border-color: transparent; }
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
