import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>about</h1>
    <blockquote>
    <li>A Fast-Fish belongs to the party fast to it.</li>
    <li>A Loose-Fish is fair game for anybody who can soonest catch it.</li>

<p>But what plays the mischief with this masterly code is the admirable brevity of it, which necessitates a vast volume of commentaries to expound it.</p>
</blockquote>

<cite>From Chapter 89 of Moby Dick, by Herman Melville</cite>
    
    <div><Link to="/">home</Link></div>
  </Layout>
)

export default AboutPage
