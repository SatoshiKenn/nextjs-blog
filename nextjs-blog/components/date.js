/*import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
*/

import { parseISO, isValid, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);

  // Check if the date is valid before proceeding
  if (!isValid(date)) {
    console.error('Invalid date string:', dateString);
    return null; // or handle it in another way
  }

  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
