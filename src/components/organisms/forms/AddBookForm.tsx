import { useMutation, useQuery } from '@tanstack/react-query';
import { GraphQLError } from 'graphql';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { author, category, publisher } from '@/lib/tanstack-query/queryKeys';
import { cn } from '@/lib/utils';

import {
  addAuthor,
  addBook,
  addCategory,
  addPublisher,
  getAllAuthors,
  getAllCategories,
  getAllPublishers,
  uploadBookCoverImage
} from '@/api/books';

import {
  AddBookFormData,
  AddBookMutation,
  addBookFormResolver
} from '@/schemas/mutations';

import { PrimaryButton } from '@/components/atoms/Button';
import { FileInput } from '@/components/atoms/forms/FileInput';
import { FormActions } from '@/components/atoms/forms/FormActions';
import { SelectOrAddField } from '@/components/atoms/forms/SelectOrAddField';
import { FormNumericInput } from '@/components/molecules/forms/FormNumericInput';
import { Textarea } from '@/components/molecules/forms/Textarea';
import { Textfield } from '@/components/molecules/forms/Textfield';

import {
  generateAuthorSelectOptions,
  generateCategorySelectOptions,
  generatePublisherSelectOptions
} from '@/utils/generateSelectOptions';

export const AddBookForm = () => {
  const navigate = useNavigate();

  const methods = useForm<AddBookFormData>({
    resolver: addBookFormResolver
  });

  const { data: authors } = useQuery({
    queryKey: author.all,
    queryFn: getAllAuthors
  });

  const { data: publishers } = useQuery({
    queryKey: publisher.all,
    queryFn: getAllPublishers
  });

  const { data: categories } = useQuery({
    queryKey: category.all,
    queryFn: getAllCategories
  });

  const { mutateAsync: addBookMutation } = useMutation<
    AddBookMutation,
    GraphQLError,
    AddBookFormData
  >({
    mutationFn: () => addBook(methods.getValues()),
    onSuccess: async (data) => {
      const coverImage = methods.getValues('image');
      if (coverImage) {
        await uploadBookCoverImage(data.addBook.id, coverImage);
      }
      navigate('/stock');
    }
  });

  const onSubmit = methods.handleSubmit(async (values, e) => {
    e?.preventDefault();
    await addBookMutation(values);
  });

  return (
    <FormProvider {...methods}>
      <form
        className={cn(
          'shadow-xl rounded-xl p-8 gap-2 max-w-md m-auto min-w-full space-y-4'
        )}
        onSubmit={onSubmit}
      >
        <Textfield
          label="Title"
          placeholder="Title"
          className="input input-bordered"
          {...methods.register('title')}
        />
        <Textarea
          label="Description"
          placeholder="Description"
          className="input input-bordered"
          {...methods.register('description')}
        />
        <SelectOrAddField
          name="authorIds"
          selectProps={{
            isMulti: true,
            options: generateAuthorSelectOptions(authors?.allAuthors ?? [])
          }}
          label="Author"
          addButtonText="Add Author"
          addFieldData={[
            {
              name: 'firstName',
              placeholder: 'First name'
            },
            {
              name: 'lastName',
              placeholder: 'Last Name'
            }
          ]}
          addFunction={addAuthor}
          addFieldPrefix="author"
          addFunctionQueryKey={author.all}
        />

        <SelectOrAddField
          name="publisherId"
          selectProps={{
            isMulti: false,
            options: generatePublisherSelectOptions(
              publishers?.allPublishers ?? []
            )
          }}
          label="Publisher"
          addButtonText="Add Publisher"
          addFunction={addPublisher}
          addFunctionQueryKey={publisher.all}
          addFieldData={[
            {
              name: 'name',
              placeholder: 'Publisher name'
            }
          ]}
          addFieldPrefix="publisher"
        />
        <Textfield
          type="date"
          label="Publication Date"
          className="input input-bordered"
          {...methods.register('publicationDate')}
        />
        <Textfield
          label="ISBN"
          placeholder="ISBN"
          className="input input-bordered"
          {...methods.register('ISBN')}
        />
        <FormNumericInput
          id="page-count"
          label="Page Count"
          initialValue={1}
          name="pageCount"
        />

        <SelectOrAddField
          name="categoryIds"
          selectProps={{
            isMulti: true,
            options: generateCategorySelectOptions(
              categories?.allCategories ?? []
            )
          }}
          label="Categories"
          addButtonText="Add Category"
          addFunction={addCategory}
          addFunctionQueryKey={category.all}
          addFieldData={[
            {
              name: 'name',
              placeholder: 'Add new Category'
            }
          ]}
          addFieldPrefix="category"
        />

        <FormNumericInput
          id="quantity"
          label="Quantity"
          initialValue={1}
          name="quantity"
        />
        <Textfield id="price" label="Price" {...methods.register('price')} />
        <FileInput label="Cover Image" name="image" />
        <FormActions>
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </FormActions>
      </form>
    </FormProvider>
  );
};
