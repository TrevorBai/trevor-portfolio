import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Themes } from '../../components/Enums';
import { ThemeContext } from '../../components/ThemeContext';

interface LayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  const [show, setShow] = useState(true);
  const [theme, setTheme] = useState<Themes>(Themes.Green);
  const sidebarToggleHandler = () => {
    setShow(!show);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header sidebarToggleClicked={sidebarToggleHandler} show={show} />
      <div className="container bg-light">
        <Sidebar show={show} />
        <main>{children}</main>
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
