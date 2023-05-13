'use client';

import { useState } from 'react';
import { User } from '@phosphor-icons/react';

import Text from '@/components/atom/Text';
import Card from '@/components/atom/Card';
import Checkbox from '@/components/atom/Checkbox';
import Radio from '@/components/atom/Radio';
import SwitchButton from '@/components/atom/SwitchButton';
import Collapse from '@/components/atom/Collapse';
import Icon from '@/components/atom/Icon';
import Range from '@/components/atom/Range';
import Tag from '@/components/atom/Tag';

import { TextColors } from '@/components/atom/Text/types';

export default function Home() {
  const colorValueArray = Object.keys(TextColors);

  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState<number[]>([50]);

  return (
    <main className="p-16">
      <Tag className="mb-8">Minha tag</Tag>

      <Range
        min={0}
        max={100}
        onChange={(values) => setValues(values)}
        values={values}
        type="large"
        icon={
          <Icon color="lightColor">
            <User />
          </Icon>
        }
      />

      <Icon color="primary200" className="mb-8">
        <User />
      </Icon>

      <Collapse
        collapseHeader="Opa"
        isOpen={checked}
        setIsOpen={() => setChecked(!checked)}
        className="mb-8"
      >
        Conteúdo
      </Collapse>

      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="mb-8"
      >
        Checkbox - aqui vai um texto bem grande dentro do meu checkbox
      </Checkbox>
      <Radio
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="mb-8"
      >
        Radio button
      </Radio>
      <SwitchButton id="switch" className="mb-8">
        Switch Button
      </SwitchButton>

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
