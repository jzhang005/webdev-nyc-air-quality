import React from 'react'
import { navigate } from 'gatsby'
import { Auth } from 'aws-amplify'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import { logout, isLoggedIn } from '../utils/auth'

const Header = ({ siteTitle, subpageTitle }) => (
  <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
    <Navbar.Brand style={styles.brand} onClick={() => navigate('/')}>
      {siteTitle}
    </Navbar.Brand>
    <Nav className='mr-auto'>
      {subpageTitle && (
        <Nav.Item className='text-secondary'>{subpageTitle}</Nav.Item>
      )}
    </Nav>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='mr-auto' />
      {isLoggedIn() ? (
        <Nav>
          <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
            <NavDropdown.Item
              style={styles.blue}
              onClick={() =>
                Auth.signOut()
                  .then(logout(() => navigate('/')))
                  .catch(err => console.log('eror:', err))
              }
            >
              Logout
            </NavDropdown.Item>
            <NavDropdown.Item
              style={styles.blue}
              onClick={() => navigate('/app/profile')}
            >
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item
              style={styles.blue}
              onClick={() => navigate('/app/datasources')}
            >
              Data sources
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      ) : (
        <Nav>
          <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
            <NavDropdown.Item
              style={styles.blue}
              onClick={() => navigate('/app/signup')}
              id='dropdown-signup-link'
            >
              Signup
            </NavDropdown.Item>
            <NavDropdown.Item
              style={styles.blue}
              onClick={() => navigate('/app/login')}
              id='dropdown-login-link'
            >
              Login
            </NavDropdown.Item>
            <NavDropdown.Item
              style={styles.blue}
              onClick={() => navigate('/app/datasources')}
            >
              Data sources
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      )}
    </Navbar.Collapse>
  </Navbar>
)

const styles = {
  brand: {
    cursor: 'pointer',
  },
  blue: {
    color: '#007bff',
  },
}

export default Header
