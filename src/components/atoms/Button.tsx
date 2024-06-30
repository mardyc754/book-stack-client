import React, { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button className={cn('btn', className)} {...props} ref={ref}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export const PrimaryButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button className={cn('btn btn-primary', className)} {...props} ref={ref}>
      {children}
    </button>
  );
});

PrimaryButton.displayName = 'PrimaryButton';

export const PrimaryStretchedButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button
      className={cn('btn btn-primary w-full', className)}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
});

PrimaryStretchedButton.displayName = 'PrimaryStretchedButton';

export const ErrorButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button
      className={cn('btn btn-error text-white', className)}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
});

ErrorButton.displayName = 'ErrorButton';
