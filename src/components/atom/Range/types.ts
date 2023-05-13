enum RangeTypes {
  normal = 'normal',
  large = 'large',
}

export interface RangeProps {
  type?: keyof typeof RangeTypes;
  step?: number;
  min: number;
  max: number;
  values: number[];
  onChange: (values: number[]) => void;
  className?: string;
  icon?: React.ReactNode;
}
