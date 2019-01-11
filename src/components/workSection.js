import React from 'react'
import Img from 'gatsby-image'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { ContentSection } from './contentSection'
import WorkImages from './workImages'
import Reviews from '../components/reviews'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`

const BackgroundImg = styled(Img)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute !important;
  background-color: #fff;
  opacity: 0.175;
`

const HeaderText = styled.h2`
  margin-bottom: 50px !important;
`

const StyledLink = styled(Link)`
  display: inline-block;
  font-size: 1.25rem;
  color: #000928;
  text-decoration: underline;

  :hover {
    color: red;
    background-color: green;
  }
`

const WorkSection = () => (
  <MainContainer>
    <StaticQuery
      query={graphql`
        query {
          background: file(relativePath: { eq: "uform/slab.jpg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => (
        <BackgroundImg fluid={data.background.childImageSharp.fluid} />
      )}
    />

    <ContentSection column>
      <HeaderText>Our Work...</HeaderText>
      <WorkImages />
      <HeaderText>...what our customers say about us</HeaderText>
      <Reviews />
      <StyledLink to="/">MORE TESTIMONIALS</StyledLink>
    </ContentSection>
  </MainContainer>
)

export default WorkSection
