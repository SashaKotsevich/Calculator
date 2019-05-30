export const dateValidate = (startDate, endDate, date, type) => {
  console.log(startDate, endDate, date, type);
  date = new Date(date);
  switch (type) {
    case 1:
      return endDate > date ? date : endDate;
    case 2:
      return startDate < date ? date : startDate;
    default:
      return date;
  }
};
export const parseDateString = date => {
  return date
    .toLocaleDateString()
    .split(".")
    .reverse()
    .join("-");
};
