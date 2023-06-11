import { createContext, useState } from 'react';

import {
  Toaster,
  ToasterContextProps,
  ToasterProviderProps,
  ToasterParams,
} from './types';

const initialState: Toaster = {
  show: false,
  time: 10000,
  title: undefined,
  description: undefined,
  icon: undefined,
  theme: 'primary',
  children: undefined,
  actions: undefined,
  hideCloseButton: undefined,
  position: 'top-right',
};

export const ToasterContext = createContext<ToasterContextProps | null>(null);

export function ToasterProvider({ children }: ToasterProviderProps) {
  const [toaster, setToasterState] = useState(initialState);

  const showToaster = (toasterParams: ToasterParams) => {
    console.log('Chamou');
    setToasterState({
      show: true,
      ...toasterParams,
    });
  };

  const hideToaster = () => {
    setToasterState({
      ...initialState,
    });
  };

  return (
    <ToasterContext.Provider
      value={{
        toaster,
        showToaster,
        hideToaster,
      }}
    >
      {children}
    </ToasterContext.Provider>
  );
}
