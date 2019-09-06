import React from 'react';
import { useTheme } from '../ThemeContext';
import theme from 'styled-theming';
import styled, { withTheme } from 'styled-components';
import { Breakpoint } from 'react-socks';
import { backgroundColor, textColor, primaryColor, accentColor } from '../theme';
import { Navbar, Nav, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faStar } from '@fortawesome/free-regular-svg-icons'
import { faFlask, faBars } from '@fortawesome/free-solid-svg-icons'
import { FormattedMessage } from 'react-intl';


function CustomNavbar (props) {

  // get toggle context with useTheme
  const themeContext = useTheme();

  // Navbar theming
  const navbarBackgroundColor = theme('mode', {
    light: '#002147',
    dark: '#222',
    scentist: '#CD3E80'
  });

  const navbarBackgroundImage = theme('mode', {
    light: 'none',
    dark: 'none',
    scentist: 'linear-gradient(to bottom right, #CD3E80, #D16257);'
  })

  const navbarAccentColor = theme('mode', {
    light: '#D6AD69',
    dark: '#fff',
    scentist: '#fff'
  });
  const navbarAccentColorRGBA = theme('mode', {
    light: 'rgb(214,173,105,0.5)',
    dark: 'rgb(255,255,255,0.5)',
    scentist: 'rgb(255,255,255,0.5)'
  });


  // StyledNavbar: changes the coloring and hover behavior of the links in the navbar
  // #region
  const StyledNavbar = styled(Navbar)`
    background-color: ${navbarBackgroundColor};
    background-image: ${navbarBackgroundImage};
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);

    .hvr-underline-from-center:before {
      background: ${navbarAccentColor};
      height: 0.1rem;
    }

    .navbar-brand, .navbar-brand:hover {
      color: ${navbarAccentColor};
    }

    .navbar-collapse .navbar-nav .nav-link {
      color: ${navbarAccentColor};
      opacity: 0.5;
      transition: opacity .25s ease-in-out;

      &:hover {
        opacity: 1;
      }

    }

  `;
  // #endregion

  // StyledDropdown: changes the color and hover behavior of dropdowns in the navbar
  // #region
  const StyledDropdown = styled.div`
    .dropdown-menu {
      background-color: ${backgroundColor};
    }

    .dropdown-item {
      color: ${textColor};

      &:hover {
        color: ${accentColor};
        background-color: ${primaryColor}
      }

    }

  `;
  // #endregion

  // StyledButton: changes the color and hover behavior of the dropdown buttons in the navbar
  // #region
  const StyledButton = styled.div`
    .btn-outline-primary {
      color: ${navbarAccentColor};
      border-color: ${navbarAccentColor};

      &:hover {
        color: ${navbarBackgroundColor};
        background-color: ${navbarAccentColor};
      }

      &.dropdown-toggle:focus {
        box-shadow: 0 0 0 0.2rem ${navbarAccentColorRGBA};
      }
      
    }
    
    .btn-outline-primary:not(:disabled):not(.disabled):active {
      color: ${navbarBackgroundColor};
      background-color: ${navbarAccentColor};
      border-color: ${navbarAccentColor};
    }

    .show .dropdown-toggle {
      color: ${navbarBackgroundColor};
      background-color: ${navbarAccentColor};
    }
  `;
  // #endregion

  // StyledToggleWrapper: changes the icon of the navbar toggle icon that shows on smaller screens
  // #region
  const StyledToggleWrapper = styled.div`

    .navbar-toggler {
      border: none;
    }

    .navbar-toggler:focus {
      outline-color: ${navbarAccentColor};
    }

    .navbar-toggler-icon {
      background-image: none;
    }

    svg {
      color: ${navbarAccentColor};
    }
  `;
  // #endregion

  // the title of the button/dropdown for the theme switcher
  let themeTitle;
  if (props.theme.mode === 'light') {
    themeTitle = 
      <span>
        (Star)Light <FontAwesomeIcon icon={faStar}/>
      </span>
  } else if (props.theme.mode === 'dark') {
    themeTitle = 
      <span>
        Dark <FontAwesomeIcon icon={faMoon}/>
      </span>
  } else {
    themeTitle = 
      <span>
        Scentist <FontAwesomeIcon icon={faFlask}/>
      </span>
  }

  return (
    <div>
      {/* expand "lg" collapses the navbar when the window gets smaller than the 'lg' breakpoint */}
      <StyledNavbar expand="lg">
        <Navbar.Brand className="hvr-grow" href="/">vixxstats</Navbar.Brand>

        {/* the toggle icon for smaller screens */}
        <StyledToggleWrapper>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBars}/>
          </Navbar.Toggle>
        </StyledToggleWrapper>

        {/* all the content to be collapsed on smaller screens */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">
              <FormattedMessage id="CustomNavbar.homeLink" defaultMessage="HOME"/>
            </Nav.Link>

            <StyledDropdown>
              <NavDropdown title="Members" id="members-nav-dropdown">
                <NavDropdown.Item href="/members/N">N</NavDropdown.Item>
                <NavDropdown.Item href="/members/LEO">LEO</NavDropdown.Item>
                <NavDropdown.Item href="/members/KEN">KEN</NavDropdown.Item>
                <NavDropdown.Item href="/members/RAVI">RAVI</NavDropdown.Item>
                <NavDropdown.Item href="/members/HONGBIN">HONGBIN</NavDropdown.Item>
                <NavDropdown.Item href="/members/HYUK">HYUK</NavDropdown.Item>
              </NavDropdown>
            </StyledDropdown>

            {/* on smaller screens, display the theme switcher as a dropdown rather than a button */}
            <Breakpoint large down>
              <NavDropdown title={themeTitle} id="theme-nav-dropdown">
                <Dropdown.Item as="button" onClick={() => themeContext.set('light')}>
                  (Star)Light <FontAwesomeIcon icon={faStar}/>
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => themeContext.set('dark')}>
                  Dark <FontAwesomeIcon icon={faMoon}/>
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => themeContext.set('scentist')}>
                  Scentist <FontAwesomeIcon icon={faFlask}/>
                </Dropdown.Item>
              </NavDropdown>
            </Breakpoint>
          </Nav>

          {/* on larger screens, display the theme switcher as a button */}
          <Breakpoint large up>
            <StyledButton>
              <StyledDropdown>
              <DropdownButton variant="outline-primary" alignRight title={themeTitle} id="dropdown-theme">
                <Dropdown.Item as="button" onClick={() => themeContext.set('light')}>
                  (Star)Light <FontAwesomeIcon icon={faStar}/>
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => themeContext.set('dark')}>
                  Dark <FontAwesomeIcon icon={faMoon}/>
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => themeContext.set('scentist')}>
                  Scentist <FontAwesomeIcon icon={faFlask}/>
                </Dropdown.Item>
              </DropdownButton>
              </StyledDropdown>
              </StyledButton>
          </Breakpoint>
        </Navbar.Collapse>
      </StyledNavbar>
    </div>
  )

}

export default withTheme(CustomNavbar);