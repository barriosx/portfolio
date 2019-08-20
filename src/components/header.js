// import PropTypes from "prop-types"
import React from "react"
import Greeting from "./greeting"
import { graphql, useStaticQuery } from "gatsby"

import header from "../styles/header.module.css"

const Header = () => {
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
    <h3 className={header.subHeader}>I'm a developer <span role="img" aria-label="developer">👨🏻‍💻</span> located in NYC <span role="img" aria-label="nyc">🗽</span>.</h3>
    <p className="text">If you need an quick way to get to know me, <a className={header.resumeLink} href={data.file.publicURL} rel="noopener noreferrer" target="_blank">read my resume.</a></p>
  </>
)
}
export default Header
