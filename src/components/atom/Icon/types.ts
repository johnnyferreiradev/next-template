import { Colors } from '@/types/globals';

export interface IconProps {
  children: React.ReactNode;
  size?: string;
  color?: keyof typeof Colors;
  className?: string;
}
