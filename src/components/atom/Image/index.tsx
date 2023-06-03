import NextImage from 'next/image';

import { ImageProps } from './types';

import './styles.css';

export default function Image({
  src = '',
  alt,
  className = '',
  placeholderIcon,
}: ImageProps) {
  if (!src) {
    return (
      <div className={`image image__placeholder ${className}`.trim()}>
        {placeholderIcon}
      </div>
    );
  }

  return (
    <NextImage
      className={`image ${className}`.trim()}
      src={src}
      alt={alt}
      priority
    />
  );
}
