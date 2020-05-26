import dayjs from "dayjs";

export const isSameDay = (d1: dayjs.Dayjs, d2: dayjs.Dayjs): boolean => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format); //一致すればtrue
};

export const isSameMonth = (m1: dayjs.Dayjs, m2: dayjs.Dayjs): boolean => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};

export const isFirstDay = (day: dayjs.Dayjs): boolean => day.date() === 1;
