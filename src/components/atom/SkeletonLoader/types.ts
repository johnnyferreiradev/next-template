enum SkeletonLoadingTypes {
  line = 'line',
  'short-line' = 'short-line',
  text = 'text',
  paragraph = 'paragraph',
  custom = 'custom',
}

export interface SkeletonLoaderProps {
  type: keyof typeof SkeletonLoadingTypes;
  customStyle?: React.CSSProperties;
  className?: string;
}
