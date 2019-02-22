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
    <ContentSection>
      {data.allContentfulProject.edges.map(project => (
        <div style={{ marginTop: '30px' }}>
          <Img
            fluid={project.node.images[0].fluid}
            style={{
              width: '610px',
              height: 'auto',
              boxShadow: '2px 2px 1px rgba(0, 0, 0, 0.25)',
            }}
          />
          <h1>
            {project.node.name} / {project.node.location}
          </h1>
        </div>
      ))}
    </ContentSection>
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
            fluid(maxWidth: 610, maxHeight: 404, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
