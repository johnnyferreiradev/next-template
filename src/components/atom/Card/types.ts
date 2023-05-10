export enum CardColors {
  primary100 = 'bg-teal-200',
  primary200 = 'bg-teal-400',
  primary300 = 'bg-teal-600',
  primary400 = 'bg-teal-800',
  primary500 = 'bg-teal-950',

  secondary100 = 'bg-fuchsia-200',
  secondary200 = 'bg-fuchsia-400',
  secondary300 = 'bg-fuchsia-600',
  secondary400 = 'bg-fuchsia-800',
  secondary500 = 'bg-fuchsia-950',

  tertiary100 = 'bg-yellow-200',
  tertiary200 = 'bg-yellow-400',
  tertiary300 = 'bg-yellow-600',
  tertiary400 = 'bg-yellow-800',
  tertiary500 = 'bg-yellow-950',

  quaternary100 = 'bg-blue-200',
  quaternary200 = 'bg-blue-400',
  quaternary300 = 'bg-blue-600',
  quaternary400 = 'bg-blue-800',
  quaternary500 = 'bg-blue-950',

  quinary100 = 'bg-orange-200',
  quinary200 = 'bg-orange-400',
  quinary300 = 'bg-orange-600',
  quinary400 = 'bg-orange-800',
  quinary500 = 'bg-orange-950',

  grayscale100 = 'bg-slate-100',
  grayscale200 = 'bg-slate-200',
  grayscale300 = 'bg-slate-300',
  grayscale400 = 'bg-slate-400',
  grayscale500 = 'bg-slate-500',
  grayscale600 = 'bg-slate-600',
  grayscale700 = 'bg-slate-700',
  grayscale800 = 'bg-slate-800',
  grayscale900 = 'bg-slate-900',
  grayscale950 = 'bg-slate-950',

  success100 = 'bg-green-200',
  success200 = 'bg-green-400',
  success300 = 'bg-green-600',
  success400 = 'bg-green-800',
  success500 = 'bg-green-950',

  failure100 = 'bg-red-200',
  failure200 = 'bg-red-400',
  failure300 = 'bg-red-600',
  failure400 = 'bg-red-800',
  failure500 = 'bg-red-950',

  warning100 = 'bg-amber-200',
  warning200 = 'bg-amber-400',
  warning300 = 'bg-amber-600',
  warning400 = 'bg-amber-800',
  warning500 = 'bg-amber-950',

  darkColor = 'bg-slate-950',
  lightColor = 'bg-slate-50',

  transparent = 'bg-transparent',
}

export enum CardBorderColors {
  primary100 = 'border-teal-200',
  primary200 = 'border-teal-400',
  primary300 = 'border-teal-600',
  primary400 = 'border-teal-800',
  primary500 = 'border-teal-950',

  secondary100 = 'border-fuchsia-200',
  secondary200 = 'border-fuchsia-400',
  secondary300 = 'border-fuchsia-600',
  secondary400 = 'border-fuchsia-800',
  secondary500 = 'border-fuchsia-950',

  tertiary100 = 'border-yellow-200',
  tertiary200 = 'border-yellow-400',
  tertiary300 = 'border-yellow-600',
  tertiary400 = 'border-yellow-800',
  tertiary500 = 'border-yellow-950',

  quaternary100 = 'border-blue-200',
  quaternary200 = 'border-blue-400',
  quaternary300 = 'border-blue-600',
  quaternary400 = 'border-blue-800',
  quaternary500 = 'border-blue-950',

  quinary100 = 'border-orange-200',
  quinary200 = 'border-orange-400',
  quinary300 = 'border-orange-600',
  quinary400 = 'border-orange-800',
  quinary500 = 'border-orange-950',

  grayscale100 = 'border-slate-100',
  grayscale200 = 'border-slate-200',
  grayscale300 = 'border-slate-300',
  grayscale400 = 'border-slate-400',
  grayscale500 = 'border-slate-500',
  grayscale600 = 'border-slate-600',
  grayscale700 = 'border-slate-700',
  grayscale800 = 'border-slate-800',
  grayscale900 = 'border-slate-900',
  grayscale950 = 'border-slate-950',

  success100 = 'border-green-200',
  success200 = 'border-green-400',
  success300 = 'border-green-600',
  success400 = 'border-green-800',
  success500 = 'border-green-950',

  failure100 = 'border-red-200',
  failure200 = 'border-red-400',
  failure300 = 'border-red-600',
  failure400 = 'border-red-800',
  failure500 = 'border-red-950',

  warning100 = 'border-amber-200',
  warning200 = 'border-amber-400',
  warning300 = 'border-amber-600',
  warning400 = 'border-amber-800',
  warning500 = 'border-amber-950',

  darkColor = 'border-slate-950',
  lightColor = 'border-slate-50',
}

export enum CardBoxShadows {
  'shadow-sm' = 'shadow-sm',
  'shadow' = 'shadow',
  'shadow-md' = 'shadow-md',
  'shadow-lg' = 'shadow-lg',
  'shadow-xl' = 'shadow-xl',
  'shadow-2xl' = 'shadow-2xl',
  'shadow-inner' = 'shadow-inner',
  'shadow-none' = 'shadow-none',
}

export interface CardProps {
  color?: keyof typeof CardColors;
  boxShadow?: keyof typeof CardBoxShadows;
  withBorder?: boolean;
  borderColor?: keyof typeof CardBorderColors;
  className?: string;
  children?: React.ReactNode;
}
