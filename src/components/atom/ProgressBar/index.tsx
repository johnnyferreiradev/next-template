import { ProgressBarProps } from './types';

import './styles.css';

export default function ProgressBar({
  progress,
  className = '',
}: ProgressBarProps) {
  return (
    <div className={`progress-bar ${className}`.trim()}>
      <div
        className="progress-bar__progress"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
