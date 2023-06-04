export enum CircularProgressColors {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  quaternary = 'quaternary',
  quinary = 'quinary',
  success = 'success',
  failure = 'failure',
  warning = 'warning',
  dark = 'dark',
  light = 'light',
}

export interface CircularProgressProps {
  progress: number;
  strokeWidth?: number;
  className?: string;
  color?: keyof typeof CircularProgressColors;
  children?: React.ReactNode;
}
