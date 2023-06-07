enum DatePickerThemes {
  default = 'default',
  gray = 'gray',
  noBorder = 'noBorder',
  shadow = 'shadow',
  dark = 'dark',
  'gray-primary' = 'gray-primary',
}

enum DatePickerSizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export interface DatePickerProps {
  label?: string;
  id?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  actions?: React.ReactNode;
  value?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  hasError?: boolean;
  errorMessage?: string;
  theme?: keyof typeof DatePickerThemes;
  disabled?: boolean;
  rounded?: boolean;
  className?: string;
  dateFormat?: string;
  size?: keyof typeof DatePickerSizes;
}
