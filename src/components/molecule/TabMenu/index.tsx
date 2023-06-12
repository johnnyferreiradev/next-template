import Button from '@/components/atom/Button';

import { TabMenuProps, TabOption } from './types';

import './styles.css';

export default function TabMenu({ className = '', options }: TabMenuProps) {
  const handleTabClick = (option: TabOption) => {
    if (option.onClick) {
      option.onClick(option.key);
    }
  };

  return (
    <div className={`tab-menu ${className}`.trim()}>
      {options.map((option, index) => (
        <Button
          key={index}
          theme={option.active ? 'light' : 'link-gray'}
          size="sm"
          className={option.active ? 'active-tab' : ''}
          onClick={() => handleTabClick(option)}
          disabled={option.disabled}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
