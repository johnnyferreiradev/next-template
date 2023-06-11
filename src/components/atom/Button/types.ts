export enum ButtonThemes {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  quaternary = 'quaternary',
  quinary = 'quinary',
  gray = 'gray',
  success = 'success',
  failure = 'failure',
  warning = 'warning',
  dark = 'dark',
  light = 'light',

  'link-primary' = 'link-primary',
  'link-secondary' = 'link-secondary',
  'link-tertiary' = 'link-tertiary',
  'link-quaternary' = 'link-quaternary',
  'link-quinary' = 'link-quinary',
  'link-gray' = 'link-gray',
  'link-success' = 'link-success',
  'link-failure' = 'link-failure',
  'link-warning' = 'link-warning',
  'link-dark' = 'link-dark',
  'link-light' = 'link-light',

  'primary-flat' = 'primary-flat',
  'secondary-flat' = 'secondary-flat',
  'tertiary-flat' = 'tertiary-flat',
  'quaternary-flat' = 'quaternary-flat',
  'quinary-flat' = 'quinary-flat',
  'gray-flat' = 'gray-flat',
  'success-flat' = 'success-flat',
  'failure-flat' = 'failure-flat',
  'warning-flat' = 'warning-flat',
  'dark-flat' = 'dark-flat',
  'light-flat' = 'light-flat',

  'outline-primary' = 'outline-primary',
  'outline-secondary' = 'outline-secondary',
  'outline-tertiary' = 'outline-tertiary',
  'outline-quaternary' = 'outline-quaternary',
  'outline-quinary' = 'outline-quinary',
  'outline-gray' = 'outline-gray',
  'outline-success' = 'outline-success',
  'outline-failure' = 'outline-failure',
  'outline-warning' = 'outline-warning',
  'outline-dark' = 'outline-dark',
  'outline-light' = 'outline-light',

  'gray-primary' = 'gray-primary',
  'gray-secondary' = 'gray-secondary',
  'gray-tertiary' = 'gray-tertiary',
  'gray-quaternary' = 'gray-quaternary',
  'gray-quinary' = 'gray-quinary',
  'gray-success' = 'gray-success',
  'gray-failure' = 'gray-failure',
  'gray-warning' = 'gray-warning',
  'gray-dark' = 'gray-dark',
  'gray-light' = 'gray-light',
}

enum ButtonSizes {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

enum ButtonTargets {
  '_blank' = '',
  '_self' = '',
  '_parent' = '',
  '_top' = '',
  framename = 'framename',
}

export interface ButtonProps {
  theme?: keyof typeof ButtonThemes;
  roundButton?: boolean;
  fullWidth?: boolean;
  size?: keyof typeof ButtonSizes;
  badge?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  to?: string;
  href?: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  target?: keyof typeof ButtonTargets;
}
