export interface RadioProps {
  children?: React.ReactNode;
  className?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name?: string;
}
