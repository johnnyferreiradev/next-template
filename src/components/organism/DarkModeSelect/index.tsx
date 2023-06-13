import { useState, useEffect } from 'react';
import { Desktop, MoonStars, SunDim } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';

import Dropdown from '@/components/molecule/Dropdown';
import Button from '@/components/atom/Button';

import { DarkModeSelectProps } from './types';
import { ButtonThemes } from '@/components/atom/Button/types';

import './styles.css';

export default function DarkModeSelect({
  className = '',
}: DarkModeSelectProps) {
  const t = useTranslations();

  const { systemTheme, theme, setTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [optionButtonThemes, setOptionButtonThemes] = useState({
    light: 'dark-flat',
    dark: 'dark-flat',
    system: 'dark-flat',
  });

  const [selectedOption, setSelectedOption] = useState<React.ReactNode | null>(
    null,
  );

  const handleSetTheme = (newTheme: string, themeButton: string) => {
    setTheme(newTheme);
    setIsOpen(false);
    setSelectedOption(
      themeButton === 'dark' ? (
        <Button theme={newTheme === 'system' ? 'link-gray' : 'link-primary'}>
          <MoonStars size={28} />
        </Button>
      ) : (
        <Button theme={newTheme === 'system' ? 'link-gray' : 'link-primary'}>
          <SunDim size={28} />
        </Button>
      ),
    );
    setOptionButtonThemes({
      light: newTheme === 'light' ? 'primary-flat' : 'dark-flat',
      dark: newTheme === 'dark' ? 'primary-flat' : 'dark-flat',
      system: newTheme === 'system' ? 'primary-flat' : 'dark-flat',
    });
  };

  useEffect(() => {
    setOptionButtonThemes({
      light: theme === 'light' ? 'primary-flat' : 'dark-flat',
      dark: theme === 'dark' ? 'primary-flat' : 'dark-flat',
      system: theme === 'system' ? 'primary-flat' : 'dark-flat',
    });

    let currentTheme = theme;

    if (theme === 'system') {
      currentTheme = systemTheme;
    }

    setSelectedOption(
      currentTheme === 'dark' ? (
        <Button theme={theme === 'system' ? 'link-gray' : 'link-primary'}>
          <MoonStars size={28} />
        </Button>
      ) : (
        <Button theme={theme === 'system' ? 'link-gray' : 'link-primary'}>
          <SunDim size={28} />
        </Button>
      ),
    );
  }, [systemTheme]);

  return (
    <div className={`dark-mode-select ${className}`.trim()}>
      <Dropdown
        open={isOpen}
        setOpen={() => setIsOpen(!isOpen)}
        toggleElement={selectedOption || ''}
        contentPlace="right"
        contentClassName="p-2"
      >
        <Button
          theme={optionButtonThemes.light as keyof typeof ButtonThemes}
          size="sm"
          fullWidth
          className="justify-start"
          onClick={() => handleSetTheme('light', 'light')}
          leftIcon={<SunDim size={20} />}
        >
          {t('Light')}
        </Button>
        <Button
          theme={optionButtonThemes.dark as keyof typeof ButtonThemes}
          size="sm"
          fullWidth
          className="justify-start"
          onClick={() => handleSetTheme('dark', 'dark')}
          leftIcon={<MoonStars size={20} />}
        >
          {t('Dark')}
        </Button>
        <Button
          theme={optionButtonThemes.system as keyof typeof ButtonThemes}
          size="sm"
          fullWidth
          className="justify-start"
          onClick={() => handleSetTheme('system', systemTheme || 'light')}
          leftIcon={<Desktop size={20} />}
        >
          {t('System')}
        </Button>
      </Dropdown>
    </div>
  );
}
