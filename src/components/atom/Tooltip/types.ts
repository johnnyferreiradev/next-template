enum TooltipPlaces {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}

export interface TooltipProps {
  id: string;
  className?: string;
  place?: keyof typeof TooltipPlaces;
  openOnClick?: boolean;
  clickable?: boolean;
  content: React.ReactNode;
  noArrow?: boolean;
  isOpen?: boolean;
  offset?: number;
  children: React.ReactNode;
  afterShow?: () => void;
}
