import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'h-11 w-full rounded-md border border-mist/25 bg-paper px-3.5 text-sm text-ink placeholder:text-mist/70',
        'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:border-signal',
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = 'Input';
