import { useEffect, useRef } from 'react';

import { CircularProgressProps } from './types';

import './styles.css';

export default function CircularProgress({
  progress,
  strokeWidth = 10,
  color = 'primary',
  className = '',
  children,
}: CircularProgressProps) {
  const circleRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    if (circleRef.current) {
      const radius = circleRef.current.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (progress / 100) * circumference;
      circleRef.current.style.strokeDasharray = `${circumference}px`;
      circleRef.current.style.strokeDashoffset = offset.toString();
    }
  }, [progress]);

  return (
    <div
      className={`circular-progress inverted progress__${color} ${className}`}
    >
      <svg className="circular-progress__circle" viewBox="0 0 100 100">
        <circle
          className="circular-progress__background"
          cx="50"
          cy="50"
          r="45"
          strokeWidth={strokeWidth}
          strokeDasharray={283}
        />
        <circle
          ref={circleRef}
          className="circular-progress__progress"
          cx="50"
          cy="50"
          r="45"
          strokeWidth={strokeWidth}
        />
      </svg>
      <div className="circular-progress__content">{children}</div>
    </div>
  );
}
