import React from "react" 

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Footer from "../components/footer"

import SEO from "../components/seo"

const IndexPage = () => {

  return (
    <div style={{height: "100vh"}}>
      <Navbar />
      <Layout>
      <SEO title="Home" description="Steven Barrios is a front end developer looking to produce products that are high in quality and provide a pleasant user experience."  />
      <Header />
      </Layout>
      <Footer style={{position: "absolute"}} />
    </div>
  )
}

export default IndexPage
