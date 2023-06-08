import { useContext } from 'react';
import ReactSelect, {
  ClearIndicatorProps,
  components,
  DropdownIndicatorProps,
  MultiValueRemoveProps,
} from 'react-select';
import { CaretDown, X } from '@phosphor-icons/react';

import { ThemeContext } from '@/contexts/ThemeContext';

import { SelectOption, SelectProps, SelectedOptionValue } from './types';

import './styles.css';

const DropdownIndicator = (props: DropdownIndicatorProps<SelectOption>) => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDown size={20} />
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (props: ClearIndicatorProps<SelectOption>) => {
  return (
    <components.ClearIndicator {...props}>
      <X size={20} />
    </components.ClearIndicator>
  );
};

const MultiValueRemove = (props: MultiValueRemoveProps<SelectOption>) => {
  return (
    <components.MultiValueRemove {...props}>
      <X size={20} />
    </components.MultiValueRemove>
  );
};

export default function Select({
  value,
  options,
  isMulti,
  onChange,
  onChangeMulti,
  selectKey,
  isSearchable = false,
  loadingMessage,
  noOptionsMessage,
  placeholder,
  disabled,
  isOpen,
  className = '',
  theme = 'default',
}: SelectProps) {
  const themeContext = useContext(ThemeContext);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      const length = (event.target as HTMLInputElement).value.length;

      if (event.key === 'Home') {
        (event.target as HTMLInputElement).selectionStart = 0;
      } else {
        (event.target as HTMLInputElement).selectionEnd = length;
      }
    }
  };

  const handleChange = (values: SelectedOptionValue) => {
    if (isMulti && onChangeMulti) {
      onChangeMulti(values as SelectOption[]);
      return;
    }

    if (onChange) {
      onChange(values as SelectOption);
    }
  };

  return (
    <div className={`select ${theme} ${className}`.trim()}>
      {themeContext && (
        <ReactSelect
          key={selectKey}
          value={value}
          options={options}
          onChange={(option) =>
            handleChange(
              isMulti ? (option as SelectOption[]) : (option as SelectOption),
            )
          }
          isMulti={isMulti}
          isSearchable={isSearchable}
          onKeyDown={handleKeyDown}
          className="react-select-lib"
          classNamePrefix="react_select"
          placeholder={placeholder}
          noOptionsMessage={() => noOptionsMessage}
          loadingMessage={() => loadingMessage}
          theme={(reactSelectTheme) => ({
            ...reactSelectTheme,
            borderRadius: 0,
            colors: {
              ...reactSelectTheme.colors,
              primary: themeContext?.theme.colors.primary200,
              primary75: themeContext?.theme.colors.primary100,
              primary50: themeContext?.theme.colors.primary300,
              primary25: themeContext?.theme.colors.primary400,
              danger: themeContext?.theme.colors.failure200,
              dangerLight: themeContext?.theme.colors.failure100,
              neutral0: themeContext?.theme.colors.lightColor,
              neutral5: themeContext?.theme.colors.grayscale100,
              neutral10: themeContext?.theme.colors.grayscale100,
              neutral20: themeContext?.theme.colors.grayscale200,
              neutral30: themeContext?.theme.colors.grayscale300,
              neutral40: themeContext?.theme.colors.grayscale400,
              neutral50: themeContext?.theme.colors.darkColor,
            },
          })}
          components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
          isDisabled={disabled}
          menuIsOpen={isOpen}
        />
      )}
    </div>
  );
}
