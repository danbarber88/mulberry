import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { device } from '../utils/device'

const BackgroundImg = styled(Img)`
  top: 0;
  left: 0;
  width: 100%;
  height: 25vw;
  position: absolute !important;
  opacity: 0.6 !important;
  margin: 87px 0 0 0;

  @media ${device.tablet} {
    height: 200px;
  }

  @media ${device.mobileL} {
    margin-top: 79.5px;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25vw;
  background-color: #000;

  @media ${device.tablet} {
    height: 200px;
  }
`

const BannerText = styled.div`
  z-index: 1;
  display: flex;
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.6);
  letter-spacing: 2px;
  text-align: center;

  @media ${device.laptop} {
    font-size: 26px;
  }

  @media ${device.tablet} {
    font-size: 20px;
    margin: 0 10px;
  }

  @media ${device.mobileL} {
    font-size: 16px;
  }
`

const Banner = props => (
  <>
    <StaticQuery
      query={graphql`
        query {
          hero: file(relativePath: { eq: "design.jpg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => (
        <BackgroundImg
          fluid={data.hero.childImageSharp.fluid}
          id="background-img"
        />
      )}
    />
    <Wrapper>
      {/* QUESTION: Too cheesy? need the persons name? */}
      <BannerText>
        "The home should be the treasure chest of living." <br /> - Le Corbusier
      </BannerText>
    </Wrapper>
  </>
)

export default Banner
