import { Mask } from 'react-text-mask';

enum InputLimitDisplayTypes {
  always = 'always',
  focused = 'focused',
}

enum InputTypes {
  email = 'email',
  number = 'number',
  password = 'password',
  text = 'text',
}

const InputThemes = {
  default: 'default',
  gray: 'gray',
  noBorder: 'noBorder',
  shadow: 'shadow',
  dark: 'dark',
  'gray-primary': 'gray-primary',
};

export interface InputProps {
  id?: string;
  icon?: React.ReactNode;
  label?: string;
  placeholder?: string;
  placeholderAsLabel?: boolean;
  limit?: number;
  limitDisplayType?: keyof typeof InputLimitDisplayTypes;
  actions?: React.ReactNode;
  type?: keyof typeof InputTypes;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  errorMessage?: string;
  theme?: keyof typeof InputThemes;
  disabled?: boolean;
  rounded?: boolean;
  className?: string;
  mask?: Mask;
}
