import React, {useState, useEffect} from "react"
import {useTransition, animated, config} from "react-spring"
import { useStaticQuery, graphql } from "gatsby"
import CarouselImage from "./carousel-img"
import carousel from "../styles/carousel.module.css"

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
  // Need to set up a state hook to keep track of what photo needs to be rendered
  const [photo, setPhoto] = useState(0);
  
  let photoChosen = <CarouselImage fluidImg={data[Object.keys(data)[photo]].childImageSharp.fluid} />
  // Need indicators to help select between photos.
  const indicators = Object.keys(data).map((key,index)=>{
    // Each indicator has onClick function which updates photo state variable in our hook
    return <li key={key} className={carousel.indicator} onClick={() => setPhoto(index)}></li>
  });


  return (
    <div className={carousel.carousel}>
      {photoChosen}
      <div className={carousel.caption}>
        <h3>Hello</h3>
        <p>sub hello</p>
      </div>
      <ul className={carousel.indicators}>
        {indicators}
      </ul>
    </div>
  );
}
export default Carousel