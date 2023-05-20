import { TagProps } from './types';

import './styles.css';

export default function Tag({
  theme = 'grayscale100',
  className = '',
  children,
}: TagProps) {
  return (
    <div className={`tag tag__${theme} ${className}`.trim()}>{children}</div>
  );
}
