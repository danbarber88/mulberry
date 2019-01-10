import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Header = styled.p`
  margin: 0;
  strong {
    color: #000928;
  }
`

const Description = styled.p`
  margin: 0;
  padding: 0 0 10px 20px;
`

const LatestNewsItem = ({ heading, date, description }) => (
  <>
    <Header>
      <strong>{heading}</strong> on {date}
    </Header>
    <Description>- {description}</Description>
  </>
)

LatestNewsItem.propTypes = {
  heading: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default LatestNewsItem
