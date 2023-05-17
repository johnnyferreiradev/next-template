import { CardProps, CardBoxShadows } from './types';

import './styles.css';

export default function Card({
  className = '',
  color = 'grayscale100',
  withBorder = false,
  borderColor = 'grayscale200',
  boxShadow = 'shadow-none',
  children,
}: CardProps) {
  let customClassName = 'card';
  customClassName += ` card__${color}`;
  customClassName += withBorder ? ` card-border__${borderColor}` : '';
  customClassName += ` ${CardBoxShadows[boxShadow]}`;
  customClassName += ` ${className}`;

  return <div className={customClassName.trim()}>{children}</div>;
}
