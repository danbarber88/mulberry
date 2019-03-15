import React from 'react'
import Img from './gatsbyImageWithIEPolyfill'
import styled from 'styled-components'
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
  width: 70%;
  z-index: 1;
  display: flex;
  text-align: center;

  p {
    margin: 0 auto;
    color: #fff;
    font-weight: 700;
    font-size: 30px;
    letter-spacing: 2px;
    text-align: center;
    text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.6);
  }

  @media ${device.laptopL} {
    width: 80%;
  }

  @media ${device.laptop} {
    p {
      font-size: 26px;
    }
  }

  @media ${device.tablet} {
    p {
      font-size: 20px;
    }
    margin: 0 10%;
  }

  @media ${device.mobileL} {
    p {
      font-size: 16px;
    }
  }
`

const Banner = props => (
  <>
    <BackgroundImg
      fluid={props.img}
      id="background-img"
      backgroundColor={props.backgroundColor}
    />
    <Wrapper>
      <BannerText>
        <p>{props.text}</p>
      </BannerText>
    </Wrapper>
  </>
)

export default Banner
