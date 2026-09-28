import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        // text-base below sm: under 16px, iOS Safari zooms the page on focus.
        'h-11 w-full rounded-md border border-mist/40 bg-paper px-3.5 text-base text-ink placeholder:text-mist/80 sm:text-sm',
        'transition-colors hover:border-mist/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:border-signal',
        'aria-[invalid=true]:border-danger aria-[invalid=true]:focus-visible:ring-danger',
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = 'Input';
