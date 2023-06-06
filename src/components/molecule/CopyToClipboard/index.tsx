import Tooltip from '@/components/atom/Tooltip';

import { CopyToClipboardProps } from './types';

import './styles.css';

export default function CopyToClipboard({
  children,
  id,
  successCopyMessage,
  textToCopy,
  place,
  className = '',
}: CopyToClipboardProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <Tooltip
      className={`copy-to-clipboard ${className}`.trim()}
      id={id}
      place={place}
      openOnClick
      afterShow={handleCopy}
      content={successCopyMessage}
    >
      {children}
    </Tooltip>
  );
}
