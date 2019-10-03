import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Image from "../components/image"
import projects from "../styles/projects.module.css"
import projects_data from "../data/projects"
// import SmartchargeImage from "../components/smartcharge-img"
// import EzparknImage from "../components/ezparkn-img"

const Projects = () => {
  const projects_ = projects_data.map((project,index) =>{
    return (
      <div key={index} className={projects.projects}>
        <div className={projects.project}>
          <div className={projects.projectImage}>
            {/* TODO: Find a way to interpolate the img path so that the img renders for each project. */}
            {/* kinda works? */}
            <Image imgPath={project.image_urls.main} />
          </div>
          <div className={projects.projectCard}>
            <Card title={project.name} description={project.description} github={project.github_url} demo={project.live_url} tech={project.technologies} />
          </div>
        </div>
      </div>
    )
  });
  return (
    <>
      <Navbar />
      <Layout>
        <SEO title="Projects" />
        <h1>Projects</h1>
        {
          projects_
        }
      </Layout>
      <Footer />
    </>
  );
}

export default Projects