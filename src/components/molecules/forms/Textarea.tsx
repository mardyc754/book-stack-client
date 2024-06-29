import { forwardRef } from 'react';

import { cn } from '@/lib/tailwind/cn';

import { Textarea as ShadcnTextarea } from '@/components/ui/textarea';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  errorLabel?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, errorLabel, placeholder, ...props }, ref) => {
    return (
      <div className={cn('form-control', !errorLabel ? 'pb-5' : 'pb-0')}>
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <ShadcnTextarea
          {...props}
          ref={ref}
          placeholder={placeholder}
          className={cn('input input-bordered', {
            'input-error': !!errorLabel
          })}
        />
        {errorLabel && <p className="label-text text-error">{errorLabel}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textfield';
