import React from 'react'
import Img from 'gatsby-image'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import caret from '../images/caret-right.svg'
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

const Caret = styled.img`
  padding: 1px;
  margin: 20px 0 -4px 5px;
`

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 60px 0;
  font-size: 1.3rem;
  color: #000928;
  line-height: 20px;
  :hover {
    margin-bottom: 59px;
    border-bottom: 1px solid #000928;
    text-decoration: none;
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
      <a
        target="_blank"
        href="https://www.google.com/search?rlz=1C1CHBF_en-GBGB784GB784&ei=YGJEXPWUIv6d1fAPps2YuA4&q=Mulberry+Fitted+Kitchens+Ltd&oq=Mulberry+Fitted+Kitchens+Ltd&gs_l=psy-ab.3..35i39l2j0i67.32730.37250..37659...0.0..0.243.3234.9j18j1......0....1..gws-wiz.......0i71j0i131i67j0j0i20i263j0i22i10i30j0i22i30.GCcKXiiCcRw#lrd=0x4878bfc0320d45eb:0xc24647140636ef53,1,,,"
      >
        <Reviews />
      </a>
      <div>
        <StyledLink to="/">MORE TESTIMONIALS</StyledLink>
        <Caret src={caret} alt="arrow" />
      </div>
    </ContentSection>
  </MainContainer>
)

export default WorkSection
