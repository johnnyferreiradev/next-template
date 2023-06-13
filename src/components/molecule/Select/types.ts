export interface SelectOption {
  value: string;
  label: React.ReactNode;
  color?: string;
  isFixed?: boolean;
  isDisabled?: boolean;
  many?: boolean;
}

export type SelectedOptionValue = SelectOption | readonly SelectOption[];

enum SelectThemes {
  default = 'default',
  gray = 'gray',
  shadow = 'shadow',
  light = 'light',
  dark = 'dark',
}

enum SelectSizes {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export interface SelectProps {
  isMulti?: boolean;
  value: SelectedOptionValue | null;
  options: SelectOption[];
  onChange?: (option: SelectOption) => void;
  onChangeMulti?: (options: SelectOption[]) => void;
  isSearchable?: boolean;
  noOptionsMessage?: React.ReactNode;
  loadingMessage?: React.ReactNode;
  selectKey?: string;
  placeholder?: React.ReactNode;
  disabled?: boolean;
  isOpen?: boolean;
  className?: string;
  theme?: keyof typeof SelectThemes;
  size?: keyof typeof SelectSizes;
}
