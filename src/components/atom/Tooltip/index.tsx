import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { TooltipProps } from './types';

import './styles.css';

export default function Tooltip({
  afterShow,
  children,
  clickable = false,
  content,
  id,
  isOpen,
  noArrow = false,
  offset = 10,
  openOnClick = false,
  place = 'top',
  className = '',
}: TooltipProps) {
  return (
    <div className={`tooltip ${className}`.trim()}>
      <div data-tooltip-id={id}>{children}</div>
      <ReactTooltip
        clickable={clickable}
        id={id}
        place={place}
        children={content}
        style={{ position: 'absolute' }}
        isOpen={isOpen}
        noArrow={noArrow}
        offset={offset}
        openOnClick={openOnClick}
        afterShow={afterShow}
      />
    </div>
  );
}
