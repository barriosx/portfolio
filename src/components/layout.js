/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 * 
 * Serves as the main container for all content within the portfolio app.
 * 
 * 
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import layout from "../styles/layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={layout.container}>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
