import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <p>Software Engineer in Boulder, CO. Quality Assurance at <Link to="https://taskray.com">TaskRay</Link>.</p>
    </div>
  </Layout>
)

export default IndexPage
