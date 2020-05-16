import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ThemeContext } from '../../ThemeContext';
import { themeEnumToClass } from '../../../utilities';

interface HeaderItemProps {
  clicked?: () => void;
  className: string;
  icon: IconProp;
  showOnHover?: Boolean;
}

export const HeaderItem: React.FC<HeaderItemProps> = ({
  clicked,
  icon,
  className,
  showOnHover,
}): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const themeClass = themeEnumToClass(theme);

  return (
    <>
      <button onClick={clicked}>
        <FontAwesomeIcon className={className} icon={icon} />
      </button>
      {showOnHover && (
        <div>
          <div className="triangle-up"></div>
          <p
            className={'masthead-container-center-notifications-message bg-dark'.concat(
              ' ',
              themeClass
            )}
          >
            You have no unread notifications
          </p>
        </div>
      )}
    </>
  );
};
