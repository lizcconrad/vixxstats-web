import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { backgroundColor, textColor } from './theme';

// define our toggle context, with a default empty toggle function
const ThemeSetContext = React.createContext({
  set: () => {}
});

// define exportable useContext hook object
export const useTheme = () => React.useContext(ThemeSetContext);

// define MyThemeProvider
export const MyThemeProvider = ({ children }) => {

  // Wrapper providing some page styling based on theme
  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;

  // default mode is set to 'light'
  const [themeState, setThemeState] = React.useState({ mode: 'light' });

  // define toggle function
  // toggle() switches 'mode' between light and dark, and updates themeState
  const set = (mode) => {
    setThemeState({ mode: mode });
  };

  // render both contexts, then Wrapper, then children
  return(
    <ThemeSetContext.Provider value={{ set: set }} >
      <ThemeProvider theme={{ mode: themeState.mode }}>
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeSetContext.Provider>
  );

};

export default ThemeProvider
