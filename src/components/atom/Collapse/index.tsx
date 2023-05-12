import { useRef, useState, useEffect } from 'react';

import { CollapseProps } from './types';

import './styles.css';

export default function Collapse({
  isOpen,
  setIsOpen,
  children,
  collapseHeader,
  className = '',
}: CollapseProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  return (
    <div className={`collapse-component ${className}`.trim()}>
      <div className="collapse-component__header" onClick={setIsOpen}>
        {collapseHeader}
      </div>
      <div className="collapse-component__content" style={{ height }}>
        <div ref={ref}>{children}</div>
      </div>
    </div>
  );
}
