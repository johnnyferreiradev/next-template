import { Colors } from '@/types/globals';

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
  color?: keyof typeof Colors;
  boxShadow?: keyof typeof CardBoxShadows;
  withBorder?: boolean;
  borderColor?: keyof typeof Colors;
  className?: string;
  children?: React.ReactNode;
}
