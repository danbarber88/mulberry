import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from './gatsbyImageWithIEPolyfill'
import arrow from '../images/arrow.svg'
import styled, { keyframes } from 'styled-components'
import logo from '../images/logo.svg'
import { device } from '../utils/device'

const float = keyframes`
  0% {
    transform: translate(0, -8px);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, -8px);
  }
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${props => props.height};
  margin-top: -87px;
  background-color: #000;

  @media ${device.mobileL} {
    margin-top: -79.5px;
  }
`

const BackgroundImg = styled(Img)`
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.height};
  position: absolute !important;
  opacity: 0.6 !important;
  #background-img {
    margin-bottom: 0;
  }
`

const Logo = styled.img`
  z-index: 1;
  width: 350px;
  height: 108.16px;
  margin: 10px 0 0 0;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.25);

  @media ${device.mobileM} {
    width: 300px;
  }
`

const MainText = styled.div`
  z-index: 1;
  display: flex;
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.6);
  letter-spacing: 2px;
  transition: opacity 0.25s;
  opacity: ${props => (props.topOfPage ? 1 : 0)};

  .hide {
    display: none;
  }

  @media (max-height: 400px) {
    display: none;
  }

  @media ${device.laptop} {
    font-size: 26px;
  }

  @media ${device.tablet} {
    margin: 0 10px;
    .hide {
      display: block;
    }
  }

  @media ${device.mobileL} {
    font-size: 20px;
  }

  @media ${device.mobileM} {
    font-size: 17px;
  }
`

const Arrow = styled.img`
  width: 200px;
  cursor: pointer;
  animation: 1.5s ${float} linear infinite;
  transition: opacity 0.5s;
  opacity: ${props => (props.visible ? 1 : 0)};
`

class Hero extends Component {
  constructor(props) {
    super(props)

    this.state = {
      topOfPage: true,
      arrowVisible: true,
      height: '100vh',
    }

    this.viewHeightChange = this.viewHeightChange.bind(this)
    this.setHeight = this.setHeight.bind(this)
    this.fadeArrow = this.fadeArrow.bind(this, 300)
    this.fadeText = this.fadeText.bind(this)
  }

  componentDidMount() {
    this.setHeight()
    window.addEventListener('orientationchange', this.viewHeightChange)
    window.addEventListener('scroll', this.fadeText)
    window.addEventListener('scroll', this.fadeArrow)
  }

  componentWillUnmount() {
    window.removeEventListener('orientationchange', this.viewHeightChange)
    window.removeEventListener('scroll', this.fadeArrow)
    window.removeEventListener('scroll', this.fadeText)
  }

  setHeight() {
    // set the initial height of the hero.
    this.setState({ height: window.innerHeight + 'px' })
  }

  viewHeightChange() {
    // Orientation change event doesnt provide height when orientation is finished
    // So i create a resize event on orientation change, change state and then remove the resize event.
    /* Q: Why cant you use a resize event by itself?
       A: Mobile browsers can change their height when doing things like removing
       the address bar on scroll. Which made the hero image resize. */

    const orientationFinished = () => {
      this.setState(
        {
          height: window.innerHeight + 'px',
        },
        window.removeEventListener('resize', orientationFinished)
      )
    }
    window.addEventListener('resize', orientationFinished)
  }

  fadeText() {
    this.setState({
      topOfPage: window.scrollY > 0 ? false : true,
    })
  }

  fadeArrow(height) {
    this.setState({
      arrowVisible: window.scrollY < height ? true : false,
    })
  }

  arrowClick() {
    const hero = document.getElementById('hero-wrapper')
    const nav = document.getElementById('nav')
    const navHeight = nav.offsetHeight
    window.scrollTo(0, hero.offsetHeight - navHeight)
  }

  render() {
    return (
      <>
        <StaticQuery
          query={graphql`
            query {
              hero: file(relativePath: { eq: "uform/inframe.jpg" }) {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          `}
          render={data => (
            <BackgroundImg
              height={this.state.height}
              fluid={data.hero.childImageSharp.fluid}
              id="background-img"
              backgroundColor="#495f79"
            />
          )}
        />
        <Wrapper height={this.state.height} id="hero-wrapper">
          <Logo src={logo} alt="Mulberry logo" />
          <MainText topOfPage={this.state.topOfPage}>
            Your new kitchen will <br className="hide" />
            be everything you could imagine.
            <br />A credit to your good taste,
            <br />
            giving added value to your home.
          </MainText>
          <Arrow
            src={arrow}
            visible={this.state.arrowVisible}
            alt="Scroll down"
            onClick={this.arrowClick}
          />
        </Wrapper>
      </>
    )
  }
}

export default Hero
