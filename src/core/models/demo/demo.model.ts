export interface Detail {
  imageUrl: string;
  title: string;
  description: string;
  timeNumber: string;
  detailId: string;
}

export interface DateItem {
  title: string;
  details: Detail[];
  dateId: string;
}

export interface YearItem {
  year: string;
  date: DateItem[];
  yearId: string;
}
