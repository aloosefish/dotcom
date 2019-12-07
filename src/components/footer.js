import React from "react"
import LinkHome from "../components/linkhome"

//TODO: add conditional for link 
const Footer = () => (
    <footer>
        <div><LinkHome></LinkHome></div>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    
  </footer> 
)

export default Footer