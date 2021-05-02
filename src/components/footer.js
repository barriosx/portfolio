import React from "react"
import Socials from "./socials"
import * as footer from "../styles/footer.module.css"

const Footer = ({style}) => {
  const styles = style || null;
  return (
    <footer className={footer.footer} style={styles}>
      <Socials />
    </footer>
  )
}

export default Footer