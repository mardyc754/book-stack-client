import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm, useFormContext } from 'react-hook-form';

import { Button } from '@/components/atoms/Button';
import { Select } from '@/components/molecules/forms/Select';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

interface SelectOrAddFieldProps<
  AddFieldOptions extends Record<string, string>,
  ReturnedQuery
> {
  label: string;
  addButtonText: string;
  name: string;
  selectProps: Omit<React.ComponentProps<typeof Select>, 'name' | 'onChange'>;
  addFunction: (value: AddFieldOptions) => Promise<ReturnedQuery>;
  addFunctionQueryKey: readonly string[];
  addFieldPrefix: string;
  addFieldData: { name: string; placeholder: string }[];
}

export const SelectOrAddField = <
  AddFieldOptions extends Record<string, string>,
  ReturnedQuery
>({
  label,
  addButtonText,
  name,
  selectProps,
  addFunction,
  addFunctionQueryKey,
  addFieldPrefix,
  addFieldData
}: SelectOrAddFieldProps<AddFieldOptions, ReturnedQuery>) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const {
    register,
    setValue,
    watch,
    formState: { errors }
  } = useFormContext();

  useEffect(() => {
    register(name);
  }, [register, name]);

  const innerFormMethods = useForm();

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

  const { mutate } = useMutation({
    mutationFn: () => addFunction(innerFormMethods.watch(addFieldPrefix)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: addFunctionQueryKey });
      addFieldData.forEach(({ name }) => {
        innerFormMethods.resetField(`${addFieldPrefix}.${name}`);
      });
      toast({
        title: 'Data added successfully. Click on dropdown to set new data'
      });
    },
    onError: () => {
      toast({
        title: 'Error when adding new data'
      });
    }
  });

  const handleInnerFormSubmit = innerFormMethods.handleSubmit((values, e) => {
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
        {addFieldData.map(({ name: fieldName, placeholder }) => (
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
