import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { device } from '../utils/device'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;

  @media ${device.tablet} {
    justify-content: center;
  }
`

const WorkImgLink = styled(Link)`
  max-width: 260px;
  flex-basis: 23%;
  margin-right: 2%;

  @media ${device.tablet} {
    flex-basis: 48%;
    margin: 0 2% 2% 0;
  }

  @media ${device.mobileL} {
    flex-basis: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`

const WorkImages = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulProject(
          limit: 4
          sort: { fields: date, order: DESC }
          filter: { featureOnFrontPage: { eq: true } }
        ) {
          edges {
            node {
              thumbnail {
                fluid(maxWidth: 260, maxHeight: 175, quality: 100) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        {data.allContentfulProject.edges.map((project, i) => (
          <WorkImgLink to="/projects">
            <Img key={i} fluid={project.node.thumbnail.fluid} />
          </WorkImgLink>
        ))}
      </Container>
    )}
  />
)

export default WorkImages
