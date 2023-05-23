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
  theme?: string;
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
