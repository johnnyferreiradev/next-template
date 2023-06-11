'use client';

import { useContext } from 'react';

import { ModalContext } from '@/contexts/ModalContext';
import { ToasterContext } from '@/contexts/ToasterContext';

import Modal from '@/components/organism/Modal';
import Toaster from '@/components/molecule/Toaster';

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const modalState = useContext(ModalContext);
  const toasterState = useContext(ToasterContext);

  return (
    <div className="main-layout">
      <Toaster
        actions={toasterState?.toaster.actions}
        description={toasterState?.toaster.description}
        icon={toasterState?.toaster.icon}
        hideCloseButton={toasterState?.toaster.hideCloseButton}
        show={!!toasterState?.toaster.show}
        theme={toasterState?.toaster.theme}
        title={toasterState?.toaster.title}
        time={toasterState?.toaster.time}
        position={toasterState?.toaster.position}
      >
        {toasterState?.toaster.children}
      </Toaster>
      {modalState?.modal.show && (
        <Modal
          content={modalState.modal.content}
          disableBackgroundClick={modalState.modal.disableBackgroundClick}
          hideCloseButton={modalState.modal.hideCloseButton}
          onAfterClose={modalState.modal.onAfterClose}
          subtitle={modalState.modal.subtitle}
          title={modalState.modal.title}
          width={modalState.modal.width}
        />
      )}
      {children}
    </div>
  );
}
