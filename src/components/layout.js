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
import * as layout from "../styles/layout.module.css"
import {useSpring, animated} from "react-spring"


const Layout = ({ children }) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}, config: { tension:200, friction: 10}})

  return (
    <div className={layout.container}>
      <animated.div style={props}>
        {children}
      </animated.div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
