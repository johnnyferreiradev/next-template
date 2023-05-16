const invertedColorList = {
  primary100: 'primary100',
  primary200: 'primary200',
  primary300: 'primary300',
  primary400: 'primary400',
  primary500: 'primary500',

  secondary100: 'secondary100',
  secondary200: 'secondary200',
  secondary300: 'secondary300',
  secondary400: 'secondary400',
  secondary500: 'secondary500',

  tertiary100: 'tertiary100',
  tertiary200: 'tertiary200',
  tertiary300: 'tertiary300',
  tertiary400: 'tertiary400',
  tertiary500: 'tertiary500',

  quaternary100: 'quaternary100',
  quaternary200: 'quaternary200',
  quaternary300: 'quaternary300',
  quaternary400: 'quaternary400',
  quaternary500: 'quaternary500',

  quinary100: 'quinary100',
  quinary200: 'quinary200',
  quinary300: 'quinary300',
  quinary400: 'quinary400',
  quinary500: 'quinary500',

  grayscale100: 'grayscale950',
  grayscale200: 'grayscale900',
  grayscale300: 'grayscale800',
  grayscale400: 'grayscale700',
  grayscale500: 'grayscale600',
  grayscale600: 'grayscale500',
  grayscale700: 'grayscale400',
  grayscale800: 'grayscale300',
  grayscale900: 'grayscale200',
  grayscale950: 'grayscale100',

  success100: 'success100',
  success200: 'success200',
  success300: 'success300',
  success400: 'success400',
  success500: 'success500',

  failure100: 'failure100',
  failure200: 'failure200',
  failure300: 'failure300',
  failure400: 'failure400',
  failure500: 'failure500',

  warning100: 'warning100',
  warning200: 'warning200',
  warning300: 'warning300',
  warning400: 'warning400',
  warning500: 'warning500',

  darkColor: 'lightColor',
  lightColor: 'darkColor',

  transparent: 'transparent',
};

export const getProportionalDarkColor = (
  colorName: keyof typeof invertedColorList,
) => {
  return invertedColorList[colorName as keyof typeof invertedColorList];
};
