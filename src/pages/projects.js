import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { ContentSection } from '../components/contentSection'
import Project from '../components/project'

const ProjectsPage = ({ location, data }) => (
  <Layout location={location.pathname}>
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <ContentSection>
      {data.allContentfulProject.edges.map((project, i) => (
        <Project
          key={i}
          displayName={project.node.displayName}
          location={project.node.location}
          thumbnail={project.node.thumbnail.fluid}
          images={project.node.images}
        />
      ))}
    </ContentSection>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulProject(sort: { fields: date, order: DESC }) {
      edges {
        node {
          displayName
          location
          thumbnail {
            fluid(maxWidth: 610, maxHeight: 458, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          images {
            fluid(maxWidth: 1132, maxHeight: 750, quality: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
