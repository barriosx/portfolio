import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="header-wrapper">
      <Header />
    </div>
  </Layout>
)

export default IndexPage
