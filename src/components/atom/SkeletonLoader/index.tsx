import { SkeletonLoaderProps } from './types';

import './styles.css';

export default function SkeletonLoader({
  type,
  customStyle,
  className = '',
}: SkeletonLoaderProps) {
  return (
    <div className={`skeleton-loader ${className}`.trim()}>
      {type === 'line' && (
        <div className="line">
          <span className="skeleton-box" style={{ width: '80%' }}></span>
        </div>
      )}

      {type === 'short-line' && (
        <div className="short-line">
          <span className="skeleton-box" style={{ width: '150px' }}></span>
        </div>
      )}

      {type === 'text' && (
        <div className="short-line">
          <span className="skeleton-box" style={{ width: '90%' }}></span>
          <span className="skeleton-box" style={{ width: '80%' }}></span>
        </div>
      )}

      {type === 'paragraph' && (
        <div className="paragraph">
          <span className="skeleton-box" style={{ width: '80%' }}></span>
          <span className="skeleton-box" style={{ width: '90%' }}></span>
          <span className="skeleton-box" style={{ width: '83%' }}></span>
          <span className="skeleton-box" style={{ width: '80%' }}></span>
        </div>
      )}

      {type === 'custom' && (
        <div className="custom">
          <span className="skeleton-box" style={customStyle}></span>
        </div>
      )}
    </div>
  );
}
