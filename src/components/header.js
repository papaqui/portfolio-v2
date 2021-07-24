import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import * as headerStyles from './header.module.scss'

import ProfilePhoto from '../images/Fernando_Papaqui_profile_photo.jpg'

const Header = () => {
  // Create a variable to store the data we're fetching from the graphql api
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <Link className={headerStyles.title} to="/">
        <div className={headerStyles.headerLogo}>
          <img src={ProfilePhoto} alt="Fernando Papaqui" />
          <h2>
            {/* Inyect the value from graphql */}
            {data.site.siteMetadata.title}
          </h2>
        </div>
      </Link>
      <div>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/work"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
