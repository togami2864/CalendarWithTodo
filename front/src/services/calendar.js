import dayjs from "dayjs";

export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format); //一致すればtrue
};

export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};

export const isFirstDay = (day) => day.date() === 1;

// export const getMonth = ({ year, month }) => {
//   return dayjs(`${year}-${month}`);
// };

// const getMonthStateCreator = (diff) => (month) => {
//   const day = getMonth(month).add(diff, "month");
//   return formatMonth(day);
// };

// export const getNextMonth = getMonthStateCreator(1);
// export const getPreviousMonth = getMonthStateCreator(-1);

// export const formatMonth = (day) => ({
//   month: day.month() + 1,
//   year: day.year(),
// });
