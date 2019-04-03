import React from 'react'
import Img from './gatsbyImageWithIEPolyfill'
import styled from 'styled-components'
import { device } from '../utils/device'
import PropTypes from 'prop-types'

import { MainHeader } from './contentSection'

const BackgroundImg = styled(Img)`
  top: 0;
  left: 0;
  width: 100%;
  height: 20vw;
  position: absolute !important;
  opacity: 0.6 !important;
  margin: 87px 0 0 0;

  @media ${device.laptop} {
    height: 25vw;
  }

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
  height: 20vw;
  background-color: #000;
  text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.6);
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;

  @media ${device.laptop} {
    height: 25vw;
  }

  @media ${device.tablet} {
    height: 200px;
  }
`

const Header = styled(MainHeader)`
  z-index: 1;
  font-size: 4rem;
  color: #fff;
  font-weight: 600;
  margin-top: 0;

  @media ${device.laptopL} {
    font-size: 3rem;
  }

  @media ${device.mobileL} {
    font-size: 2.5rem;
  }
`

const BannerText = styled.div`
  width: 70%;
  z-index: 1;
  display: flex;

  p {
    margin: 0 auto;
    color: #fff;
    font-size: 2rem;
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
      {props.header && <Header>{props.header}</Header>}
      <BannerText>
        <p>{props.text}</p>
      </BannerText>
    </Wrapper>
  </>
)

Banner.propTypes = {
  img: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  header: PropTypes.string,
  text: PropTypes.string,
}

export default Banner
