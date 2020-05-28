import React, { useState, FC } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Themes } from '../../utilities/Enums';
import { ThemeContext } from '../../components/ThemeContext';
import { themeEnumToClass } from '../../utilities';

interface LayoutProps {
  children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  const [show, setShow] = useState(true);
  const [theme, setTheme] = useState<Themes>(Themes.Green);
  const sidebarToggleHandler = () => {
    setShow(!show);
  };

  const themeClass = themeEnumToClass(theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header sidebarToggleClicked={sidebarToggleHandler} show={show} />
      <div className={'container bg-light'.concat(' ', themeClass, themeClass && '-light')}>
        <Sidebar show={show} />
        <main className='main-container'>{children}</main>
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
