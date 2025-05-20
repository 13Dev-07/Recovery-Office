/**
 * Theme Provider
 * 
 * This component provides the theme to all components in the application.
 * It uses styled-components' ThemeProvider to inject the theme into the component tree.
 */

import React, { createContext, useContext, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { premiumTheme } from './theme.premium';
import { RecoveryOfficeTheme } from '../types';
import GlobalStyles from './globalStyles';

// Theme context with default
export const ThemeContext = createContext<{
  theme: RecoveryOfficeTheme;
  toggleTheme: () => void;
  setMode: (mode: 'light' | 'dark' | 'premium') => void;
}>({
  theme: lightTheme,
  toggleTheme: () => {},
  setMode: () => {},
});

/**
 * Props for the ThemeProvider component
 */
interface ThemeProviderProps {
  /**
   * The children components to render within the theme provider
   */
  children: React.ReactNode;
  
  /**
   * Optional initial mode (light, dark, or premium)
   * @default 'light'
   */
  initialMode?: 'light' | 'dark' | 'premium';
}

/**
 * The ThemeProvider component
 * 
 * This component wraps the application and provides the theme context
 * to all styled components. It also applies the global styles.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialMode = 'light'
}) => {
  // Store the current theme mode in state
  const [mode, setMode] = React.useState<'light' | 'dark' | 'premium'>(initialMode);

  // Memoize the theme object
  const theme = useMemo(() => {
    switch (mode) {
      case 'dark':
        return darkTheme;
      case 'premium':
        return premiumTheme;
      default:
        return lightTheme;
    }
  }, [mode]);

  // Toggle between light and dark modes
  const toggleTheme = () => {
    setMode((prevMode) => {
      // Skip the premium mode when toggling
      if (prevMode === 'light') return 'dark';
      if (prevMode === 'dark') return 'light';
      return 'light';
    });
  };

  // Render the provider with the current theme
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setMode }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider; 





