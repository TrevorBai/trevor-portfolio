import React, { useContext } from 'react';
import avatar from '../../assets/images/avatar.png';
import { HeaderItem } from './HeaderItem';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontIcon, FontIconModule, Themes } from '../Enums';
import { ThemeContext } from '../ThemeContext';

interface HeaderProps {
  sidebarToggleClicked: () => void;
  show: boolean;
}

const Header: React.FC<HeaderProps> = ({ sidebarToggleClicked, show }) => {
  const { theme } = useContext(ThemeContext);

  let themeClass: string;
  switch (theme) {
    case Themes.Blue:
      themeClass = 'theme-blue';
      break;
    case Themes.Grey:
      themeClass = 'theme-grey';
      break;
    case Themes.Maroon:
      themeClass = 'theme-maroon';
      break;
    default:
      themeClass = '';
      break;
  }

  type HeaderIconCenterProp = { iconName: IconProp; showOnHover?: Boolean };

  const headerItemsCenter: HeaderIconCenterProp[] = [
    {
      iconName: [FontIconModule.Regular, FontIcon.LifeRing],
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
        {show && <p className="masthead-container-start-bold">trevor dash</p>}
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
          '-color'
        )}
      >
        <div></div>
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
            '-color'
          )}
          icon={FontIcon.AngleDown}
        />
        <img className="round-img" src={avatar} alt="Avatar" />
      </div>
    </header>
  );
};

export default Header;
