import 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { device } from '../utils/device'

const Button = styled.button`
  width: auto;
  height: auto;
  background-image: none !important;
  text-shadow: none;
  padding: 12.5px 45px;
  color: #8f5200;
  border: 2px solid #8f5200;
  text-transform: uppercase;
  margin: 20px 20px 0 0;
  cursor: pointer;
  -webkit-appearance: none;
  background-color: ${props => (props.primary ? '#8f5200' : '#fff')};
  color: ${props => (props.primary ? '#fff' : '#8f5200')};

  @media ${device.tablet} {
    font-size: 14px;
    padding: 12.5px 25px 10px 25px;
  }

  @media ${device.mobileL} {
    padding: 12.5px 15px 10px 15px;
    margin: 20px 10px 0 0;
  }

  @media ${device.mobileM} {
    font-size: 12px;
    padding: 12.5px 15px 10px 15px;
    margin: 20px 10px 0 0;
  }
`

Button.propTypes = {
  primary: PropTypes.bool,
}

export default Button
