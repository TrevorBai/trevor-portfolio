import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  const [show, setShow] = useState(true);
  const sidebarToggleHandler = () => {
    setShow(!show);
  };

  return (
    <React.Fragment>
      <Header sidebarToggleClicked={sidebarToggleHandler} show={show} />
      <div className="container bg-light">
        <Sidebar />
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
