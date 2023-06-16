import { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { lightfair, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Terminal } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';

import Text from '@/components/atom/Text';

import { CodeSampleProps } from './types';

import './styles.css';

export default function CodeSample({
  codeString,
  language,
  title,
  className = '',
  icon = <Terminal size={20} />,
}: CodeSampleProps) {
  const { theme } = useTheme();

  const [currentTheme, setCurrentTheme] = useState<string | null>(null);

  useEffect(() => {
    if (theme) {
      setCurrentTheme(theme);
    }
  }, [theme]);

  return (
    <div className={`code-sample ${className}`.trim()}>
      <div className="code-sample__header">
        {icon}
        <Text>{title}</Text>
      </div>
      <SyntaxHighlighter
        language={language}
        style={currentTheme === 'dark' ? dark : lightfair}
        customStyle={{
          background:
            currentTheme === 'dark'
              ? 'var(--grayscale-color-900)'
              : 'var(--grayscale-color-100)',
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
