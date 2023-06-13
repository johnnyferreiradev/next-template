import Logo from '@/components/atom/Logo';
import DarkModeSelect from '@/components/organism/DarkModeSelect';

import { HeaderProps } from './types';

import './styles.css';

export default function Header({
  className = '',
  leftSideContent,
  rightSideContent,
}: HeaderProps) {
  return (
    <header className={`header ${className}`.trim()}>
      <div className="left-side">
        <Logo />
        {leftSideContent && (
          <div className="left-side-content">{leftSideContent}</div>
        )}
      </div>
      <div className="right-side">
        {rightSideContent && (
          <div className="right-side-content">{rightSideContent}</div>
        )}
        <DarkModeSelect />
        <p>Language select</p>
      </div>
    </header>
  );
}
