import { getProportionalDarkColor } from '@/utils/theme';

import {
  CardProps,
  CardColors,
  CardBorderColors,
  CardBoxShadows,
} from './types';

export default function Card({
  className = '',
  color = 'grayscale100',
  withBorder = false,
  borderColor = 'grayscale200',
  boxShadow = 'shadow-none',
  children,
}: CardProps) {
  const initialColor = CardColors[color];
  const proportionalColor =
    CardColors[getProportionalDarkColor(color) as keyof typeof CardColors];

  let customClassName = 'card';
  customClassName = ` ${initialColor} dark:${proportionalColor}`;

  customClassName += withBorder ? ` ${CardBorderColors[borderColor]}` : '';
  customClassName += ` ${CardBoxShadows[boxShadow]}`;
  customClassName += ` ${className}`;

  return <div className={customClassName.trim()}>{children}</div>;
}
