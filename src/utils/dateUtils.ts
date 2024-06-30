/**
 * Converts a year to a date string
 * @param year the year to convert
 * @returns converted date string in the format yyyy-mm-dd
 */
export const yearToDate = (year: number) => {
  // Ensure the year is a valid number
  if (isNaN(year)) {
    throw new Error('Invalid year');
  }

  // Create a new Date object for January 1st of the given year
  const date = new Date(year, 0, 1);

  // Format the date to yyyy-mm-dd
  const formattedDate = date.toISOString().split('T')[0];

  return formattedDate;
};
