import { Colors } from '@/types/globals';

enum DropdownContentPlaces {
  right = 'right',
  left = 'left',
}

export interface DropdownProps {
  open?: boolean;
  setOpen: (value: boolean) => void;
  toggleElement: React.ReactNode;
  dropdownContentColor?: keyof typeof Colors;
  contentPlace?: keyof typeof DropdownContentPlaces;
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  onOutsideClick?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
