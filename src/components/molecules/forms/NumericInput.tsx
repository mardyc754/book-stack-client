import { useState } from 'react';

type NumericInputProps = {
  label: string;
  initialValue?: number;
  onChange: (newValue: number) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export const NumericInput = ({
  label,
  initialValue = 1,
  min = 1,
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
    <div className="flex flex items-baseline justify-center space-x-4">
      <label
        htmlFor="numeric-input"
        className="mb-2 text-md font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id="numeric-input"
        {...props}
        type="number"
        value={value}
        onChange={handleChange}
        className="w-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary"
      />
    </div>
  );
};
