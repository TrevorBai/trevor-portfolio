import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface HeaderItemProps {
  clicked?: () => void;
  className: string;
  icon: IconProp;
}

export const HeaderItem: React.FC<HeaderItemProps> = ({
  clicked,
  icon,
  className,
}): JSX.Element => {
  return (
    <button onClick={clicked}>
      <FontAwesomeIcon className={className} icon={icon} />
    </button>
  );
};

