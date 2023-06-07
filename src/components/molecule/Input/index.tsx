import { useState } from 'react';
import MaskedInput from 'react-text-mask';

import Text from '@/components/atom/Text';

import { InputProps } from './types';

import './styles.css';

export default function Input({
  actions,
  className,
  disabled,
  errorMessage,
  hasError,
  icon,
  id,
  label,
  limit,
  limitDisplayType = 'always',
  mask,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  placeholder,
  placeholderAsLabel,
  rounded,
  theme = 'default',
  type = 'text',
  value,
}: InputProps) {
  const [count, setCount] = useState(
    value ? value.substring(0, limit).length : 0,
  );
  const [focused, setFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (limit) {
      const newValue = event.target.value.substring(0, limit);
      setCount(newValue.length);
      event.target.value = newValue;
      onChange?.(event);
      return;
    }

    onChange?.(event);
  };

  const handleOnFocus = () => {
    setFocused(true);
    if (onFocus) {
      onFocus();
    }
  };

  const handleOnBlur = () => {
    setFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);
  };

  const renderCount = () => {
    const limitComponent = (
      <Text size="xs">
        {count}/{limit}
      </Text>
    );

    if (!limit || (limit && limitDisplayType === 'focused' && !focused))
      return '';

    return limitComponent;
  };

  const renderLabel = () => {
    const labelComponent = placeholderAsLabel ? placeholder : label;

    if (
      (!label && !placeholderAsLabel) ||
      (placeholderAsLabel && !placeholder) ||
      (placeholderAsLabel && !value)
    ) {
      return '';
    }

    return labelComponent;
  };

  return (
    <div
      className={`input ${className || ''} ${disabled ? 'disabled' : ''} ${
        hasError ? 'has-error' : ''
      } ${rounded ? 'rounded' : ''} input__${theme}`.trim()}
    >
      {(label || placeholderAsLabel) && (
        <label htmlFor={id}>{renderLabel()}</label>
      )}
      <div className="input-content">
        {icon}
        {!mask && (
          <input
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            disabled={disabled}
            value={value?.substring(0, limit)}
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyDown={handleKeyDown}
          />
        )}
        {mask && (
          <MaskedInput
            id={id}
            name={id}
            placeholder={placeholder}
            disabled={disabled}
            value={value?.substring(0, limit)}
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyDown={handleKeyDown}
            mask={mask || []}
            keepCharPositions
            guide
          />
        )}
        {actions && <div className="input-actions">{actions}</div>}
      </div>
      {limit && <div className="input-count">{renderCount()}</div>}
      {errorMessage && (
        <div className="input-error-message">
          <Text size="sm" color="failure200">
            {errorMessage}
          </Text>
        </div>
      )}
    </div>
  );
}
