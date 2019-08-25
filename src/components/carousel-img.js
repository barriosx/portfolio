import React from "react"
import Img from "gatsby-image"
import image from "../styles/image.module.css"

const CarouselImage = ({fluidImg}) =>{    
  return (
    <Img fluid={fluidImg} className={image.carousel} />
  )
}

export default CarouselImage