import { useState } from 'react';

import { Input } from '@/components/ui/input';

type NumericInputProps = {
  label: string;
  initialValue?: number;
  onChange: (newValue: number) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export const NumericInput = ({
  label,
  initialValue = 1,
  min = 1,
  id,
  onChange,
  ...props
}: NumericInputProps) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue >= Number(min)) {
      setValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div className="flex flex items-baseline space-x-4 max-w-72 justify-between">
      <label htmlFor={id} className="mb-2 text-md font-medium text-gray-700">
        {label}
      </label>
      <Input
        id={id}
        {...props}
        type="number"
        value={value}
        onChange={handleChange}
        className="w-44 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary"
      />
    </div>
  );
};
