import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GraphQLError } from 'graphql';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { user } from '@/lib/tanstack-query/queryKeys';
import { cn } from '@/lib/utils';

import { login } from '@/api/auth';

import { type LoginData, LoginResponse } from '@/schemas/auth';

import { Button, PrimaryButton } from '@/components/atoms/Button';
import { Form } from '@/components/atoms/forms/Form';
import { FormActions } from '@/components/atoms/forms/FormActions';
import { SelectOrAddField } from '@/components/atoms/forms/SelectOrAddField';
import { NumericInput } from '@/components/molecules/forms/NumericInput';
import { Select } from '@/components/molecules/forms/Select';
import { Textarea } from '@/components/molecules/forms/Textarea';
import { Textfield } from '@/components/molecules/forms/Textfield';
import { Input } from '@/components/ui/input';

export const AddBookForm = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  //   const {
  //     handleSubmit,
  //     register,
  //     formState: { errors },
  //     setError
  //   } = useForm<LoginData>({
  //     resolver: AddBookFormResolver
  //   });

  //   const mutation = useMutation<LoginResponse, GraphQLError, LoginData>({
  //     mutationFn: login,
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: user.all });
  //       return navigate('/');
  //     },
  //     onError: (error) => {
  //       setError('username', { message: error.message });
  //       return;
  //     }
  //   });

  //   const onSubmit = handleSubmit((values, e) => {
  //     e?.preventDefault();

  //     // mutation.mutate(values);
  //   });

  return (
    <form
      className={cn(
        'shadow-xl rounded-xl p-8 gap-2 max-w-md m-auto min-w-full space-y-4'
        // 'grid grid-cols-2'
      )}
      onSubmit={() => {
        // TODO: Implement form submit
      }}
    >
      <Textfield
        label="Title"
        placeholder="Title"
        className="input input-bordered"
      />
      <Textarea
        label="Description"
        placeholder="Description"
        className="input input-bordered"
      />
      {/*  */}
      {/* <div className="flex flex space-x-2">
        <Select />
        <Textfield label="Add new Author" placeholder="Add new Author" />
        <Button>Add Author</Button>
      </div> */}
      <SelectOrAddField
        selectProps={{ isMulti: true }}
        label="Author"
        placeholder="Add new Author"
        addButtonText="Add Author"
      />

      <SelectOrAddField
        selectProps={{ isMulti: false }}
        label="Publisher"
        placeholder="Add new Publisher"
        addButtonText="Add Publisher"
      />
      <Textfield
        type="date"
        label="Published Date"
        placeholder="Published Date"
        className="input input-bordered"
      />
      <Textfield
        label="ISBN"
        placeholder="ISBN"
        className="input input-bordered"
      />
      <NumericInput
        id="page-count"
        label="Page Count"
        initialValue={1}
        onChange={() => {
          // TODO
        }}
      />

      <SelectOrAddField
        selectProps={{ isMulti: true }}
        label="Categories"
        placeholder="Add new Category"
        addButtonText="Add Category"
      />

      <NumericInput
        id="quantity"
        label="Quantity"
        initialValue={1}
        onChange={() => {
          // TODO
        }}
      />
      <NumericInput
        id="price"
        label="Price"
        initialValue={1}
        onChange={() => {
          // TODO
        }}
      />
      <Textfield label="Cover Image" type="file" />
      <FormActions>
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </FormActions>
    </form>
  );
};
