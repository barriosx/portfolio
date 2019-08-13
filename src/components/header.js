// import PropTypes from "prop-types"
import React from "react"
import Greeting from "./greeting"
import { graphql, useStaticQuery } from "gatsby"

import header from "../styles/header.module.css"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
  {
    file(extension: { eq: "pdf" } ) {
      publicURL
    }
  }
`)
return (
  <>
    <Greeting />
    <h3>I'm a developer <span role="img" aria-label="developer">👨🏻‍💻</span> located in NYC <span role="img" aria-label="nyc">🗽</span>.</h3>
    <p className={header.text}>If you need an quick way to get to know me, <a href={data.file.publicURL} rel="noopener noreferrer" target="_blank">read my resume.</a></p>
    <a href="mailto:stevenbarrios03@gmail.com" className={header.email}>stevenbarrios03@gmail.com</a>
    <ul className={header.social}>
          <li>
            <a href="https://www.linkedin.com/in/steven-elias-barrios/" className="pure-button button-socicon"><span className="socicon socicon-linkedin"></span></a>
          </li>
          <li>
            <a href="https://github.com/barriosx/" className="pure-button button-socicon"><span className="socicon socicon-github"></span></a>
          </li>
          <li>
            <a href="https://codepen.io/stevenbarrios/" className="pure-button button-socicon"><span className="socicon socicon-codepen"></span></a>
          </li>
          <li>
            <a href="https://www.instagram.com/_stevenbarrios/?hl=en" className="pure button button-socicon"><span className="socicon socicon-instagram"></span></a>
          </li>
        </ul>
  </>
)
}
export default Header
