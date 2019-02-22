import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { ContentSection } from '../components/contentSection'
import { device } from '../utils/device'

const ProjectsPage = ({ location, data }) => (
  <Layout location={location.pathname}>
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      {data.allContentfulProject.edges.map(project => (
        <>
          <h1>
            {project.node.name} / {project.node.location}
          </h1>

          <img src={project.node.images[0].fluid.src} />
        </>
      ))}
    </div>
    <ContentSection />
  </Layout>
)

export const query = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          name
          location
          images {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
