import { useEffect, useRef } from 'react';

import { CircularProgressProps } from './types';

import './styles.css';

export default function CircularProgress({ progress }: CircularProgressProps) {
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
    <div className="circular-progress">
      <svg className="progress-circle" viewBox="0 0 100 100">
        <circle
          className="progress-bar-background"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke-width="2"
        />
        <circle
          ref={circleRef}
          className="progress-bar"
          cx="50"
          cy="50"
          r="45"
        />
      </svg>
    </div>
  );
}
