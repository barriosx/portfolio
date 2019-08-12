import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/projects'>Projects</Link>
    <Link to='/about'>About</Link>
  </nav>
)

export default Navbar