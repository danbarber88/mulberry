import React from 'react'
import Img from 'gatsby-image'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import caret from '../images/caret-right.svg'
import { ContentSection, SecondaryHeader } from '../components/contentSection'
import WorkImages from './workImages'
import Reviews from '../components/reviews'
import { device } from '../utils/device'

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

const HeaderText = styled(SecondaryHeader)`
  margin-bottom: 50px;
`

const Caret = styled.img`
  padding: 1px;
  margin: 20px 0 -4px 5px;
`

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 60px;
  font-size: 1.3rem;
  color: #000928;
  line-height: 20px;
  :hover {
    margin-bottom: 59px;
    border-bottom: 1px solid #000928;
    text-decoration: none;
  }

  @media ${device.tablet} {
    margin: 0;
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
      <div>
        <StyledLink to="/">MORE TESTIMONIALS</StyledLink>
        <Caret src={caret} alt="arrow" />
      </div>
    </ContentSection>
  </MainContainer>
)

export default WorkSection
