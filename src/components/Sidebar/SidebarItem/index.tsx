import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface SidebarItemProps {
  link: string;
  iconName: IconProp;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ link, iconName, label }) => {
  return (
    <li>
      <NavLink to={link} exact>
        <div className="sidebar-inner">
          <div className="sidebar-font-item">
            <FontAwesomeIcon icon={iconName} size="lg" />
          </div>
          <p>{label}</p>
        </div>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
