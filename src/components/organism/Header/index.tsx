import Logo from '@/components/atom/Logo';
import DarkModeSelect from '@/components/organism/DarkModeSelect';
import LanguageSelect from '@/components/organism/LanguageSelect';

import { HeaderProps } from './types';

import './styles.css';
import Link from 'next/link';

export default function Header({
  className = '',
  leftSideContent,
  rightSideContent,
}: HeaderProps) {
  return (
    <header className={`header ${className}`.trim()}>
      <div className="left-side">
        <Link href="/">
          <Logo />
        </Link>
        {leftSideContent && (
          <div className="left-side-content">{leftSideContent}</div>
        )}
      </div>
      <div className="right-side">
        {rightSideContent && (
          <div className="right-side-content">{rightSideContent}</div>
        )}
        <DarkModeSelect />
        <LanguageSelect />
      </div>
    </header>
  );
}
