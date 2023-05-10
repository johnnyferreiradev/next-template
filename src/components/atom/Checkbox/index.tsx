import { CheckboxProps } from './types';

export default function Checkbox({
  checked,
  children,
  className = '',
  disabled,
  onChange,
}: CheckboxProps) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => {
          if (onChange) {
            onChange(event);
          }
        }}
        disabled={disabled}
      />
      <span className="checkmark"></span>
    </div>
  );
}
