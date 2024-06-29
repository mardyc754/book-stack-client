import { forwardRef, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/lib/tailwind/cn';

import { Input } from '@/components/ui/input';

interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'name'> {
  errorLabel?: string;
  label: string;
  name: string;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ label, name, errorLabel, ...props }, ref) => {
    const { register, setValue } = useFormContext();

    useEffect(() => {
      register(name);
    }, [register, name]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setValue(name, file);
      }
    };

    return (
      <div className={cn('form-control', !errorLabel ? 'pb-5' : 'pb-0')}>
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <Input
          {...props}
          ref={ref}
          name={name}
          type="file"
          accept="image/*"
          className={cn('input input-bordered', {
            'input-error': !!errorLabel
          })}
          onChange={handleChange}
        />
        {errorLabel && <p className="label-text text-error">{errorLabel}</p>}
      </div>
    );
  }
);

FileInput.displayName = 'FileInput';
