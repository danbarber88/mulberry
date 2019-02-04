import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
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
  height: 100vh;
  margin-top: -100px;
  background-color: #000;
`

const BackgroundImg = styled(Img)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute !important;
  opacity: 0.6 !important;
  #background-img {
    margin-bottom: 0;
  }
`

const Logo = styled.img`
  z-index: 1;
  width: 350px;
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
`

const Arrow = styled.img`
  width: 200px;
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
    }

    this.fadeText = this.fadeText.bind(this)
    this.fadeArrow = this.fadeArrow.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.fadeText()
      this.fadeArrow(300)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.fadeArrow)
  }

  fadeText() {
    if (window.scrollY > 0) {
      this.setState({
        topOfPage: false,
      })
    } else {
      this.setState({
        topOfPage: true,
      })
    }
  }

  fadeArrow(height) {
    if (window.scrollY < height) {
      this.setState({
        arrowVisible: true,
      })
    } else {
      this.setState({
        arrowVisible: false,
      })
    }
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
          <Logo src={logo} />
          <MainText topOfPage={this.state.topOfPage}>
            Your new kitchen will be everything you could imagine.
            <br />A credit to your good taste,
            <br />
            giving added value to your home.
          </MainText>
          <Arrow src={arrow} visible={this.state.arrowVisible} />
        </Wrapper>
      </>
    )
  }
}

export default Hero
