enum ToasterThemes {
  primary = 'primary',
  warning = 'warning',
  success = 'success',
  failure = 'failure',
}

const ToasterPositions = {
  'top-left': 'top-left',
  'top-center': 'top-center',
  'top-right': 'top-right',
  'bottom-left': 'bottom-left',
  'bottom-center': 'bottom-center',
  'bottom-right': 'bottom-right',
};

export interface Toaster {
  show?: boolean;
  time?: number;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  hideCloseButton?: boolean;
  theme?: keyof typeof ToasterThemes;
  actions?: React.ReactNode;
  position?: keyof typeof ToasterPositions;
}

export interface ToasterParams extends Omit<Toaster, 'show'> {}

export interface ToasterProviderProps {
  children: React.ReactNode;
}

export interface ToasterContextProps {
  toaster: Toaster;
  showToaster: (toaster: ToasterParams) => void;
  hideToaster: () => void;
}
