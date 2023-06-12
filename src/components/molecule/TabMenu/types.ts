export interface TabOption {
  key: string;
  label: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  onClick?: (key: string) => void;
}

enum TabMenuTypes {
  classic = 'classic',
  minimal = 'minimal',
}

export interface TabMenuProps {
  className?: string;
  options: TabOption[];
  type?: keyof typeof TabMenuTypes;
}
