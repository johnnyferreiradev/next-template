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
      className={`checkbox ${className} relative pl-6 cursor-pointer select-none flex items-center disabled:cursor-default group ${
        disabled ? 'disabled' : ''
      }`}
    >
      {children && <div className="content mt-0.5">{children}</div>}
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => {
          if (onChange) {
            onChange(event);
          }
        }}
        disabled={disabled}
        className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
      />
      <span className="checkmark bg-[var(--primary-color-300)] group-hover:bg-[var(--primary-color-300)] group-[.disabled]:hover:bg- w-4 h-4"></span>
    </label>
  );
}
