import PropTypes from "prop-types"
import React from "react"
import Greeting from "./greeting"
import { graphql, useStaticQuery } from "gatsby"

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
    <h2>I'm a developer <span role="img" aria-label="developer">👨🏻‍💻</span> located in NYC <span role="img" aria-label="nyc">🗽</span>.</h2>
    <p>If you need an quick way to get to know me, <a href={data.file.publicURL} target="_blank">read my resume.</a></p>
    {/* Put links to social media here */}

  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

}
export default Header
