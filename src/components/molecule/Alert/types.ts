enum AlertThemes {
  warning = 'warning',
  success = 'success',
  failure = 'failure',
}

export interface AlertProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  theme?: keyof typeof AlertThemes;
}
