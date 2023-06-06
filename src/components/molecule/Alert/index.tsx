import { X } from '@phosphor-icons/react';

import Icon from '@/components/atom/Icon';
import Text from '@/components/atom/Text';
import Button from '@/components/atom/Button';

import { AlertProps } from './types';

import './styles.css';

export default function Alert({
  children,
  description,
  icon,
  onClose,
  theme = 'warning',
  title,
  className = '',
}: AlertProps) {
  return (
    <div
      className={`alert alert__${theme} ${
        description ? 'items-start' : ''
      } ${className}`.trim()}
    >
      <div className="alert__left-side">
        {icon && <div className="alert__icon-section">{icon}</div>}
        <div className="alert__info-section">
          {title && (
            <Text className="alert__title" weight="bold">
              {title}
            </Text>
          )}
          {description && (
            <Text className="alert__description" weight="bold">
              {description}
            </Text>
          )}
        </div>
      </div>
      <div className="alert__right-side">
        {children && <div className="alert__content-section">{children}</div>}
        {onClose && (
          <div className="alert__close-section">
            <Button size="sm" roundButton theme="link-dark" onClick={onClose}>
              <Icon>
                <X size={20} />
              </Icon>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
