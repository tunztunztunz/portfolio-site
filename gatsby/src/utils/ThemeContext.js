import React from 'react';
import { COLORS } from '../constants';

export const ThemeContext = React.createContext();

export const Theme = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );

    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = (newValue) => {
    const root = window.document.documentElement;

    // 1. Update React color-mode state
    rawSetColorMode(newValue);
    // 2. Update localStorage
    localStorage.setItem('color-mode', newValue);
    // 3. Update each color
    root.style.setProperty(
      '--color-text',
      newValue === 'light' ? COLORS.text.light : COLORS.text.dark
    );
    root.style.setProperty(
      '--color-background',
      newValue === 'light' ? COLORS.background.light : COLORS.background.dark
    );
    root.style.setProperty(
      '--color-primary',
      newValue === 'light' ? COLORS.primary.light : COLORS.primary.dark
    );
    root.style.setProperty(
      '--color-secondary',
      newValue === 'light' ? COLORS.secondary.light : COLORS.secondary.dark
    );
  };

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
