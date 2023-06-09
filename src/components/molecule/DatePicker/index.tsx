import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MaskedInput from 'react-text-mask';

import Text from '@/components/atom/Text';

import { DatePickerProps } from './types';

import './styles.css';

export default function DatePicker({
  label,
  id,
  icon,
  placeholder,
  actions,
  value,
  onChange,
  minDate,
  maxDate,
  hasError = false,
  errorMessage,
  theme = 'default',
  disabled,
  rounded = false,
  className = '',
  dateFormat = 'dd/MM/yyyy',
}: DatePickerProps) {
  const handleChange = (date: Date) => {
    if (onChange) {
      onChange(date);
    }
  };

  return (
    <div
      className={`datepicker ${className || ''} ${disabled ? 'disabled' : ''} ${
        hasError ? 'has-error' : ''
      } datepicker__${theme} ${rounded ? 'datepicker__rounded' : ''}`.trim()}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <div className="input-content">
        {icon}
        <ReactDatePicker
          selected={value}
          onChange={(date: Date) => handleChange(date)}
          popperClassName="datepicker-popper"
          minDate={minDate}
          maxDate={maxDate}
          disabled={disabled}
          id={id || ''}
          placeholderText={placeholder || dateFormat.toUpperCase()}
          dateFormat={dateFormat}
          autoComplete="off"
          customInput={
            <MaskedInput
              mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
              keepCharPositions={true}
              guide={true}
            />
          }
        />
        {actions && <div className="input-actions">{actions}</div>}
      </div>
      {errorMessage && (
        <div className="input-error-message">
          <Text size="xs" color="failure200">
            {errorMessage}
          </Text>
        </div>
      )}
    </div>
  );
}
