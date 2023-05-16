import { useTheme as useNextTheme } from 'next-themes';

export const useTheme = () => {
  const { systemTheme, theme } = useNextTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return currentTheme;
};
