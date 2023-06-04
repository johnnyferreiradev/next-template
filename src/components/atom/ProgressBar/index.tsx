import { ProgressBarProps } from './types';

import './styles.css';

export default function ProgressBar({
  progress,
  color = 'primary',
  className = '',
}: ProgressBarProps) {
  return (
    <div className={`progress-bar progress__${color} ${className}`.trim()}>
      <div
        className="progress-bar__progress"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
