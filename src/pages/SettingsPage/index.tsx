import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Themes } from '../../components/Enums';
import { ThemeContext } from '../../components/ThemeContext';

const SettingsPage: React.FC<RouteComponentProps> = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setTheme(Themes[event.target.value as Themes]);
  };

  return (
    <header>
      <h1>Settings</h1>
      <form>
        <label>
          Pick your favorite theme:
          <select value={theme} onChange={handleChange}>
            <option value={Themes.Green}>Default</option>
            <option value={Themes.Blue}>Blue</option>
            <option value={Themes.Grey}>Grey</option>
            <option value={Themes.Maroon}>Maroon</option>
          </select>
        </label>
      </form>
    </header>
  );
};

export default SettingsPage;
