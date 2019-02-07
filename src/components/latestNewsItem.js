import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { device } from '../utils/device'

const Header = styled.p`
  font-size: 18px;
  margin: 0;
  strong {
    color: #000928;
  }

  @media ${device.tablet} {
    line-height: 18px;
  }
`

const Description = styled.p`
  margin: 0;
  padding: 0 0 10px 20px;

  @media ${device.tablet} {
    padding: 5px 0 20px 0;
    line-height: 18px;
  }
`

const PostedDate = styled.span`
  @media ${device.tablet} {
    display: block;
    line-height: 16px;
    font-size: 12px;
    color: #656565;

    .on {
      display: none;
    }
  }
`

const LatestNewsItem = ({ heading, date, description }) => (
  <>
    <Header>
      <strong>{heading}</strong>{' '}
      <PostedDate>
        <span className="on">on</span> {date}
      </PostedDate>
    </Header>
    <Description>{description}</Description>
  </>
)

LatestNewsItem.propTypes = {
  heading: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default LatestNewsItem
