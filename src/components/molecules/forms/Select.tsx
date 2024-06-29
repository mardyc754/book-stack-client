import {
  GroupBase,
  OptionsOrGroups,
  default as ReactSelect
} from 'react-select';

interface SelectProps extends React.ComponentProps<typeof ReactSelect> {}

interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' }
] as readonly ColourOption[];

// it should be multi select
export const Select = ({ isMulti = false, ...props }: SelectProps) => {
  return (
    <ReactSelect
      {...props}
      isMulti={isMulti}
      name="colors"
      options={
        colourOptions as OptionsOrGroups<ColourOption, GroupBase<ColourOption>>
      }
      // className="basic-multi-select"
      // classNamePrefix="select"
    />
  );
};
