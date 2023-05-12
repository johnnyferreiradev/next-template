'use client';

import { RadioProps } from './types';

import './styles.css';

export default function Radio({
  checked,
  children,
  className = '',
  disabled = false,
  onChange,
  name,
}: RadioProps) {
  return (
    <label
      className={`radio ${className} ${disabled ? 'disabled' : ''}`.trim()}
    >
      {children && <div className="radio__content">{children}</div>}
      <input
        type="radio"
        checked={checked}
        onChange={(event) => {
          if (onChange) {
            onChange(event);
          }
        }}
        disabled={disabled}
        className="radio__input"
        name={name}
      />
      <span className="radio__checkmark"></span>
    </label>
  );
}
