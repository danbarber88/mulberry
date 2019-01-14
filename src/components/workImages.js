import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const WorkImg = styled(Img)`
  width: 250px;
  margin: 0 20px 0 0;
`

const WorkImages = () => (
  <StaticQuery
    query={graphql`
      query {
        first: file(relativePath: { eq: "uform/slab.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        second: file(relativePath: { eq: "uform/inframe.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        third: file(relativePath: { eq: "uform/shaker.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        fourth: file(relativePath: { eq: "uform/raised-panel.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <WorkImg fluid={data.first.childImageSharp.fluid} />
        <WorkImg fluid={data.second.childImageSharp.fluid} />
        <WorkImg fluid={data.third.childImageSharp.fluid} />
        <WorkImg fluid={data.fourth.childImageSharp.fluid} />
      </Container>
    )}
  />
)

export default WorkImages