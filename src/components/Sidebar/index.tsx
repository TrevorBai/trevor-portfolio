import React, { useContext, FC } from 'react';
import SidebarItem from './SidebarItem';
import {
  FontIconLabel,
  FontIcon,
  Routes,
  FontIconModule,
} from '../../utilities/Enums';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ThemeContext } from '../ThemeContext';
import { themeEnumToClass } from '../../utilities';

interface SidebarProps {
  show: boolean;
}

const Sidebar: FC<SidebarProps> = ({ show }) => {
  const { theme } = useContext(ThemeContext);
  const themeClass = themeEnumToClass(theme);

  type LocalSidebarItemProps = {
    link: string;
    iconName: IconProp;
    label: string;
  };

  const sidebarItems: LocalSidebarItemProps[] = [
    {
      label: FontIconLabel.Home,
      iconName: FontIcon.Home,
      link: Routes.Home,
    },
    {
      label: FontIconLabel.MyWebsites,
      iconName: [FontIconModule.Brands, FontIcon.Chrome],
      link: Routes.MyWebsites,
    },
    {
      label: FontIconLabel.MyApps,
      iconName: [FontIconModule.Brands, FontIcon.AppStore],
      link: Routes.MyApps,
    },
    {
      label: FontIconLabel.MyGames,
      iconName: FontIcon.Chess,
      link: Routes.MyGames,
    },
    {
      label: FontIconLabel.MyCertificates,
      iconName: FontIcon.Award,
      link: Routes.MyCertificates,
    },
    {
      label: FontIconLabel.ChatRoom,
      iconName: [FontIconModule.Brands, FontIcon.RocketChat],
      link: Routes.ChatRoom,
    },
    {
      label: FontIconLabel.ConnectingDots,
      iconName: FontIcon.Infinity,
      link: Routes.ConnectingDots,
    },
    {
      label: FontIconLabel.Settings,
      iconName: FontIcon.Cog,
      link: Routes.Settings,
    },
  ];

  return (
    <nav
      className={'bg-secondary sidebar'.concat(
        ' ',
        show ? '' : 'sidebar-narrow ',
        themeClass,
        themeClass && '-secondary'
      )}
    >
      <ul>
        {sidebarItems.map(
          (cur: LocalSidebarItemProps): JSX.Element => (
            <SidebarItem
              key={cur.label}
              link={cur.link}
              iconName={cur.iconName as IconProp}
              label={cur.label}
              show={show}
            />
          )
        )}
      </ul>
    </nav>
  );
};

export default Sidebar;
