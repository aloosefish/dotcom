import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CVPage = () => (
  <Layout>
    <SEO title="CV" />
    <h1>CV</h1>

    <center>Ian Davis</center>
    <center>
      <a href="mailto:ian@aloosefish.com">ian@aloosefish.com</a>
    </center>
    <div id="skills" class="section level4">
      <h4>Skills</h4>
      <ul>
        <li>Certified Salesforce Administrator</li>
        <li>
          Adept user of declarative and non-declarative (Python, Apex, SQL)
          reporting and automation tools
        </li>
        <li>
          Experience supporting data-intensive applications for a global
          customer base
        </li>
      </ul>
    </div>
    <div id="education" class="section level4">
      <h4>Education</h4>
      <p>
        <strong>Trailhead.Salesforce.com/me/ianthedavis</strong>
        <br />
        2019
        <br />
        Learned Salesforce Administration and Development by earning over 100
        course completion badges.
      </p>
      <p>
        <strong>DataCamp.com/profile/aloosefish</strong>
        <br />
        2018
        <br />
        Learned how to analyze data and create reports using Python and R by
        completing 29 interactive courses. Integrated these skills into college
        coursework.
      </p>
      <p>
        <strong>
          Portland Community College &amp; Portland State University
        </strong>
        <br />
        2017-2019
        <br />
        Courses in financial accounting, technical writing, statistics, and
        Geographical Information Systems (GIS).
      </p>
      <p>
        <strong>Portland Code School</strong>
        <br />
        2015
        <br />
        Learned how to create and deploy web applications using HTML/CSS,
        JavaScript (Backbone, Node), MongoDB, Git, and Heroku.
      </p>
      <p>
        <strong>Metropolitan State University of Denver</strong>
        <br />
        2005-2008
        <br />
        Art History
      </p>
    </div>
    <div id="work" class="section level4">
      <h4>Work</h4>
      <p>
        <strong>TaskRay</strong> - Westminster, CO
        <br />
        9/2019 to present
        <br />
        Quality Assurance Engineer
        <br />
        Design and implement functional and end-to-end tests for the most
        popular customer onboarding and project management app on the Salesforce
        platform.
      </p>

      <p>
        <strong>Simply Mac</strong> - Portland, OR
        <br />
        10/2016 to 12/2016
        <br />
        Service Technician
        <br />
        Helped people solve hardware and software issues with their Apple
        devices. I also taught people how to get the most out of their devices
        in one-on-one lessons.
      </p>
      <p>
        <em>Left this job to attend school full-time.</em>
      </p>
      <p>
        <strong>Metal Toad</strong> (Digital Agency) - Portland, OR
        <br />
        04/2015 to 06/2015
        <br />
        Developer Intern
        <br />
        Provided Quality-Assurance testing for web and mobile applications.
        Collaborated on proof-of-concept web development projects.
      </p>
      <p>
        <em>This was a 2-month internship.</em>
      </p>
      <p>
        <strong>Channelinsight</strong> (subsequently acquired by Model N){" "}
        <strong>-</strong> Denver, CO
        <br />
        06/2014 to 04/2014
        <br />
        Tier 1 Production Support
        <br />
        Created workflow enhancements and automations in ZenDesk CRM that
        increased the efficiency of the support team. Created a customer-facing
        FAQ website. Made configuration changes in channel data management tool.
        Provided technical support to a global customer base.
      </p>
      <p>
        <em>Left this job to relocate to Portland for my wife's job.</em>
      </p>
      <p>
        <strong>ACT Conferencing</strong>
        <br />
        (subsequently acquired by PGi) <strong>-</strong> Lakewood, CO
        <br />
        02/2009 to 06/2013
        <br />
        Senior Conference Specialist
        <br />
        Built and tested conference calls. Submitted reports on customer
        complaints and inquiries. Solved or escalated technical issues. Produced
        broadcast-quality audio for organizations ranging from small film
        studios to the White House.
      </p>
    </div>
    <Link to="/">home</Link>
  </Layout>
)

export default CVPage
