import { useContext, useEffect, KeyboardEvent } from 'react';
import { X } from '@phosphor-icons/react';

import { ModalContext } from '@/contexts/ModalContext';

import Card from '@/components/atom/Card';
import Button from '@/components/atom/Button';
import Text from '@/components/atom/Text';

import { ModalProps } from './types';

import './styles.css';

export default function Modal({
  width = 'max-w-2xl',
  content,
  disableBackgroundClick = false,
  onAfterClose,
  hideCloseButton,
  subtitle,
  title,
  disableCloseWithEsc = false,
}: ModalProps) {
  const modalContext = useContext(ModalContext);

  const handleClose = () => {
    modalContext?.closeModal();
    if (onAfterClose) {
      onAfterClose();
    }
  };

  const clickAwayListener = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> & {
      target: HTMLButtonElement;
    },
  ) => {
    if (disableBackgroundClick) return;

    if (event.target.classList.contains('modal')) {
      handleClose();
    }
  };

  const handleKeyPress = (event: globalThis.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    if (disableCloseWithEsc) return;
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="modal default-scroll" onClick={clickAwayListener}>
      <Card
        color="lightColor"
        boxShadow="shadow-lg"
        className={`modal__content p-4 ${width}`}
      >
        <div
          className={`modal__content-header ${
            !title && !subtitle ? 'mb-0' : 'mb-4'
          }`}
        >
          {(title || subtitle) && (
            <div className="info">
              {title && (
                <Text size="lg" element="h5" weight="bold" className="mb-1">
                  {title}
                </Text>
              )}
              {subtitle && <Text className="modal__subtitle">{subtitle}</Text>}
            </div>
          )}
          {!hideCloseButton && (
            <Button
              theme="gray"
              onClick={handleClose}
              size="sm"
              className={`modal__close-button ${
                !title && !subtitle ? 'modal__close-button_float' : ''
              }`.trim()}
            >
              <X size={20} />
            </Button>
          )}
        </div>
        <div className="modal__content-main">{content}</div>
      </Card>
    </div>
  );
}
