'use client';

import { useState } from 'react';
import { User, Image as ImageIcon } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';

import Text from '@/components/atom/Text';
import Card from '@/components/atom/Card';
import Checkbox from '@/components/atom/Checkbox';
import Radio from '@/components/atom/Radio';
import SwitchButton from '@/components/atom/SwitchButton';
import Collapse from '@/components/atom/Collapse';
import Icon from '@/components/atom/Icon';
import Range from '@/components/atom/Range';
import Tag from '@/components/atom/Tag';
import Tooltip from '@/components/atom/Tooltip';
import Button from '@/components/atom/Button';
import Image from '@/components/atom/Image';

import { Colors } from '@/types/globals';
import { TagThemes } from '@/components/atom/Tag/types';
import { ButtonThemes } from '@/components/atom/Button/types';

export default function Home() {
  const colorValueArray = Object.keys(Colors);
  const tagThemesArray = Object.keys(TagThemes);
  const buttonThemesArray = Object.keys(ButtonThemes);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState<number[]>([50]);

  const handleChangePrimaryColor = () => {
    document.documentElement.style.setProperty('--primary-color-200', 'red');
  };

  return (
    <main className="p-16 dark:bg-[var(--dark-color)]">
      <Image alt="My image" placeholderIcon={<ImageIcon />} />
      <Button
        className="mb-8"
        badge={
          <Tag theme="primary200" className="rounded-md">
            Opa
          </Tag>
        }
        onClick={() => console.log('Clicou')}
        leftIcon={<User />}
        rightIcon={<User />}
        roundButton
        fullWidth
        theme="primary"
      >
        Button
      </Button>
      <Button
        className="mb-8"
        badge={
          <Tag theme="primary200" className="rounded-md">
            Opa
          </Tag>
        }
        to="/documentation"
        leftIcon={<User />}
        rightIcon={<User />}
        roundButton
        fullWidth
      >
        Link
      </Button>
      <Button
        className="mb-8"
        badge={
          <Tag theme="primary200" className="rounded-md">
            Opa
          </Tag>
        }
        href="https://github.com/johnnyferreiradev/next-template"
        target="_blank"
        leftIcon={<User />}
        rightIcon={<User />}
        roundButton
        fullWidth
      >
        Git repo
      </Button>

      {buttonThemesArray.map((theme, index) => (
        <Button
          key={index}
          leftIcon={<User />}
          rightIcon={<User />}
          theme={theme as keyof typeof ButtonThemes}
        >
          Button {theme}
        </Button>
      ))}

      <Tooltip content="My message" id="tooltip-1" className="mb-8">
        Tooltip
      </Tooltip>

      {tagThemesArray.map((theme, index) => (
        <Tag
          className="mb-8"
          theme={theme as keyof typeof TagThemes}
          key={index}
        >
          Minha tag
        </Tag>
      ))}

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
        className="mb-8"
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
        onChange={() => {
          handleChangePrimaryColor();
          setChecked(!checked);

          if (theme == 'dark') {
            setTheme('light');
            return;
          }
          setTheme('dark');
        }}
        className="mb-8"
      >
        Checkbox - aqui vai um texto bem grande dentro do meu checkbox
      </Checkbox>
      <Checkbox className="mb-8" disabled>
        Checkbox
      </Checkbox>
      <Checkbox className="mb-8" checked disabled>
        Checkbox
      </Checkbox>

      <Radio
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="mb-8"
      >
        Radio button
      </Radio>
      <Radio onChange={() => setChecked(!checked)} className="mb-8" disabled>
        Radio button
      </Radio>
      <Radio
        onChange={() => setChecked(!checked)}
        className="mb-8"
        checked
        disabled
      >
        Radio button
      </Radio>

      <SwitchButton id="switch" className="mb-8">
        Switch Button
      </SwitchButton>

      <Card className="p-2 mb-8" withBorder borderColor="darkColor">
        Card
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
          color={color as keyof typeof Colors}
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
