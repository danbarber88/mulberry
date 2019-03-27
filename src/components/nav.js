import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import logo from '../images/logo.svg'
import { device } from '../utils/device'
import Menu from './menu'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

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
    display: none;
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
    display: none;
  }
`

const Logo = styled.img`
  width: 250px;
  margin: 5px 10px;

  @media ${device.tablet} {
    display: none;
  }
`

const MobileLogo = styled.img`
  width: 250px;
  margin: 5px;
  display: none;

  @media ${device.tablet} {
    display: inline;
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
  display: none;

  @media ${device.tablet} {
    display: inline;
  }
`

const MobileNavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`

const NavWrapper = styled.div`
  position: fixed;
  top: -87px;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(0, 9, 40, 1);
  transition: transform 0.25s cubic-bezier(0.84, 0.01, 0.36, 1);

  transform: ${props =>
    // If on the home page toggle nav visability based on isVisible prop.
    props.isVisible && props.location === '/'
      ? 'translateY(87px)'
      : 'translateY(0)'};

  transform: ${props =>
    // Just show the nav without toggling capabilities, if on any other page.
    props.location !== '/' && 'translateY(87px)'};
`

const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${props => (props.isOpen ? 'block' : 'none')};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: opacity 3s cubic-bezier(0.84, 0.01, 0.36, 1);
`

class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // default to nav not visible if on home page.
      navVisible: this.props.location === '/' ? false : true,
      mobileNavOpen: false,
    }

    this.activateAnimation = this.activateAnimation.bind(this, 115)
    this.mobileNavToggle = this.mobileNavToggle.bind(this)
    this.mobileNavBlur = this.mobileNavBlur.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  componentDidMount() {
    window.addEventListener('click', this.mobileNavBlur)
    // Pass in the height from the top of the page where you want the nav transition to toggle.
    window.addEventListener('scroll', this.activateAnimation)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.mobileNavBlur)
    window.removeEventListener('scroll', this.activateAnimation)
  }

  // Change state when user scrolls past set height causing a re render of Nav.
  activateAnimation(height) {
    this.setState({
      navVisible: window.scrollY < height ? false : true,
    })
  }

  lockScroll() {
    const html = document.getElementsByTagName('html')[0]
    if (this.state.mobileNavOpen) {
      html.classList.add('no-scroll')
    } else {
      html.classList.remove('no-scroll')
    }
  }

  mobileNavToggle() {
    this.setState({ mobileNavOpen: !this.state.mobileNavOpen }, this.lockScroll)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  // close nav when clicking outside of it.
  // mobile nav open and ref node does not contain click target
  mobileNavBlur(e) {
    if (this.state.mobileNavOpen && !this.wrapperRef.contains(e.target)) {
      this.setState({ mobileNavOpen: false }, this.lockScroll)
    }
  }

  closeMenu() {
    this.setState({ mobileNavOpen: false }, this.lockScroll)
  }

  render() {
    return (
      <NavWrapper
        isVisible={this.state.navVisible}
        location={this.props.location}
      >
        <Overlay isOpen={this.state.mobileNavOpen} />
        <MobileNavContainer ref={this.setWrapperRef}>
          <Menu close={this.closeMenu} isOpen={this.state.mobileNavOpen} />
          <MobileLogo src={logo} />
          <Hamburger icon={['fas', 'bars']} onClick={this.mobileNavToggle} />
        </MobileNavContainer>

        <NavItemContainer>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/design-service">Design Service</NavItem>
          <NavItem to="/projects">Projects</NavItem>
        </NavItemContainer>
        <Logo src={logo} />
        <NavItemContainer>
          <NavItem to="/testimonials">Testimonials</NavItem>
          <NavItem to="/news">News</NavItem>
          <NavItem to="/contact-us">Contact Us</NavItem>
        </NavItemContainer>
      </NavWrapper>
    )
  }
}

Nav.propTypes = {
  location: PropTypes.string.isRequired,
}

export default Nav
