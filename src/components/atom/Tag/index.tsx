import { TagProps } from './types';

import './styles.css';

export default function Tag({
  theme = 'default',
  className = '',
  children,
}: TagProps) {
  return <div className={`tag ${theme} ${className}`.trim()}>{children}</div>;
}
