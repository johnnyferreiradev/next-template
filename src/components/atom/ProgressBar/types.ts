export enum ProgressBarColors {
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

export interface ProgressBarProps {
  progress: number;
  className?: string;
  color?: keyof typeof ProgressBarColors;
}
