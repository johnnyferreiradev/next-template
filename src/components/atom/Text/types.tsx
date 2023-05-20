enum TextElements {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
  pre = 'pre',
  small = 'small',
  span = 'span',
  caption = 'caption',
}

export enum TextWeights {
  thin = 'font-thin',
  extralight = 'font-extralight',
  light = 'font-light',
  normal = 'font-normal',
  medium = 'font-medium',
  semibold = 'font-semibold',
  bold = 'font-bold',
  extrabold = 'font-extrabold',
  black = 'font-black',
}

export enum TextColors {
  primary100 = 'primary100',
  primary200 = 'primary200',
  primary300 = 'primary300',
  primary400 = 'primary400',
  primary500 = 'primary500',

  secondary100 = 'secondary100',
  secondary200 = 'secondary200',
  secondary300 = 'secondary300',
  secondary400 = 'secondary400',
  secondary500 = 'secondary500',

  tertiary100 = 'tertiary100',
  tertiary200 = 'tertiary200',
  tertiary300 = 'tertiary300',
  tertiary400 = 'tertiary400',
  tertiary500 = 'tertiary500',

  quaternary100 = 'quaternary100',
  quaternary200 = 'quaternary200',
  quaternary300 = 'quaternary300',
  quaternary400 = 'quaternary400',
  quaternary500 = 'quaternary500',

  quinary100 = 'quinary100',
  quinary200 = 'quinary200',
  quinary300 = 'quinary300',
  quinary400 = 'quinary400',
  quinary500 = 'quinary500',

  grayscale100 = 'grayscale100',
  grayscale200 = 'grayscale200',
  grayscale300 = 'grayscale300',
  grayscale400 = 'grayscale400',
  grayscale500 = 'grayscale500',
  grayscale600 = 'grayscale600',
  grayscale700 = 'grayscale700',
  grayscale800 = 'grayscale800',
  grayscale900 = 'grayscale900',
  grayscale950 = 'grayscale950',

  success100 = 'success100',
  success200 = 'success200',
  success300 = 'success300',
  success400 = 'success400',
  success500 = 'success500',

  failure100 = 'failure100',
  failure200 = 'failure200',
  failure300 = 'failure300',
  failure400 = 'failure400',
  failure500 = 'failure500',

  warning100 = 'warning100',
  warning200 = 'warning200',
  warning300 = 'warning300',
  warning400 = 'warning400',
  warning500 = 'warning500',

  darkColor = 'darkColor',
  lightColor = 'lightColor',
}

export enum TextAligns {
  left = 'text-left',
  center = 'text-center',
  right = 'text-right',
  justify = 'text-justify',
  start = 'text-start',
  end = 'text-end',
}

export enum TextTansforms {
  capitalize = 'capitalize',
  lowercase = 'lowercase',
  uppercase = 'uppercase',
  'normal-case' = '',
}

export enum TextDecorations {
  overline = 'overline',
  'line-through' = 'line-through',
  underline = 'underline',
  'no-underline' = '',
}

export enum TextSizes {
  'xs' = 'text-xs',
  'sm' = 'text-sm',
  'base' = 'text-base',
  'lg' = 'text-lg',
  'xl' = 'text-xl',
  '2xl' = 'text-2xl',
  '3xl' = 'text-3xl',
  '4xl	' = 'text-4xl',
  '5xl' = 'text-5xl',
  '6xl' = 'text-6xl',
  '7xl' = 'text-7xl',
  '8xl	' = 'text-8xl',
  '9xl' = 'text-9xl',
}

export interface TextProps {
  children: React.ReactNode;
  element?: keyof typeof TextElements;
  className?: string;
  weight?: keyof typeof TextWeights;
  color?: keyof typeof TextColors;
  align?: keyof typeof TextAligns;
  italic?: boolean;
  transform?: keyof typeof TextTansforms;
  decoration?: keyof typeof TextDecorations;
  size?: keyof typeof TextSizes;
}
