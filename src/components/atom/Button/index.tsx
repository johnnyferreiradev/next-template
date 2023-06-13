import { ButtonProps } from './types';

import Link from 'next/link';

import './styles.css';

function ButtonType({
  onClick,
  to,
  href,
  className = '',
  disabled = false,
  children,
  target = '_self',
}: ButtonProps) {
  if (to) {
    return (
      <Link href={to} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} className={className}>
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={className}
      >
        {children}
      </button>
    );
  }

  return (
    <button type="submit" disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default function Button(props: ButtonProps) {
  const {
    size = 'md',
    badge = '',
    className,
    disabled = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    roundButton = false,
    theme = 'gray',
    children,
    href,
    onClick,
    target,
    to,
  } = props;

  let customClassName = 'button';
  customClassName += ` button__${size}`;
  customClassName += disabled ? ' button__disabled' : '';
  customClassName += ` button__${theme}`;
  customClassName += roundButton ? ' rounded-full' : '';
  customClassName += fullWidth ? ' w-full' : '';
  customClassName += className ? ` ${className}` : '';

  return (
    <ButtonType
      badge={badge}
      disabled={disabled}
      fullWidth={fullWidth}
      href={href}
      leftIcon={leftIcon}
      onClick={onClick}
      rightIcon={rightIcon}
      roundButton={roundButton}
      size={size}
      target={target}
      theme={theme}
      to={to}
      className={customClassName}
    >
      {leftIcon && <span className="button__left-icon">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="button__right-icon">{rightIcon}</span>}
      {badge && <div className="button__badge">{badge}</div>}
    </ButtonType>
  );
}
