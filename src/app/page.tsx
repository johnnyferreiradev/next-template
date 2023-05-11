'use client';

import { useState } from 'react';

import Text from '@/components/atom/Text';
import Card from '@/components/atom/Card';
import Checkbox from '@/components/atom/Checkbox';

import { TextColors } from '@/components/atom/Text/types';

export default function Home() {
  const colorValueArray = Object.keys(TextColors);

  const [checked, setChecked] = useState(false);

  return (
    <main className="p-16">
      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="mb-8"
      >
        Checkbox - aqui vai um texto bem grande dentro do meu checkbox
      </Checkbox>

      <Card className="p-2" color="grayscale400">
        Opa
      </Card>

      <Text size="2xl" element="h1" weight="bold">
        Hello World
      </Text>
      <Text
        size="2xl"
        element="h1"
        weight="bold"
        align="end"
        decoration="underline"
        transform="uppercase"
      >
        Hello World
      </Text>
      <Text>Colors</Text>

      {colorValueArray.map((color, index) => (
        <Text
          color={color as keyof typeof TextColors}
          size="2xl"
          weight="bold"
          key={index}
        >
          aA
        </Text>
      ))}
    </main>
  );
}
