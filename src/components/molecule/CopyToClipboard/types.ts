enum CopyToClipboardPlaces {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}

export interface CopyToClipboardProps {
  className?: string;
  id: string;
  children: React.ReactNode;
  textToCopy: string;
  successCopyMessage: string;
  place?: keyof typeof CopyToClipboardPlaces;
  successMessageTime?: number;
}
