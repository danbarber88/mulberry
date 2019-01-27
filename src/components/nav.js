import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import logo from '../images/logo.svg'
import Logo from './logo'
import { device } from '../utils/device'
import Media from 'react-media'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

// Styled Components

const NavItem = styled(Link)`
  color: #fff;
  text-shadow: none;
  background-image: none;
  cursor: pointer;
  margin: 0 30px;
  :hover {
    text-decoration: underline !important;
  }

  @media ${device.laptopL} {
    margin: 0 20px;
  }

  @media ${device.laptop} {
    margin: 0 10px;
    font-size: 0.8em;
  }
`

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 32px 0;
  min-width: 250px;
`

const Spacer = styled.div`
  min-width: 300px;

  @media ${device.laptop} {
    min-width: 250px;
  }
`

const HamburgerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  color: #fff;
  font-size: 2em;

  @media ${device.mobileL} {
    padding: 22px 0;
    .menu {
      display: none;
    }
  }
`

const Hamburger = styled(FontAwesomeIcon)`
  margin: 0 15px 0 5px;
  font-size: 1em;

  @media ${device.mobileL} {
    font-size: 1.5em;
  }
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

  @media ${device.tablet} {
    justify-content: flex-end;
  }

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
      <Media
        query={device.tablet}
        onChange={matches => (matches ? this.forceUpdate() : null)}
      >
        {matches =>
          matches ? (
            // Mobile nav
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
                <HamburgerContainer>
                  <span className="menu">MENU</span>
                  <Hamburger icon={['fas', 'bars']} />
                </HamburgerContainer>
              </NavWrapper>
            </>
          ) : (
            // Normal nav
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
                <NavItemContainer>
                  <NavItem to="/">Home</NavItem>
                  <NavItem to="/design-service">Design Service</NavItem>
                  <NavItem to="/projects">Projects</NavItem>
                </NavItemContainer>
                <Spacer />
                <NavItemContainer>
                  <NavItem to="/">Testimonials</NavItem>
                  <NavItem to="/">News</NavItem>
                  <NavItem to="/">Contact Us</NavItem>
                </NavItemContainer>
              </NavWrapper>
            </>
          )
        }
      </Media>
    )
  }
}

Nav.propTypes = {
  location: PropTypes.string.isRequired,
}

export default Nav
