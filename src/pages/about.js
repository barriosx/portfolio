import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import about from "../styles/about.module.css"
import AboutImage from "../components/about-img";
import Socials from "../components/socials";
import Navbar from "../components/navbar";


const About = () => (
  <>
    <Navbar />
    <Layout>
      <SEO title="About" />
      <div className={about.center}>
        <AboutImage />

        <p>I'm glad you want to get more familiar! Here's a quick overview of who I am:</p>
        <ul>
          <li>
            I was born and currently live in NY, and am of Guatemalan and Salvadoran ethnicity <span role="img" aria-label="Guatemala">🇬🇹</span> <span role="img" aria-label="El Salvador">🇸🇻</span>
          </li>
          <li>  
            I like to travel <span role="img" aria-label="Plane Emoji">✈️</span> and I consider myself a foodie <span role="img" aria-label="Silverware Emoji">🍴</span>
          </li>
          <li>
            I listen to EDM, Hip-Hop, and latin music <span role="img" aria-label="Headphones Emoji">🎧</span>
          </li>
        </ul>
        <p>If that isn't enough information, add me on my social media accounts!</p>
        <Socials />
      </div>  
    </Layout>  
  </>
)

export default About
