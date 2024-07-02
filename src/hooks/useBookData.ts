import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { author, book, category } from '@/lib/tanstack-query/queryKeys';

import { getAllAuthors, getAllBooks, getAllCategories } from '@/api/books';

import { Author, Category } from '@/schemas/books';

export const useBookData = (minQuantity = -1) => {
  const [selectedAuthorIds, setSelectedAuthorIds] = useState<Author['id'][]>(
    []
  );
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<
    Category['id'][]
  >([]);

  const [publicationYearFrom, setPublicationYearFrom] = useState<
    number | undefined
  >(undefined);

  const [publicationYearTo, setPublicationYearTo] = useState<
    number | undefined
  >(undefined);

  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: book.filter(
      selectedCategoryIds,
      selectedAuthorIds,
      publicationYearFrom ?? 0,
      publicationYearTo ?? 9999
    ),
    queryFn: () =>
      getAllBooks(
        minQuantity,
        selectedAuthorIds.length > 0 ? selectedAuthorIds : undefined,
        selectedCategoryIds.length > 0 ? selectedCategoryIds : undefined,
        publicationYearFrom,
        publicationYearTo
      )
  });

  const { data: authors } = useQuery({
    queryKey: author.all,
    queryFn: getAllAuthors
  });

  const { data: categories } = useQuery({
    queryKey: category.all,
    queryFn: getAllCategories
  });

  return {
    setSelectedAuthorIds,
    setSelectedCategoryIds,
    setPublicationYearFrom,
    setPublicationYearTo,
    allBooks: data?.allBooks ?? [],
    authors: authors?.allAuthors ?? [],
    categories: categories?.allCategories ?? [],
    isLoading,
    isFetching,
    error
  };
};
