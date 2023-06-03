import { LoaderProps } from './types';

import './styles.css';

export default function Loader({ type = 'spin', className = '' }: LoaderProps) {
  let customClassName = `loader`;
  customClassName += ` loader__${type}`;
  customClassName += ` ${className}`;

  return <div className={customClassName.trim()}></div>;
}
