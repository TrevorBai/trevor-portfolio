import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransitionWrapper } from '../../TransitionWrapper';

export interface SidebarItemProps {
  link: string;
  iconName: IconProp;
  label: string;
  show: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  link,
  iconName,
  label,
  show,
}) => {
  return (
    <li>
      <NavLink to={link} exact>
        <div className="sidebar-inner">
          <div className="sidebar-font-item">
            <FontAwesomeIcon icon={iconName} size="lg" />
          </div>
          <TransitionWrapper
            show={show}
            name="sideBarLabel"
            unmountOnExit={false}
          >
            <p>{label}</p>
          </TransitionWrapper>
        </div>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
