import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="page-wrapper">
      <h1>Wait, there's nothing here...</h1>
      <p className="text"><Link to="/" className="err-404">Go back</Link> and get to know me <span role="img" aria-label="Cowboy Emoji">🤠</span>.</p>      
    </div>
  </Layout>
)

export default NotFoundPage
