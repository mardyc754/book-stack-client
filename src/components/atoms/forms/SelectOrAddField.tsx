import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChangeEvent, InputHTMLAttributes, useEffect } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { ActionMeta } from 'react-select';

import { Button } from '@/components/atoms/Button';
import { Select } from '@/components/molecules/forms/Select';
import { Textfield } from '@/components/molecules/forms/Textfield';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

interface SelectOrAddFieldProps<
  AddFieldOptions extends Record<string, string>,
  ReturnedQuery
> {
  label: string;
  placeholder: string;
  addButtonText: string;
  name: string;
  selectProps: Omit<React.ComponentProps<typeof Select>, 'name' | 'onChange'>;
  addFunction: (value: AddFieldOptions) => Promise<ReturnedQuery>;
  addFunctionQueryKey: readonly string[];
  addFieldPrefix: string;
  addFieldNames: string[];
}

export const SelectOrAddField = <
  AddFieldOptions extends Record<string, string>,
  ReturnedQuery
>({
  label,
  placeholder,
  addButtonText,
  name,
  selectProps,
  addFunction,
  addFunctionQueryKey,
  addFieldPrefix,
  addFieldNames
}: SelectOrAddFieldProps<AddFieldOptions, ReturnedQuery>) => {
  const queryClient = useQueryClient();

  const {
    register,
    setValue,
    formState: { errors }
  } = useFormContext();

  useEffect(() => {
    register(name);
  }, [register, name]);

  const innerFormMethods = useForm();

  const { mutate } = useMutation({
    mutationFn: () => addFunction(innerFormMethods.watch(addFieldPrefix)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: addFunctionQueryKey });
      innerFormMethods.resetField(addFieldPrefix);
    },
    onError: (error) => {
      // toast.se
    }
  });

  const handleChange = (
    selectedOptions:
      | readonly { value: string; label: string }[]
      | ({ value: string; label: string } | null)
  ) => {
    if (!selectedOptions) return;

    setValue(
      name,
      Array.isArray(selectedOptions)
        ? selectedOptions.map(({ value }) => value)
        : (selectedOptions as { value: string; label: string }).value
    );
  };

  const handleInnerFormSubmit = innerFormMethods.handleSubmit((values, e) => {
    // console.log('>>>>>>>> values', values);
    e?.preventDefault();

    mutate(values[addFieldPrefix]);
  });

  return (
    <div className="flex flex-col">
      <p>{label}</p>
      <div className="flex flex space-x-4 items-center">
        <Select
          {...selectProps}
          onChange={handleChange}
          className="w-72"
          name={name}
        />
        <span>or</span>
        {addFieldNames.map((fieldName) => (
          <Input
            key={`${addFieldPrefix}.${fieldName}`}
            placeholder={placeholder}
            className="max-w-72"
            {...innerFormMethods.register(`${addFieldPrefix}.${fieldName}`)}
          />
        ))}
        <Button type="submit" onClick={handleInnerFormSubmit}>
          {addButtonText}
        </Button>
      </div>
    </div>
  );
};
