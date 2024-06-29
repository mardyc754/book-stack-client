import { type ChangeEvent, InputHTMLAttributes, forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/ui/input';

type NumericInputProps = {
  label: string;
  initialValue?: number;
  name: string;
  min?: number;
  max?: number;
  onChange?: (newValue: number) => void;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'max' | 'min' | 'name' | 'onChange'
>;

export const FormNumericInput = forwardRef<HTMLInputElement, NumericInputProps>(
  (
    {
      label,
      name,
      initialValue = 1,
      min = 1,
      max = 10,
      id,
      onChange,
      ...props
    },
    ref
  ) => {
    const { setValue, register } = useFormContext();

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      let newValue = parseInt(e.target.value);

      if (isNaN(newValue) || newValue < min) {
        newValue = min;
      } else if (newValue > max) {
        newValue = max;
      }

      setValue(name, newValue);
      onChange?.(newValue);
    };

    return (
      <div className="flex flex items-baseline space-x-4 max-w-72 justify-between">
        <label htmlFor={id} className="mb-2 text-md font-medium text-gray-700">
          {label}
        </label>
        <Input
          {...register(name, {
            valueAsNumber: true,
            min,
            max,
            value: initialValue
          })}
          ref={ref}
          id={id}
          {...props}
          type="number"
          defaultValue={min}
          onChange={handleValueChange}
          className="w-44 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary"
        />
      </div>
    );
  }
);

FormNumericInput.displayName = 'FormNumericInput';
