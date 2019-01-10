import 'react'
import styled, { keyframes } from 'styled-components'

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

// turn this into a full width fixed flex div with just the centered logo?
// will make sure it is centered on all screen sizes can also add a max width

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
