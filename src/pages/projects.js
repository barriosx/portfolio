import React, { useState, useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Image from "../components/image"
import carouselGIF from '../images/carousel.gif'
import typeaheadGIF from '../images/typeahead.gif'
import * as image from "../styles/image.module.css"
import * as projects from "../styles/projects.module.css"
import projects_data from "../data/projects"

const Projects = () => {
  const [activeItems, setActiveItems] = useState({
    personal: 0,
    college: 0,
    work: 0
  });
  const gifs =  {
    "carousel.gif": carouselGIF,
    "typeahead.gif": typeaheadGIF
  }

  // Main helper to take projects and return JSX
  const mapProjects = (projectsArr) => {
    const projectsMapped = projectsArr.map((proj,index) => {
      return (
        <div className={`${projects.project} ${activeItems[proj.type] === index ? projects.active : ''}`} key={index} 
          onClick={() => setActiveItems({...activeItems, [proj.type]: index})}>
          <div className={projects.projectImage}>
            { proj.type === 'work' ?
              <img src={gifs[proj.image_urls.main]} className={image.gif} /> :
              <Image imgPath={proj.image_urls.main} /> }
          </div>
          <div className={`${projects.projectCard}${proj.type === 'work' ? ` ${projects.offsetTallCard}` : ''}`}>
            <Card 
              title={proj.name} 
              description={proj.description} 
              github={proj.github_url} 
              demo={proj.live_url} 
              tech={proj.technologies} 
              isActive={activeItems[proj.type] === index}
            />
          </div>
        </div>
      )
    });
    return (
      <div className={projects.projects}>
        {
          projectsMapped
        }
      </div>
    )
  }
  // Create JSX for each section of projects page
  const personalProjects_ = projects_data.filter((project) => project.type === 'personal')
  const collegeProjects_ = projects_data.filter((project) => project.type === 'college')
  const work_ = projects_data.filter((project) => project.type === 'work')
  return (
    <>
      <Navbar />
      <Layout>
        <SEO title="Projects" />
        <h1 className={projects.projectHeader}>Work</h1>
        {
          mapProjects(work_)
        }
        <h1 className={projects.projectHeader}>Personal</h1>
        {
          mapProjects(personalProjects_)
        }
        <h1 className={projects.projectHeader}>College</h1>
        {
          mapProjects(collegeProjects_)
        }
      </Layout>
      <Footer />
    </>
  );
}

export default Projects