import React, { useContext, FC } from 'react';
import avatar from '../../assets/images/avatar/avatar.png';
import { HeaderItem } from './HeaderItem';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontIcon } from '../../utilities/Enums';
import { ThemeContext } from '../ThemeContext';
import { themeEnumToClass } from '../../utilities';

interface HeaderProps {
  sidebarToggleClicked: () => void;
  show: boolean;
}

const Header: FC<HeaderProps> = ({ sidebarToggleClicked, show }) => {
  const { theme } = useContext(ThemeContext);

  const themeClass = themeEnumToClass(theme);

  type HeaderIconCenterProp = { iconName: IconProp; showOnHover?: Boolean };

  const headerItemsCenter: HeaderIconCenterProp[] = [
    {
      iconName: FontIcon.App,
    },
    {
      iconName: FontIcon.Comments,
    },
    {
      iconName: FontIcon.Bell,
      showOnHover: true,
    },
  ];

  return (
    <header className="masthead-container bg-white">
      <div
        className={'masthead-container-start bg-dark'.concat(
          ' ',
          show ? '' : 'masthead-container-start-narrow ',
          themeClass
        )}
      >
        {show && (
          <p className="masthead-container-start-bold masthead-container-start-animation-left">
            trev portfolio
          </p>
        )}
        <HeaderItem
          className="masthead-container-start-menu"
          icon={FontIcon.Bars}
          clicked={sidebarToggleClicked}
        />
      </div>
      <div
        className={'masthead-container-center'.concat(
          ' ',
          themeClass,
          themeClass && '-color'
        )}
      >
        <div>
          {!show && (
            <p
              className={'masthead-container-center-bold'.concat(
                ' ',
                themeClass,
                themeClass && '-color-secondary'
              )}
            >
              trev portfolio
            </p>
          )}
        </div>
        <ul>
          {headerItemsCenter.map(
            (cur: HeaderIconCenterProp): JSX.Element => (
              <li
                className="masthead-container-center-item"
                key={
                  typeof cur.iconName === 'object'
                    ? cur.iconName.toString()
                    : cur.iconName
                }
              >
                <HeaderItem
                  className="masthead-container-center-font-item"
                  icon={cur.iconName}
                  showOnHover={cur.showOnHover}
                />
              </li>
            )
          )}
        </ul>
      </div>
      <div className="masthead-container-end">
        <p>Trevor Bai</p>
        <HeaderItem
          className={'masthead-container-end-font-item'.concat(
            ' ',
            themeClass,
            themeClass && '-color'
          )}
          icon={FontIcon.AngleDown}
        />
        <img className="round-img" src={avatar} alt="Avatar" />
      </div>
    </header>
  );
};

export default Header;
