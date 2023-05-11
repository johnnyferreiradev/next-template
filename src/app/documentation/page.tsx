'use client';

import { useState } from 'react';

import Checkbox from '@/components/atom/Checkbox';

export default function Documentation() {
  const [checked, setChecked] = useState(false);

  return (
    <main className="p-10 h-screen flex justify-center items-center">
      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="mb-8"
      >
        Meu checkbox
      </Checkbox>
    </main>
  );
}
