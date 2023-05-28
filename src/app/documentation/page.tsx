'use client';

import { useState } from 'react';

import Collapse from '@/components/atom/Collapse';
import Text from '@/components/atom/Text';

export default function Documentation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="p-10 h-screen flex justify-center pt-56">
      <Collapse
        collapseHeader="Clique aqui!"
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
        className="max-w-xs"
      >
        <div className="flex">
          <Text size="xl" className="mr-1">
            Siga:
          </Text>
          <Text weight="bold" size="xl" color="secondary200">
            @johnnyferreira09
          </Text>
        </div>
      </Collapse>
    </main>
  );
}
