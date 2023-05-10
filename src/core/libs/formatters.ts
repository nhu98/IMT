export const cardNumberFormatter = (value: string): string => {
  return value
    .replace(/\s?/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim();
};

// Date => mmDDyyyy
export const mmDDyyyyFormatter = (value: Date): string => {
  if (!value) {
    return '';
  }

  let dd: string | number = value.getDate();
  let mm: string | number = value.getMonth() + 1;
  const yyyy: number = value.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  return `${mm}/${dd}/${yyyy}`;
};

export const currencyFormatter = (value: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(value);
};
