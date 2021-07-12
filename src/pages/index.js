import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <p>
        Software Engineer in Minneapolis. Quality Assurance at{" "}
        <a href="https://taskray.com">TaskRay</a>.
      </p>
    </div>
  </Layout>
)

export default IndexPage
