import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import logo from '../images/logo.svg'
import Logo from './logo'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

// Styled Components

const StyledLink = styled(Link)`
  color: #fff;
  text-shadow: none;
  background-image: none;
  cursor: pointer;
  margin: 0 30px;
`

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 50px;
  padding: 32px 0;
  min-width: 370px;
`

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(0, 9, 40, 1);
  opacity: 0;
  animation-name: ${props => (props.isVisible ? fadeIn : null)};
  animation-duration: 0.25s;
  animation-timing-function: cubic-bezier(0.84, 0.01, 0.36, 1);
  animation-fill-mode: forwards;
  animation-delay: 0.4s;

  /* Stop animation from playing and add end result */
  animation: ${props => (props.location === '/' ? null : 'none')};
  opacity: ${props => (props.location === '/' ? 0 : 1)};
`

class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // default to nav not visible if on home page.
      navVisible: this.props.location === '/' ? false : true,
      fromScroll: false,
    }

    this.activateAnimation = this.activateAnimation.bind(this)
  }

  componentDidMount() {
    // Pass in the height from the top of the page where you want the nav transition to toggle.
    window.addEventListener('scroll', () => {
      this.activateAnimation(200)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.activateAnimation)
  }

  /*
   * Change state when user scrolls past set height causing a re render of Nav
   * and displaying the correct version
   */
  activateAnimation(height) {
    if (this.state.navVisible && window.scrollY < height) {
      this.setState({
        navVisible: false,
        fromScroll: true,
      })
    }

    if (!this.state.navVisible && window.scrollY > height) {
      this.setState({
        navVisible: true,
        fromScroll: true,
      })
    }
  }

  render() {
    return (
      <>
        <Logo
          src={logo}
          isLarge={!this.state.navVisible}
          fromScroll={this.state.fromScroll}
          location={this.props.location}
        />
        <NavWrapper
          isVisible={this.state.navVisible}
          location={this.props.location}
        >
          <NavItemContainer style={{ paddingRight: '90px' }}>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/design-service">Design Service</StyledLink>
            <StyledLink to="/projects">Projects</StyledLink>
          </NavItemContainer>
          <NavItemContainer style={{ paddingLeft: '90px' }}>
            <StyledLink to="/">Testimonials</StyledLink>
            <StyledLink to="/">News</StyledLink>
            <StyledLink to="/">Contact Us</StyledLink>
          </NavItemContainer>
        </NavWrapper>
      </>
    )
  }
}

Nav.propTypes = {
  location: PropTypes.string.isRequired,
}

export default Nav
