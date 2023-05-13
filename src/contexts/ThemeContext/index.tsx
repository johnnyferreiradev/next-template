import { createContext, useState } from 'react';

import { Theme, ThemeProviderProps, ThemeContextProps } from './types';

const initialState: Theme = {
  name: 'default',
  colors: {
    primary100: '#1df7f4',
    primary200: '#08d9d6',
    primary300: '#06a8a5',
    primary400: '#065f5b',
    primary500: '#022c2c',

    secondary100: '#f5d0fe',
    secondary200: '#e879f9',
    secondary300: '#c026d3',
    secondary400: '#86198f',
    secondary500: '#4a044e',

    tertiary100: '#fef08a',
    tertiary200: '#facc15',
    tertiary300: '#ca8a04',
    tertiary400: '#854d0e',
    tertiary500: '#422006',

    quaternary100: '#bfdbfe',
    quaternary200: '#60a5fa',
    quaternary300: '#2563eb',
    quaternary400: '#1e40af',
    quaternary500: '#172554',

    quinary100: '#fed7aa',
    quinary200: '#fb923c',
    quinary300: '#ea580c',
    quinary400: '#9a3412',
    quinary500: '#431407',

    grayscale100: '#f1f5f9',
    grayscale200: '#e2e8f0',
    grayscale300: '#cbd5e1',
    grayscale400: '#94a3b8',
    grayscale500: '#64748b',
    grayscale600: '#475569',
    grayscale700: '#334155',
    grayscale800: '#1e293b',
    grayscale900: '#0f172a',
    grayscale950: '#020617',

    success100: '#bbf7d0',
    success200: '#4ade80',
    success300: '#16a34a',
    success400: '#166534',
    success500: '#1a2e05',

    failure100: '#fecaca',
    failure200: '#f87171',
    failure300: '#dc2626',
    failure400: '#991b1b',
    failure500: '#450a0a',

    warning100: '#fde68a',
    warning200: '#fbbf24',
    warning300: '#d97706',
    warning400: '#92400e',
    warning500: '#451a03',

    darkColor: '#01030c',
    lightColor: '#ffffff',
  },
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState(initialState);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
