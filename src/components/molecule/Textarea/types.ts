enum TextareaLimitDisplayTypes {
  always = 'always',
  focused = 'focused',
}

enum TextareaThemes {
  default = 'default',
  gray = 'gray',
  noBorder = 'noBorder',
  shadow = 'shadow',
  dark = 'dark',
}

export interface TextareaProps {
  id?: string;
  label?: string;
  placeholder?: string;
  placeholderAsLabel?: boolean;
  limit?: number;
  limitDisplayType?: keyof typeof TextareaLimitDisplayTypes;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  hasError?: boolean;
  errorMessage?: string;
  theme?: keyof typeof TextareaThemes;
  disabled?: boolean;
  className?: string;
  rows?: number;
  autoResize?: boolean;
  autoFocus?: boolean;
}
