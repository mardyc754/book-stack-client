import { default as ReactSelect } from 'react-select';

export type SelectOption = {
  label: string;
  value: string;
};

interface SelectProps
  extends Omit<React.ComponentProps<typeof ReactSelect>, 'onChange'> {
  onChange: (value: readonly SelectOption[] | SelectOption | null) => void;
}

export const Select = ({ onChange, ...props }: SelectProps) => {
  return (
    <ReactSelect
      {...props}
      onChange={(newValue: unknown) => {
        onChange(newValue as readonly SelectOption[] | SelectOption | null);
      }}
    />
  );
};
