export type Task = {
  id: number;
  title: string;
  body: string;
  isChecked: boolean;
  count: number;
};

export type Calendar = {
  year: number;
  month: number;
};

export type CalendarAction = {
  id?: number;
  title?: string;
  body?: string;
  isChecked?: boolean;
  count?: number;
  type: string;
};
