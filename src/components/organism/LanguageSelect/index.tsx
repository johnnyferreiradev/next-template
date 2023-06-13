import { useState } from 'react';

import Select from '@/components/molecule/Select';
import Text from '@/components/atom/Text';

import { LanguageSelectProps } from './types';
import { SelectOption } from '@/components/molecule/Select/types';

import './styles.css';

export default function LanguageSelect({
  className = '',
}: LanguageSelectProps) {
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

  const [selectedOption, setSelectedOption] = useState<SelectOption>(
    options[0],
  );

  return (
    <div className={`language-select ${className}`.trim()}>
      <Select
        options={options}
        value={selectedOption}
        onChange={(option) => setSelectedOption(option)}
        size="sm"
        menuPlace="right"
        theme="light"
      />
    </div>
  );
}
