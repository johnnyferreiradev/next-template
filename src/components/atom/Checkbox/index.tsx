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
      className={`checkbox ${className} ${
        disabled ? 'disabled' : ''
      }`.trim()}
    >
      {children && <div className="checkbox-content">{children}</div>}
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => {
          if (onChange) {
            onChange(event);
          }
        }}
        disabled={disabled}
        className="checkbox-input"
      />
      <span className="checkmark"></span>
    </label>
  );
}
