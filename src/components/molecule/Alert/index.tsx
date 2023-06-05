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
}: AlertProps) {
  return (
    <div
      className={`alert ${description ? 'align-start' : ''} ${theme}`.trim()}
    >
      <div className="left-side">
        {icon && (
          <div className="icon-section">
            <Icon>{icon}</Icon>
          </div>
        )}
        <div className="info-section">
          {title && (
            <Text className="alert-title" size="xl" weight="bold">
              {title}
            </Text>
          )}
          {description && (
            <Text
              className="alert-description"
              color="grayscale400"
              weight="bold"
            >
              {description}
            </Text>
          )}
        </div>
      </div>
      <div className="right-side">
        {children && <div className="content-section">{children}</div>}
        {onClose && (
          <div className="close-section">
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
