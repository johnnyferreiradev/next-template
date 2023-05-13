import { IconProps, IconColors } from './types';

import './styles.css';

export default function Icon({
  children,
  color = 'darkColor',
  className = '',
}: IconProps) {
  return (
    <div className={`icon ${IconColors[color]} ${className}`.trim()}>
      {children}
    </div>
  );
}
