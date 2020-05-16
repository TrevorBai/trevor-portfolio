import { Themes, ThemeScssClasses } from './Enums';

export const themeEnumToClass = (theme: Themes): string => {
  switch (theme) {
    case Themes.Blue:
      return ThemeScssClasses.Blue;
    case Themes.Grey:
      return ThemeScssClasses.Grey;
    case Themes.Maroon:
      return ThemeScssClasses.Maroon;
    default:
      return ThemeScssClasses.Green;
  }
};
