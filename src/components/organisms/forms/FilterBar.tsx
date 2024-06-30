import { useQueryClient } from '@tanstack/react-query';

import { book } from '@/lib/tanstack-query/queryKeys';

import { Author, Category } from '@/schemas/books';

import { NumericInput } from '@/components/molecules/forms/NumericInput';
import { Select, type SelectOption } from '@/components/molecules/forms/Select';

import {
  generateAuthorSelectOptions,
  generateCategorySelectOptions
} from '@/utils/generateSelectOptions';

interface FilterBarProps {
  authors: Author[];
  categories: Category[];
  onChangeAuthors: (authorIds: Author['id'][]) => void;
  onChangeCategories: (categoryIds: Category['id'][]) => void;
  onChangePublicationYearFrom: (publicationYear: number) => void;
  onChangePublicationYearTo: (publicationYear: number) => void;
}

export const FilterBar = ({
  authors,
  categories,
  onChangeAuthors,
  onChangeCategories,
  onChangePublicationYearFrom,
  onChangePublicationYearTo
}: FilterBarProps) => {
  //   const { data: authors } = useQuery({
  //     queryKey: author.all,
  //     queryFn: getAllAuthors
  //   });

  //   const { data: categories } = useQuery({
  //     queryKey: category.all,
  //     queryFn: getAllCategories
  //   });

  const handleAuthorChange = (selectedAuthors: readonly SelectOption[]) => {
    const authorIds = selectedAuthors.map(({ value }) => value);
    onChangeAuthors(authorIds);
  };

  const handleCategoryChange = (selectedOptions: readonly SelectOption[]) => {
    const categoryIds = selectedOptions.map(({ value }) => value);
    onChangeCategories(categoryIds);
  };

  return (
    <div className="flex space-x-4 items-center py-4">
      <Select
        className="w-72"
        isMulti
        onChange={handleAuthorChange}
        placeholder="Filter by author"
        options={generateAuthorSelectOptions(authors)}
      />
      <Select
        className="w-72"
        isMulti
        onChange={handleCategoryChange}
        placeholder="Filter by category"
        options={generateCategorySelectOptions(categories)}
      />
      <NumericInput label="From year" onChange={onChangePublicationYearFrom} />
      <NumericInput
        label="To year"
        onChange={onChangePublicationYearTo}
        initialValue={new Date().getFullYear()}
      />
    </div>
  );
};
