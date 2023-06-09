import { useContext } from 'react';

import { ThemeContext } from '@/contexts/ThemeContext';

import { useTheme } from '@/hooks/useTheme';

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
  const currentTheme = useTheme();

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
              className="range__outside-track"
              style={{
                ...props.style,
              }}
            >
              <div
                ref={props.ref}
                className="range__inside-track"
                style={{
                  background: getTrackBackground({
                    values: values,
                    colors: [
                      themeContext.theme.colors.primary300,
                      currentTheme === 'light'
                        ? themeContext.theme.colors.grayscale200
                        : themeContext.theme.colors.grayscale800,
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
              className="range__thumb"
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
