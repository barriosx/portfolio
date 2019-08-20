import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card";
import projects from "../styles/projects.module.css"
import SmartchargeImage from "../components/smartcharge-img";
import EzparknImage from "../components/ezparkn-img";
import Navbar from "../components/navbar";

const Projects = () => (
  <>
    <Navbar />
    <Layout>
      <SEO title="Projects" />
      <h1>Projects</h1>
      <div className={projects.projects}>
        <div className={projects.project}>
          <div className={projects.projectImage}>
            <SmartchargeImage />
          </div>
          <div className={projects.projectCard}>
            <Card title="SmartCharge Plus" description="Gain a better understanding of how much charging an EV can cost." github="https://github.com/barriosx/smartcharge-plus" demo="https://smartcharge-plus.herokuapp.com/" />
          </div>
        </div>
        <div className={projects.project}>
          <div className={projects.projectImage}>
            <EzparknImage />
          </div>
          <div className={projects.projectCard}>
            <Card title="EZParkn" description="A parking reservation service for college students." github="https://github.com/CSC59939/EZPARKN" demo="https://ezparkn-ccny.herokuapp.com/" />
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default Projects