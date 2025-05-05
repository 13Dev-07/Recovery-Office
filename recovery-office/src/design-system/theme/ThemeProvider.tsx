/**
 * Theme Provider
 * 
 * This component provides the theme to all components in the application.
 * It uses styled-components' ThemeProvider to inject the theme into the component tree.
 */

import * as React from 'react';
import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';
import lightTheme, { darkTheme } from './theme';
import GlobalStyles from './globalStyles';

/**
 * Props for the ThemeProvider component
 */
interface ThemeProviderProps {
  /**
   * The children components to render within the theme provider
   */
  children: ReactNode;
  
  /**
   * Optional theme mode (light or dark)
   * @default 'light'
   */
  mode?: 'light' | 'dark';
}

/**
 * The ThemeProvider component
 * 
 * This component wraps the application and provides the theme context
 * to all styled components. It also applies the global styles.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  mode = 'light'
}) => {
  // Select the theme based on the provided mode
  const theme: DefaultTheme = mode === 'light' ? lightTheme : darkTheme;
  
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider; 





