import 'react'
import styled, { keyframes } from 'styled-components'
import { device } from '../utils/device'
import PropTypes from 'prop-types'

const shrink = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(0, -27.5px) scale(0.6);
  }
`

const grow = keyframes`
  0% {
    transform: translate(0, -27.5px) scale(0.6);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
`

const mobileShrink = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(-${(window.innerWidth - 237.5) /
      2}px, -15px) scale(0.75);
  }
`

const mobileGrow = keyframes`
  0% {
    transform: translate(-${(window.innerWidth - 237.5) /
      2}px, -15px) scale(0.75);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
`

const Logo = styled.img`
  z-index: 1101;
  position: fixed;
  top: 10px;
  left: 50%;
  margin-left: -200px;
  width: 400px;
  animation-name: ${props => (props.isLarge ? grow : shrink)};
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.84, 0.01, 0.36, 0.99);
  animation-fill-mode: forwards;

  @media ${device.laptop} {
    top: 15px;
    width: 350px;
    margin-left: -175px;
  }

  @media ${device.tablet} {
    width: 300px;
    margin-left: -150px;
    animation-name: ${props => (props.isLarge ? mobileGrow : mobileShrink)};
  }

  /* Stop animation from playing and add end result */
  animation: ${props =>
    props.location === '/' && props.fromScroll ? null : 'none'};
  transform: ${props =>
    props.location === '/'
      ? 'translate(0, 0) scale(1)'
      : 'translate(0, -27.5px) scale(0.6)'};
`

Logo.propTypes = {
  isLarge: PropTypes.bool.isRequired,
}

export default Logo
