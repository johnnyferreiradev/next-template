export interface CollapseProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: React.ReactNode;
  collapseHeader: React.ReactNode;
  className?: string;
}
