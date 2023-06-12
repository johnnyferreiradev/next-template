export interface TabOption {
  key: string;
  label: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  onClick?: (key: string) => void;
}

export interface TabMenuProps {
  className?: string;
  options: TabOption[];
}
