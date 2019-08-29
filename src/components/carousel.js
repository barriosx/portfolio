import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import images from "../data/images"
import carousel from "../styles/carousel.module.css"
import { useTransition, animated, config } from "react-spring"

const Carousel = () => {
  // Need to fetch all the photos to be rendered inside the carousel
  const data = useStaticQuery(graphql`
    query {
      portrait: file(relativePath: { eq: "portrait.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      conedison: file(relativePath: { eq: "coned.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      conedison2: file(relativePath: {eq: "coned2.jpg"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      summertech: file(relativePath: { eq: "summertech.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mta: file(relativePath: { eq: "mta.jpg"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  // Need to set up a state hook to keep track of what photo needs to be rendered and to keep track of which caption to show
  const [photo, setPhoto] = useState(0)

  // Each image fetched will be placed as an array item where each item is a JSX element
  const imagesArray = Object.keys(data).map((img, index) => {
    return ({style}) => <animated.div style={style}><Img fluid={data[img].childImageSharp.fluid} className={carousel.carouselImage} /></animated.div>
  })
  
  // Need an effect hook to set interval function that changes the photo state from 0->3
  useEffect(() => void setInterval(() => setPhoto(stateValue => (stateValue + 1) % 5), 6000), [])
 
  // Need to set up useTransition 
  const transitions = useTransition(photo, p=>p, {
    from: { opacity: 0, position: 'absolute', width: '100%', height: '100%' },
    enter: { opacity: 1, position: 'absolute', width: '100%', height: '100%'},
    leave: { opacity: 0, position: 'absolute', width: '100%', height: '100%'},
    config: config.stiff,
  })

  let photoCaption = (
    <div className={carousel.caption}>
      <h3>{images[photo].name}</h3>
      <p>{images[photo].description}</p>
    </div>
  );


  return (
    <div className={carousel.carousel}>
      {
        transitions.map(({item, props, key}) => {
          const Photo = imagesArray[item]
          return <Photo key={key} style={props} />
        })
      }
      {photoCaption}
    </div>
  );
}
export default Carousel