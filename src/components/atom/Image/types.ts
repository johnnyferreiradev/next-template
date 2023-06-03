import { StaticImageData } from 'next/image';

export interface ImageProps {
  src?: StaticImageData;
  alt: string;
  className?: string;
  placeholderIcon?: React.ReactNode;
}
