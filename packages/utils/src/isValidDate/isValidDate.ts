import { isDate } from '../isDate';

const isValidDate = (date: unknown): date is Date => {
  return isDate(date) && !Number.isNaN(date.getTime());
};

export default isValidDate;
