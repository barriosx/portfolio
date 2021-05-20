import React from "react"
import Img from "gatsby-image"
import * as image from "../styles/image.module.css"

const CarouselImage = ({fluidImg}) =>{

  return (
    <Img fluid={fluidImg} className={image.projectImage} />
  )
}

export default CarouselImage