import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import Text from '@/components/atom/Text';

import { TextareaProps } from './types';

import './styles.css';

export default function Textarea({
  autoFocus,
  autoResize,
  className,
  disabled,
  errorMessage,
  hasError,
  id,
  label,
  limit,
  limitDisplayType = 'always',
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  placeholder,
  placeholderAsLabel,
  rows = 3,
  theme = 'default',
  value,
}: TextareaProps) {
  const [count, setCount] = useState(
    value ? value.substring(0, limit).length : 0,
  );
  const [focused, setFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
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
      className={`textarea ${hasError ? 'has-error' : ''} textarea__${theme} ${
        disabled ? 'disabled' : ''
      } ${className || ''}`.trim()}
    >
      {(label || placeholderAsLabel) && (
        <label htmlFor={id}>{renderLabel()}</label>
      )}
      <div className="textarea-content">
        {!autoResize && (
          <textarea
            id={id}
            name={id}
            placeholder={placeholder}
            disabled={disabled}
            value={value?.substring(0, limit)}
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyDown={handleKeyDown}
            rows={rows}
            ref={(currentRef) => {
              if (autoFocus) {
                currentRef?.focus();
              }
            }}
          />
        )}
        {autoResize && (
          <TextareaAutosize
            id={id}
            name={id}
            placeholder={placeholder}
            disabled={disabled}
            value={value?.substring(0, limit)}
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyDown={handleKeyDown}
            ref={(currentRef) => {
              if (autoFocus) {
                currentRef?.focus();
              }
            }}
          />
        )}
      </div>
      {limit && <div className="textarea-count">{renderCount()}</div>}
      {errorMessage && (
        <div className="textarea-error-message">
          <Text size="xs" color="failure200">
            {errorMessage}
          </Text>
        </div>
      )}
    </div>
  );
}
