export enum IconColors {
  primary100 = 'text-[var(--primary-color-100)]',
  primary200 = 'text-[var(--primary-color-200)]',
  primary300 = 'text-[var(--primary-color-300)]',
  primary400 = 'text-[var(--primary-color-400)]',
  primary500 = 'text-[var(--primary-color-500)]',

  secondary100 = 'text-[var(--secondary-color-100)]',
  secondary200 = 'text-[var(--secondary-color-200)]',
  secondary300 = 'text-[var(--secondary-color-300)]',
  secondary400 = 'text-[var(--secondary-color-400)]',
  secondary500 = 'text-[var(--secondary-color-500)]',

  tertiary100 = 'text-[var(--tertiary-color-100)]',
  tertiary200 = 'text-[var(--tertiary-color-200)]',
  tertiary300 = 'text-[var(--tertiary-color-300)]',
  tertiary400 = 'text-[var(--tertiary-color-400)]',
  tertiary500 = 'text-[var(--tertiary-color-500)]',

  quaternary100 = 'text-[var(--quaternary-color-100)]',
  quaternary200 = 'text-[var(--quaternary-color-200)]',
  quaternary300 = 'text-[var(--quaternary-color-300)]',
  quaternary400 = 'text-[var(--quaternary-color-400)]',
  quaternary500 = 'text-[var(--quaternary-color-500)]',

  quinary100 = 'text-[var(--quinary-color-100)]',
  quinary200 = 'text-[var(--quinary-color-200)]',
  quinary300 = 'text-[var(--quinary-color-300)]',
  quinary400 = 'text-[var(--quinary-color-400)]',
  quinary500 = 'text-[var(--quinary-color-500)]',

  grayscale100 = 'text-[var(--grayscale-color-100)]',
  grayscale200 = 'text-[var(--grayscale-color-200)]',
  grayscale300 = 'text-[var(--grayscale-color-300)]',
  grayscale400 = 'text-[var(--grayscale-color-400)]',
  grayscale500 = 'text-[var(--grayscale-color-500)]',
  grayscale600 = 'text-[var(--grayscale-color-600)]',
  grayscale700 = 'text-[var(--grayscale-color-700)]',
  grayscale800 = 'text-[var(--grayscale-color-800)]',
  grayscale900 = 'text-[var(--grayscale-color-900)]',
  grayscale950 = 'text-[var(--grayscale-color-950)]',

  success100 = 'text-[var(--success-color-100)]',
  success200 = 'text-[var(--success-color-200)]',
  success300 = 'text-[var(--success-color-300)]',
  success400 = 'text-[var(--success-color-400)]',
  success500 = 'text-[var(--success-color-500)]',

  failure100 = 'text-[var(--failure-color-100)]',
  failure200 = 'text-[var(--failure-color-200)]',
  failure300 = 'text-[var(--failure-color-300)]',
  failure400 = 'text-[var(--failure-color-400)]',
  failure500 = 'text-[var(--failure-color-500)]',

  warning100 = 'text-[var(--warning-color-100)]',
  warning200 = 'text-[var(--warning-color-200)]',
  warning300 = 'text-[var(--warning-color-300)]',
  warning400 = 'text-[var(--warning-color-400)]',
  warning500 = 'text-[var(--warning-color-500)]',

  darkColor = 'text-[var(--dark-color)]',
  lightColor = 'text-[var(--light-color)]',
}

export interface IconProps {
  children: React.ReactNode;
  size?: string;
  color?: keyof typeof IconColors;
  className?: string;
}