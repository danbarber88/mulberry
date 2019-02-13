import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faPencilAlt,
  faStar,
  faComment,
  faNewspaper,
  faPhone,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faHome,
  faPencilAlt,
  faStar,
  faComment,
  faNewspaper,
  faPhone,
  faTimes
)

// TODO: Swipe to close.

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 5;
  position: fixed;
  top: 0;
  right: -300px;
  height: 100vh;
  width: 300px;
  padding-top: 70px;
  background-color: #cecece;
  transition: all 0.25s cubic-bezier(0.84, 0.01, 0.36, 1);
  transform: ${props =>
    props.isOpen ? 'translateX(-300px)' : 'translateX(0)'};
`

const MenuItem = styled(Link)`
  color: #000928;
  font-size: 1.5em;
  text-shadow: none;
  background-image: none;
  cursor: pointer;
  margin: 15px 0 15px 30px;
  :hover {
    text-decoration: underline !important;
  }
`

const Icon = styled(FontAwesomeIcon)`
  padding: 0;
  margin-right: 10px;
  font-size: 1em;
  color: #000928;
`

const CloseIcon = styled(FontAwesomeIcon)`
  position: fixed;
  top: 0;
  right: 0;
  margin: 15px;
  font-size: 1em;
`

const Menu = props => (
  <MenuWrapper isOpen={props.isOpen}>
    <CloseIcon icon={['fas', 'times']} onClick={props.close} />
    <MenuItem to="/" onClick={props.close}>
      <Icon icon={['fas', 'home']} />
      Home
    </MenuItem>
    <MenuItem to="/" onClick={props.close}>
      <Icon icon={['fas', 'pencil-alt']} />
      Design Service
    </MenuItem>
    <MenuItem to="/" onClick={props.close}>
      <Icon icon={['fas', 'star']} />
      Projects
    </MenuItem>
    <MenuItem to="/" onClick={props.close}>
      <Icon icon={['fas', 'comment']} />
      Testimonials
    </MenuItem>
    <MenuItem to="/" onClick={props.close}>
      <Icon icon={['fas', 'newspaper']} />
      News
    </MenuItem>
    <MenuItem to="/" onClick={props.close}>
      <Icon icon={['fas', 'phone']} />
      Contact Us
    </MenuItem>
  </MenuWrapper>
)

export default Menu
