import { forwardRef } from 'react';

import { cn } from '@/lib/tailwind/cn';

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorLabel?: string;
}

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
  ({ label, errorLabel, type, placeholder, ...props }, ref) => {
    return (
      <div className={cn('form-control', !errorLabel ? 'pb-5' : 'pb-0')}>
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          {...props}
          ref={ref}
          type={type}
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

Textfield.displayName = 'Textfield';
