const isValidDate = (date: unknown): date is Date => {
  return date instanceof Date && !Number.isNaN(date.getTime());
};

export default isValidDate;
