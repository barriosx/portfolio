import React, { useState, useLayoutEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import images from "../data/images"
import carousel from "../styles/carousel.module.css"
import { useTransition, animated, config } from "react-spring"

const Carousel = () => {
  // Need to set up a state hook to keep track of what photo needs to be rendered and to keep track of which caption to show
  const [photo, setPhoto] = useState(0)

  // Need to fetch all the photos to be rendered inside the carousel
  // Using object deconstruction unpack the result object into the variable "allFile"
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(sort: { fields: name, order: ASC }, filter: { relativeDirectory: { eq: "carousel" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  // Each image fetched will be placed as an array item where each item is a JSX element
  const photosArray = allFile.edges.map((edge,index) => {
    return { id: edge.node.id, img: edge.node.childImageSharp }
  })

  // Need to set up useTransition 
  const transitions = useTransition(photosArray[photo], img => img.id, {
    from: { opacity: 0, position: 'absolute', width: '100%', height: '100%' },
    enter: { opacity: 1, position: 'absolute', width: '100%', height: '100%'},
    leave: { opacity: 0, position: 'absolute', width: '100%', height: '100%'},
    config: config.slow,
  })

  // Need an effect hook to set interval function that changes the photo state from 0->4
  useLayoutEffect(() => void setInterval(() => setPhoto(stateValue => (stateValue + 1) % 5), 6000), [])

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
          // const Photo = photosArray[item]
          // <Photo key={key} style={props} />
          return <animated.div key={key} style={props}><Img key={key} fluid={item.img.fluid} className={carousel.carouselImage} /></animated.div>
        })
      }
      {photoCaption}
    </div>
  );
}
export default Carousel