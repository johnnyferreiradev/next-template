import { DividerProps } from './types';

import './styles.css';

export default function Divider({ className = '' }: DividerProps) {
  return <hr className={`divider ${className}`.trim()} />;
}
