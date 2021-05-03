import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import * as navbar from "../styles/navbar.module.css"

const Navbar = () => (
  <nav className={navbar.nav}>
    <Link to='/'>Home</Link>
    <Link to='/projects'>Projects/Work</Link>
    <Link to='/about'>About Me</Link>
  </nav>
)

export default Navbar