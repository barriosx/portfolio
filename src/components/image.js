import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import image from "../styles/image.module.css"
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 * 
 * Going to fetch all the images and then conditionally render the correct image, based on the prop passed in: imgPath
 * Gatsby does not support string interpolation inside the graphql template literal, so I can't simply pass it the imgPath prop (-_-). 
 */

const Image = ({imgPath}) => {
  let url = imgPath;
  const data = useStaticQuery(graphql`
    query {
      ezparknImg: file(relativePath: { eq: "ezparkn.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      smartchargeImg: file(relativePath: { eq: "smartcharge-plus.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ehosImg: file(relativePath: { eq: "cuny-ehos.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dominoImg: file(relativePath: { eq: "capicount.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if(url === "ezparkn.png") {
    return <Img fluid={data.ezparknImg.childImageSharp.fluid} className={image.projectImage} />
  }
  else if(url === "smartcharge-plus.png") {
    return <Img fluid={data.smartchargeImg.childImageSharp.fluid} className={image.projectImage} />
  }
  else if(url === "capicount.png") {
    return <Img fluid={data.dominoImg.childImageSharp.fluid} className={image.projectImage} />
  }
  else {
    return <Img fluid={data.ehosImg.childImageSharp.fluid} className={image.projectImage} />
  }
}

export default Image
