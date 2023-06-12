export enum ModalWidths {
  'max-w-xs' = 'max-w-xs',
  'max-w-sm' = 'max-w-sm',
  'max-w-md' = 'max-w-md',
  'max-w-lg' = 'max-w-lg',
  'max-w-xl' = 'max-w-xl',
  'max-w-2xl' = 'max-w-2xl',
  'max-w-3xl' = 'max-w-3xl',
  'max-w-4xl' = 'max-w-4xl',
  'max-w-5xl' = 'max-w-5xl',
  'max-w-6xl' = 'max-w-6xl',
  'max-w-7xl' = 'max-w-7xl',
  'max-w-full' = 'max-w-full',
  'max-w-min' = 'max-w-min',
  'max-w-max' = 'max-w-max',
  'max-w-fit' = 'max-w-fit',
  'max-w-prose' = 'max-w-prose',
  'max-w-screen-sm' = 'max-w-screen-sm',
  'max-w-screen-md' = 'max-w-screen-md',
  'max-w-screen-lg' = 'max-w-screen-lg',
  'max-w-screen-xl' = 'max-w-screen-xl',
  'max-w-screen-2xl' = 'max-w-screen-2xl',
}

export interface ModalProps {
  width?: keyof typeof ModalWidths;
  content?: React.ReactNode;
  disableBackgroundClick?: boolean;
  onAfterClose?: () => void;
  hideCloseButton?: boolean;
  title?: string;
  subtitle?: string;
  disableCloseWithEsc?: boolean;
}
