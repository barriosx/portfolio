import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import about from "../styles/about.module.css"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Carousel from "../components/carousel";


const About = () => (
  <>
    <Navbar />
    <Layout>
      <SEO title="About" />
      <div className={about.center}>
        <Carousel />
        <h1>Hey!</h1>
        <p>I'm glad you want to get more familiar! Here's a quick overview of who I am:</p>
        <ul>
          <li>
            I am currently a <b>Front End Engineer</b> at <a className="link" href="https://www.coned.com/en">Con Edison</a>.
          </li>
          <li>
            I work on feature development using Angular 10 and .NET to build PWAs whose interface and interactions meet my user's needs.
          </li>
          <li>
            I was born and raised in New York, and I am of Guatemalan and Salvadoran ethnicity <span role="img" aria-label="Guatemala">🇬🇹</span> <span role="img" aria-label="El Salvador">🇸🇻</span>
          </li>
          <li>  
            I like to travel <span role="img" aria-label="Plane Emoji">✈️</span> and I consider myself a foodie <span role="img" aria-label="Silverware Emoji">🍴</span>
          </li>
          <li>
            I listen to EDM, Hip-Hop, and latin music <span role="img" aria-label="Headphones Emoji">🎧</span>
          </li>
        </ul>
        <p>If you want to reach out, add me on any of my socials!</p>
      </div>  
    </Layout>  
    <Footer />
  </>
)

export default About
