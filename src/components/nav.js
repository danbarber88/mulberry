import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import logo from '../images/logo.svg'
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

  @media ${device.tablet} {
    padding: 10px;
    font-size: 1.2em;
    background-color: #000928;
    display: ${props => (props.visible ? 'block' : 'none')};
  }
`

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  min-width: 250px;

  @media ${device.tablet} {
    flex-basis: 100%;
    flex-direction: column;
    align-items: center;
  }
`

const Logo = styled.img`
  width: 250px;
  margin: 5px 10px;

  @media ${device.tablet} {
    margin: 5px;
  }

  @media ${device.mobileL} {
    width: 225px;
  }
`

const Hamburger = styled(FontAwesomeIcon)`
  padding: 0;
  margin: 0 10px;
  font-size: 2.5em;
  color: #fff;
`

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: rgba(0, 9, 40, 1);
  opacity: 0;
  animation-name: ${props => (props.isVisible ? fadeIn : null)};
  animation-duration: 0.25s;
  animation-timing-function: cubic-bezier(0.84, 0.01, 0.36, 1);
  animation-fill-mode: forwards;
  animation-delay: 0.4s;

  @media ${device.tablet} {
    justify-content: space-between;
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
      mobileNavOpen: false,
    }

    this.activateAnimation = this.activateAnimation.bind(this)
    this.mobileNavToggle = this.mobileNavToggle.bind(this)
    this.mobileNavBlur = this.mobileNavBlur.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
  }

  componentDidMount() {
    window.addEventListener('click', this.mobileNavBlur)
    // Pass in the height from the top of the page where you want the nav transition to toggle.
    window.addEventListener('scroll', () => {
      this.activateAnimation(200)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.mobileNavBlur)
    window.removeEventListener('scroll', this.activateAnimation)
  }

  // Change state when user scrolls past set height causing a re render of Nav.
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

  mobileNavToggle() {
    this.setState({ mobileNavOpen: !this.state.mobileNavOpen })
    document.querySelector('#nav-container').classList.toggle('open')
  }

  // ref to nav wrapper for mobileNavBlur
  setWrapperRef(node) {
    this.wrapperRef = node
  }

  // close nav when clicking outside of it.
  // ref exists and click target does not contain ref node.
  mobileNavBlur(e) {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.setState({ mobileNavOpen: false })
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
            <NavWrapper
              ref={this.setWrapperRef}
              isVisible={this.state.navVisible}
              location={this.props.location}
            >
              <Logo src={logo} />
              <Hamburger
                icon={['fas', 'bars']}
                onClick={this.mobileNavToggle}
              />
              <NavItemContainer id="nav-container">
                <NavItem
                  to="/"
                  visible={this.state.mobileNavOpen ? 1 : 0}
                  onClick={this.mobileNavToggle}
                >
                  Home
                </NavItem>
                <NavItem
                  to="/design-service"
                  visible={this.state.mobileNavOpen ? 1 : 0}
                  onClick={this.mobileNavToggle}
                >
                  Design Service
                </NavItem>
                <NavItem
                  to="/projects"
                  visible={this.state.mobileNavOpen ? 1 : 0}
                  onClick={this.mobileNavToggle}
                >
                  Projects
                </NavItem>
                <NavItem
                  to="/"
                  visible={this.state.mobileNavOpen ? 1 : 0}
                  onClick={this.mobileNavToggle}
                >
                  Testimonials
                </NavItem>
                <NavItem
                  to="/"
                  visible={this.state.mobileNavOpen ? 1 : 0}
                  onClick={this.mobileNavToggle}
                >
                  News
                </NavItem>
                <NavItem
                  to="/"
                  visible={this.state.mobileNavOpen ? 1 : 0}
                  onClick={this.mobileNavToggle}
                >
                  Contact Us
                </NavItem>
              </NavItemContainer>
            </NavWrapper>
          ) : (
            // Normal nav
            <NavWrapper
              isVisible={this.state.navVisible}
              location={this.props.location}
            >
              <NavItemContainer>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/design-service">Design Service</NavItem>
                <NavItem to="/projects">Projects</NavItem>
              </NavItemContainer>
              <Logo src={logo} />
              <NavItemContainer>
                <NavItem to="/">Testimonials</NavItem>
                <NavItem to="/">News</NavItem>
                <NavItem to="/">Contact Us</NavItem>
              </NavItemContainer>
            </NavWrapper>
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
