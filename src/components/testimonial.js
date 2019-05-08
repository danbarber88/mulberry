import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Name = styled.h4`
  color: #000928;
  font-size: 1.5em;
  margin-top: 0;
  margin-bottom: 25px;
  font-weight: 400;
`

const Wrapper = styled.div`
  break-inside: avoid;
  text-align: center;
  margin-bottom: 60px;
`

const Testimonial = ({ name, text }) => (
  <Wrapper>
    <div>
      <Name>{name}</Name>
      <p>{text}</p>
    </div>
  </Wrapper>
)

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Testimonial
