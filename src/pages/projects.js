import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { ContentSection } from '../components/contentSection'
import Project from '../components/project'

const ProjectsPage = ({ location, data }) => (
  <Layout location={location.pathname}>
    <SEO
      title="Projects"
      description="Mulberry Fitted Kitchens Ltd – Have installed many stunning kitchens over the years, here is a small selection and example of our work."
      keywords={[`projects`, `example`]}
    />
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
            fluid(maxWidth: 915, maxHeight: 688, quality: 95) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          images {
            description
            fluid(maxWidth: 1800, maxHeight: 1200, quality: 95) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
