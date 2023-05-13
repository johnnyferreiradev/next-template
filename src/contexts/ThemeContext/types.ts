export interface Theme {
  name: string;
  colors: {
    primary100: string;
    primary200: string;
    primary300: string;
    primary400: string;
    primary500: string;

    secondary100: string;
    secondary200: string;
    secondary300: string;
    secondary400: string;
    secondary500: string;

    tertiary100: string;
    tertiary200: string;
    tertiary300: string;
    tertiary400: string;
    tertiary500: string;

    quaternary100: string;
    quaternary200: string;
    quaternary300: string;
    quaternary400: string;
    quaternary500: string;

    quinary100: string;
    quinary200: string;
    quinary300: string;
    quinary400: string;
    quinary500: string;

    grayscale100: string;
    grayscale200: string;
    grayscale300: string;
    grayscale400: string;
    grayscale500: string;
    grayscale600: string;
    grayscale700: string;
    grayscale800: string;
    grayscale900: string;
    grayscale950: string;

    success100: string;
    success200: string;
    success300: string;
    success400: string;
    success500: string;

    failure100: string;
    failure200: string;
    failure300: string;
    failure400: string;
    failure500: string;

    warning100: string;
    warning200: string;
    warning300: string;
    warning400: string;
    warning500: string;

    darkColor: string;
    lightColor: string;
  };
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
