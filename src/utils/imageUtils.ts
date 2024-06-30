import coverImagePlaceholder from '@/assets/cover-image-placeholder.png';

import { CoverImage } from '@/schemas/books';

const decodeBase64Image = (data: CoverImage) => {
  return `data:${data.type};base64,${data.content}`;
};

export const getCoverImage = (image: CoverImage | null) => {
  if (!image) {
    return coverImagePlaceholder;
  }

  return image ? decodeBase64Image(image) : coverImagePlaceholder;
};
