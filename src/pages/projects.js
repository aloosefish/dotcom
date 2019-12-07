import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Here are some things I have made</h1>
    
<Link to="/">home</Link>
  </Layout>
)

export default ProjectsPage
