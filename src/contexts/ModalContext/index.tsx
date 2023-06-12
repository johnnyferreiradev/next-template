import { createContext, useState } from 'react';

import {
  Modal,
  ModalContextProps,
  ModalProviderProps,
  ModalParams,
} from './types';

const initialState: Modal = {
  show: false,
  width: 'max-w-2xl',
  content: undefined,
  disableBackgroundClick: false,
  onAfterClose: () => undefined,
  hideCloseButton: false,
  title: undefined,
  subtitle: undefined,
  disableCloseWithEsc: false,
};

export const ModalContext = createContext<ModalContextProps | null>(null);

export function ModalProvider({ children }: ModalProviderProps) {
  const [modal, setModalState] = useState(initialState);

  const showModal = (modalParams: ModalParams) => {
    setModalState({
      show: true,
      ...modalParams,
    });
  };

  const closeModal = () => {
    setModalState({
      ...initialState,
    });
  };

  return (
    <ModalContext.Provider
      value={{
        modal,
        showModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
