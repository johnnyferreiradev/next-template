'use client';

import { CheckboxProps } from './types';

import './styles.css';

export default function Checkbox({
  checked,
  children,
  className = '',
  disabled = false,
  onChange,
}: CheckboxProps) {
  return (
    <label
      className={`checkbox ${className} ${disabled ? 'disabled' : ''}`.trim()}
    >
      {children && <div className="checkbox__content">{children}</div>}
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => {
          if (onChange) {
            onChange(event);
          }
        }}
        disabled={disabled}
        className="checkbox__input"
      />
      <span className="checkbox__checkmark"></span>
    </label>
  );
}
