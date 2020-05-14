import React from 'react';
import SidebarItem from './SidebarItem';
import { FontIconLabel, FontIcon, Routes, FontIconModule } from '../Enums';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SidebarItemProps } from './SidebarItem';

const Sidebar = () => {

  const sidebarItems: SidebarItemProps[] = [
    {
      label: FontIconLabel.Home,
      iconName: FontIcon.Home,
      link: Routes.Home
    },
    {
      label: FontIconLabel.Dashboard,
      iconName: FontIcon.ChartBar,
      link: Routes.Dashboard
    },
    {
      label: FontIconLabel.AboutMe,
      iconName: [FontIconModule.Regular, FontIcon.User],
      link: Routes.AboutMe
    },
    {
      label: FontIconLabel.Products,
      iconName: FontIcon.ToriiGate,
      link: Routes.Products
    },
    {
      label: FontIconLabel.Invoices,
      iconName: FontIcon.Receipt,
      link: Routes.Invoices
    },
    {
      label: FontIconLabel.MailMarketing,
      iconName: [FontIconModule.Regular, FontIcon.Envelope],
      link: Routes.MailMarketing
    },
    {
      label: FontIconLabel.ChatRoom,
      iconName: [FontIconModule.Brands, FontIcon.RocketChat],
      link: Routes.ChatRoom
    },
    {
      label: FontIconLabel.Calendar,
      iconName: FontIcon.Calendar,
      link: Routes.Calendar
    },
    {
      label: FontIconLabel.HelpCenter,
      iconName: [FontIconModule.Regular, FontIcon.LifeRing],
      link: Routes.HelpCenter
    },
    {
      label: FontIconLabel.Settings,
      iconName: FontIcon.Cog,
      link: Routes.Settings
    },
  ];

  return (
    <nav className="bg-secondary sidebar">
      <ul>
        {sidebarItems.map((cur: SidebarItemProps): JSX.Element => (
          <SidebarItem
            key={cur.label}
            link={cur.link}
            iconName={cur.iconName as IconProp}
            label={cur.label}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;