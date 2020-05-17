import React, { useContext } from 'react';
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

const Sidebar: React.FC<SidebarProps> = ({ show }) => {
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
      label: FontIconLabel.Invoices,
      iconName: FontIcon.Receipt,
      link: Routes.Invoices,
    },
    {
      label: FontIconLabel.MailMarketing,
      iconName: [FontIconModule.Regular, FontIcon.Envelope],
      link: Routes.MailMarketing,
    },
    {
      label: FontIconLabel.ChatRoom,
      iconName: [FontIconModule.Brands, FontIcon.RocketChat],
      link: Routes.ChatRoom,
    },
    {
      label: FontIconLabel.Calendar,
      iconName: FontIcon.Calendar,
      link: Routes.Calendar,
    },
    {
      label: FontIconLabel.CsvReader,
      iconName: FontIcon.CsvReader,
      link: Routes.CsvReader,
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
