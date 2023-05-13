import { useContext } from 'react';

import { ThemeContext } from '@/contexts/ThemeContext';

import { Range as ReactRange, getTrackBackground } from 'react-range';

import { RangeProps } from './types';

import './styles.css';

export default function Range({
  type = 'normal',
  step = 0.1,
  min,
  max,
  values,
  onChange,
  className = '',
  icon,
}: RangeProps) {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={`range ${type} ${className}`.trim()}>
      {themeContext && (
        <ReactRange
          step={step}
          min={min}
          max={max}
          values={values}
          onChange={(values) => onChange(values)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className="outside-track"
              style={{
                ...props.style,
              }}
            >
              <div
                ref={props.ref}
                className="inside-track"
                style={{
                  background: getTrackBackground({
                    values: values,
                    colors: [
                      themeContext.theme.colors.primary300,
                      themeContext.theme.colors.grayscale200,
                    ],
                    min: 0,
                    max: 100,
                  }),
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              key={props.key}
              className="thumb"
              style={{
                ...props.style,
                backgroundColor: themeContext.theme.colors.primary200,
              }}
            >
              {type === 'large' && icon}
            </div>
          )}
        />
      )}
    </div>
  );
}
