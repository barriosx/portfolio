import React from "react"
import header from "../styles/header.module.css"

const Socials = () => {


  return (
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
      <li>
        <a href="https://twitter.com/_stevenbarrios/" className="pure button button-socicon"><span className="socicon socicon-twitter"></span></a>
      </li>
    </ul>
  )

}

export default Socials