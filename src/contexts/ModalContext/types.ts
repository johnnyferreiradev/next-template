import { ModalWidths } from '@/components/organism/Modal/types';

export interface Modal {
  show?: boolean;
  width?: keyof typeof ModalWidths;
  content?: React.ReactNode;
  disableBackgroundClick?: boolean;
  onAfterClose?: () => void;
  hideCloseButton?: boolean;
  title?: string;
  subtitle?: string;
  disableCloseWithEsc?: boolean;
}

export interface ModalParams extends Omit<Modal, 'show'> {}

export interface ModalProviderProps {
  children: React.ReactNode;
}

export interface ModalContextProps {
  modal: Modal;
  showModal: (modal: ModalParams) => void;
  closeModal: () => void;
}
