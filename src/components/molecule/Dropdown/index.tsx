import Card from '@/components/atom/Card';

import { DropdownProps } from './types';

import './styles.css';

export default function Dropdown({
  open = true,
  setOpen,
  toggleElement,
  dropdownContentColor = 'lightColor',
  contentPlace = 'left',
  children,
  className = '',
  contentClassName = '',
  onOutsideClick,
}: DropdownProps) {
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const currentTarget = event.currentTarget;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setOpen(false);
        if (onOutsideClick) {
          onOutsideClick(event);
        }
      }
    }, 0);
  };

  return (
    <div
      onBlur={handleBlur}
      className={`dropdown dropdown__${contentPlace} ${
        open ? 'dropdown__open' : ''
      } ${className}`.trim()}
      tabIndex={0}
    >
      <div className="dropdown__toggle-element" onClick={() => setOpen(!open)}>
        {toggleElement}
      </div>
      <Card
        className={`dropdown__content ${contentClassName}`.trim()}
        color={dropdownContentColor}
        boxShadow="shadow-xl"
      >
        {children}
      </Card>
    </div>
  );
}
