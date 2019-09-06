import React from 'react';
import { useTheme } from '../ThemeContext';
import styled, { withTheme } from 'styled-components';
import { Breakpoint } from 'react-socks';
import { navbarBackgroundColor, navbarBackgroundImage, navbarAccentColor, navbarAccentColorRGBA,
  backgroundColor, textColor, primaryColor, accentColor } from '../theme';
import { Navbar, Nav, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faStar } from '@fortawesome/free-regular-svg-icons'
import { faFlask, faBars } from '@fortawesome/free-solid-svg-icons'


function CustomNavbar (props) {

  // get toggle context with useTheme
  const theme = useTheme();

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

  let buttonTitle;
  if (props.theme.mode === 'light') {
    buttonTitle = 
      <span>
        (Star)Light <FontAwesomeIcon icon={faStar}/>
      </span>
  } else if (props.theme.mode === 'dark') {
    buttonTitle = 
      <span>
        Dark <FontAwesomeIcon icon={faMoon}/>
      </span>
  } else {
    buttonTitle = 
      <span>
        Scentist <FontAwesomeIcon icon={faFlask}/>
      </span>
  }

  return (
    <div>
      {/* expand "lg" collapses the navbar when the window gets smaller than the 'lg' breakpoint */}
      <StyledNavbar expand="lg">
        <Navbar.Brand className="hvr-grow" href="/">vixxstats</Navbar.Brand>
        <StyledToggleWrapper>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBars}/>
          </Navbar.Toggle>
          
        </StyledToggleWrapper>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#link">Interactive Stats</Nav.Link>
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
            <Breakpoint large down>
              <NavDropdown title={buttonTitle} id="theme-nav-dropdown">
                <Dropdown.Item as="button" onClick={() => theme.set('light')}>
                  (Star)Light <FontAwesomeIcon icon={faStar}/>
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => theme.set('dark')}>
                  Dark <FontAwesomeIcon icon={faMoon}/>
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => theme.set('scentist')}>
                  Scentist <FontAwesomeIcon icon={faFlask}/>
                </Dropdown.Item>
              </NavDropdown>
            </Breakpoint>
          </Nav>
          <Breakpoint large up>
            <StyledButton>
              <StyledDropdown>
              <DropdownButton variant="outline-primary" alignRight title={buttonTitle} id="dropdown-theme">
                <Dropdown.Item as="button" onClick={() => theme.set('light')}>
                  (Star)Light <FontAwesomeIcon icon={faStar}/>
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => theme.set('dark')}>
                  Dark <FontAwesomeIcon icon={faMoon}/>
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => theme.set('scentist')}>
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

