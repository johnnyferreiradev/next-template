import { SwitchButtonProps } from './types';

import './styles.css';

export default function SwitchButton({
  className,
  id,
  checked,
  onChange,
  disabled,
  children,
}: SwitchButtonProps) {
  return (
    <div className={`switch-button ${disabled ? 'disabled' : ''} ${className}`}>
      <input
        id={id}
        className="switch-button__input"
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={(event) => {
          if (onChange) {
            onChange(event);
          }
        }}
      />
      <label htmlFor={id} className="switch-button__label"></label>
      {children && (
        <div className="switch-button__content">
          <label htmlFor={id} className="switch-button__content_label">
            {children}
          </label>
        </div>
      )}
    </div>
  );
}
