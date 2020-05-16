import React from 'react';
import { Themes } from '../../utilities/Enums';

export const ThemeContext = React.createContext({
  theme: Themes.Green,
  setTheme: (theme: Themes) => {},
});
