import { default as ReactSelect } from 'react-select';

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectOnChangeFunction = (
  selectedOptions: readonly SelectOption[] | SelectOption | null
) => void;
export interface SelectProps
  extends Omit<React.ComponentProps<typeof ReactSelect>, 'onChange'> {
  onChange: SelectOnChangeFunction;
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
