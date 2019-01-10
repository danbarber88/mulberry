import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import arrow from '../images/arrow.svg'
import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0% {
    transform: translate(0, -5px);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, -5px);
  }
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  opacity: ${props => (props.top ? 1 : 0)};
`

const Arrow = styled.img`
  position: absolute !important;
  bottom: 0;
  left: 50%;
  margin-left: -100px;
  width: 200px;
  animation: 2s ${float} linear infinite;
  transition: opacity 0.5s;
  opacity: ${props => (props.visible ? 1 : 0)};
`

class Hero extends Component {
  constructor(props) {
    super(props)

    this.state = {
      top: true,
      arrowVisible: true,
    }

    this.fadeText = this.fadeText.bind(this)
    this.fadeArrow = this.fadeArrow.bind(this)
  }

  componentDidMount() {
    // Pass in the height from the top of the page where you want the nav transition to toggle.
    window.addEventListener('scroll', () => {
      this.fadeText()
      this.fadeArrow(200)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.fadeArrow)
  }

  fadeText() {
    if (window.scrollY > 0) {
      this.setState({
        top: false,
      })
    } else {
      this.setState({
        top: true,
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
      <Wrapper>
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
        <MainText top={this.state.top}>
          Your new kitchen will be everything you could imagine.
          <br />A credit to your good taste,
          <br />
          giving added value to your home.
        </MainText>
        <Arrow src={arrow} visible={this.state.arrowVisible} />
      </Wrapper>
    )
  }
}

export default Hero
