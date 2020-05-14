import React from 'react';
import avatar from '../../assets/images/avatar.png';
import { HeaderItem } from './HeaderItem';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontIcon, FontIconModule } from '../Enums';

interface HeaderProps {
  sidebarToggleClicked: () => void;
  show: boolean;
}

const Header: React.FC<HeaderProps> = ({ sidebarToggleClicked, show }) => {
  type IconName = { iconName: IconProp };

  const headerItemsCenter: IconName[] = [
    {
      iconName: [FontIconModule.Regular, FontIcon.LifeRing],
    },
    {
      iconName: FontIcon.Comments,
    },
    {
      iconName: FontIcon.Bell,
    },
  ];

  return (
    <header className="masthead-container bg-white">
      <div
        className={'masthead-container-start bg-dark'.concat(
          ' ',
          show ? '' : 'masthead-container-start-narrow'
        )}
      >
        {show && <p className="masthead-container-start-bold">trevor dash</p>}
        <HeaderItem
          className="masthead-container-start-menu"
          icon={FontIcon.Bars}
          clicked={sidebarToggleClicked}
        />
      </div>
      <div className="masthead-container-center">
        <div></div>
        <ul>
          {headerItemsCenter.map(
            (cur: IconName): JSX.Element => (
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
                />
              </li>
            )
          )}
        </ul>
      </div>
      <div className="masthead-container-end">
        <p>Trevor Bai</p>
        <HeaderItem
          className="masthead-container-end-font-item"
          icon={FontIcon.AngleDown}
        />
        <img className="round-img" src={avatar} alt="Avatar" />
      </div>
    </header>
  );
};

export default Header;
