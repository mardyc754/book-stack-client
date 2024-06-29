import { Author, Category, Publisher } from '@/schemas/books';

export const generateAuthorSelectOptions = (authors: Author[]) => {
  const options = [];
  for (const author of authors) {
    options.push({
      value: author.id,
      label: `${author.firstName} ${author.lastName}`
    });
  }

  return options;
};

export const generateCategorySelectOptions = (categories: Category[]) => {
  const options = [];
  for (const category of categories) {
    options.push({
      value: category.id,
      label: category.name
    });
  }
  return options;
};

export const generatePublisherSelectOptions = (publishers: Publisher[]) => {
  const options = [];
  for (const publisher of publishers) {
    options.push({
      value: publisher.id,
      label: publisher.name
    });
  }
  return options;
};
