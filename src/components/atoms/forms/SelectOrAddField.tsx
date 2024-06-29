import { Button } from '@/components/atoms/Button';
import { Select } from '@/components/molecules/forms/Select';
import { Textfield } from '@/components/molecules/forms/Textfield';
import { Input } from '@/components/ui/input';

interface SelectOrAddFieldProps {
  label: string;
  placeholder: string;
  addButtonText: string;
  selectProps: React.ComponentProps<typeof Select>;
}

export const SelectOrAddField = ({
  label,
  placeholder,
  addButtonText,
  selectProps,
  ...props
}: SelectOrAddFieldProps) => {
  return (
    <div className="flex flex-col">
      <p>{label}</p>
      <div className="flex flex space-x-4 items-center">
        <Select {...selectProps} className="w-72" />
        <span>or</span>
        <Input placeholder={placeholder} className="max-w-72" />
        <Button>{addButtonText}</Button>
      </div>
    </div>
  );
};
