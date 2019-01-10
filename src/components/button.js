import 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  width: auto;
  height: auto;
  background-image: none !important;
  text-shadow: none;
  padding: 12.5px 45px;
  color: #8f5200;
  border: 2px solid #8f5200;
  text-transform: uppercase;
  margin-left: 20px;
  cursor: pointer;
  -webkit-appearance: none;
  background-color: ${props => (props.primary ? '#8f5200' : '#fff')};
  color: ${props => (props.primary ? '#fff' : '#8f5200')};
`

Button.propTypes = {
  primary: PropTypes.bool,
}

export default Button
