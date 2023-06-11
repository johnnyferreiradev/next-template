enum ToasterThemes {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  quaternary = 'quaternary',
  quinary = 'quinary',
  warning = 'warning',
  success = 'success',
  failure = 'failure',
}

export const ToasterPositions = {
  'top-left': 'top-left',
  'top-center': 'top-center',
  'top-right': 'top-right',
  'bottom-left': 'bottom-left',
  'bottom-center': 'bottom-center',
  'bottom-right': 'bottom-right',
};

export interface ToasterProps {
  show: boolean;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  hideCloseButton?: boolean;
  icon?: React.ReactNode;
  theme?: keyof typeof ToasterThemes;
  time?: number;
  actions?: React.ReactNode;
  position?: keyof typeof ToasterPositions;
}
