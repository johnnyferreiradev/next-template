enum LoaderTypes {
  spin = 'spin',
  spinDot = 'spinDot',
  dot = 'dot',
  shape = 'shape',
  line = 'line',
}

export interface LoaderProps {
  type?: keyof typeof LoaderTypes;
  className?: string;
}
