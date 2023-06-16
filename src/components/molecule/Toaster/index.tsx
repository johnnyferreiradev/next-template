import { useContext, useState, useEffect } from 'react';
import { X } from '@phosphor-icons/react';

import { ToasterContext } from '@/contexts/ToasterContext';

import Icon from '@/components/atom/Icon';
import Text from '@/components/atom/Text';
import Button from '@/components/atom/Button';

import { ToasterProps } from './types';

import './styles.css';

export default function Toaster({
  actions,
  children,
  description,
  hideCloseButton,
  icon,
  show,
  theme = 'primary',
  time = 10000,
  title,
  position = 'top-right',
}: ToasterProps) {
  const toasterContext = useContext(ToasterContext);

  const [toasterTimeout, setToasterTimeout] =
    useState<ReturnType<typeof setTimeout>>();

  const handleCloseToaster = () => {
    clearTimeout(toasterTimeout);
    setToasterTimeout(undefined);
    toasterContext?.hideToaster();
  };

  useEffect(() => {
    if (show) {
      const currentTimeout = setTimeout(() => {
        toasterContext?.hideToaster();
      }, time);
      setToasterTimeout(currentTimeout);
    }
  }, [show, time, toasterContext]);

  const positionClasses = {
    'top-left': 'top-0 justify-start',
    'top-center': 'top-0 justify-center',
    'top-right': 'top-0 justify-end',
    'bottom-left': 'bottom-0 justify-start',
    'bottom-center': 'bottom-0 justify-center',
    'bottom-right': 'bottom-0 justify-end',
  };

  let customClassName = 'toaster';
  customClassName += show ? ' toaster_show' : '';
  customClassName += ` toaster__${theme}`;
  customClassName += ` ${positionClasses[position]}`;
  // customClassName += !!description || !!children ? ' items-start' : '';

  return (
    <div className={customClassName}>
      <div
        className={`toaster__content ${
          !description ? 'items-center' : 'items-start'
        }`.trim()}
      >
        <div className="toaster__left-side">
          {icon && (
            <div className="icon-section">
              <Icon>{icon}</Icon>
            </div>
          )}
          <div className="info-section">
            {title && (
              <Text className="toaster-title" size="lg" weight="bold">
                {title}
              </Text>
            )}
            {description && (
              <Text className="toaster-description" color="grayscale400">
                {description}
              </Text>
            )}
            {children && <div className="content-section">{children}</div>}
          </div>
        </div>
        <div className="toaster__right-side">
          {actions && <div className="actions-section">{actions}</div>}
          {!hideCloseButton && (
            <div className="close-section">
              <Button
                size="sm"
                roundButton
                theme="link-dark"
                onClick={handleCloseToaster}
              >
                <Icon>
                  <X size={20} />
                </Icon>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
