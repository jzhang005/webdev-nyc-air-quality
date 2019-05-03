import React from 'react'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import { logout, isLoggedIn } from "../utils/auth"
import { Auth } from 'aws-amplify'
import { white } from 'ansi-colors';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'SteelBlue',
    }}
  >
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={styles.headerTitle}
        >
          {siteTitle}
        </Link>
      </h1>
      <h4 style={{ color: 'white', margin: 0}}>Dataset: Lorem ipsum dolor</h4>
      {
        isLoggedIn() && (
          <p
            onClick={
              () => Auth.signOut().then(logout(() => navigate('/app/login'))).catch(err => console.log('eror:', err))
            }
            style={styles.link}
          >Sign Out</p>
        )
      }
    </div>
  </div>
)

const styles = {
  headerTitle: {
    color: 'white',
    textDecoration: 'none',
  },
  link: {
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'underline'
  }
}

export default Header
