import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

import { DEFAULT_LOCALE } from '@/settings';

import Select from '@/components/molecule/Select';
import Text from '@/components/atom/Text';

import { LanguageSelectProps } from './types';
import { SelectOption } from '@/components/molecule/Select/types';

import './styles.css';

export default function LanguageSelect({
  className = '',
}: LanguageSelectProps) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const options: SelectOption[] = [
    {
      label: (
        <Text
          className="language-option-label py-2 px-3 min-w-max"
          size="sm"
          weight="bold"
        >
          EN
        </Text>
      ),
      value: 'en',
    },
    {
      label: (
        <Text
          className="language-option-label py-2 px-3 min-w-max"
          size="sm"
          weight="bold"
        >
          PT-BR
        </Text>
      ),
      value: 'pt',
    },
  ];

  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null,
  );

  const handleOnChange = (option: SelectOption) => {
    setSelectedOption(option);

    let newPathname = '';

    if (locale !== DEFAULT_LOCALE) {
      const parts = pathname.split('/');
      const language = parts[1];
      const pathnameWithoutLanguage = pathname.replace('/' + language, '');
      newPathname = `/${option.value}${pathnameWithoutLanguage}`;
    } else {
      newPathname = `/${option.value}${pathname}`;
    }

    router.push(newPathname);
  };

  useEffect(() => {
    const currentLanguageOption = options.find(
      (option) => option.value === locale,
    );
    setSelectedOption(currentLanguageOption || null);
  }, []);

  return (
    <div className={`language-select ${className}`.trim()}>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleOnChange}
        size="sm"
        menuPlace="right"
        theme="light"
        placeholder=""
      />
    </div>
  );
}
