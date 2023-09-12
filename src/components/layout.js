/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

// import Header from "./header"
import "./layout.css"
import "./layout-custom.css"
import Navigation from "./navigation"

const Layout = ({ children }) => {
 
  return (
    <>
      
      <div>
        <Navigation />
        <main>{children}</main>
        
        <footer>
          © {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
