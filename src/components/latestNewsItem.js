import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { device } from '../utils/device'
import { Link } from 'gatsby'

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

const Description = styled.div`
  margin: 0;
  padding: 0 0 0 20px;

  @media ${device.tablet} {
    padding: 5px 0 20px 0;
    line-height: 18px;
  }
`

const PostedDate = styled.span`
  color: #8f5200;
  font-size: 16px;
  .on {
    color: #292929;
  }

  @media ${device.tablet} {
    display: block;
    line-height: 16px;
    font-size: 12px;

    .on {
      display: none;
    }
  }
`

const LatestNewsItem = ({ slug, heading, date, description }) => (
  <Link to={`/${slug}/`}>
    <Header>
      <strong>{heading}</strong>{' '}
      <PostedDate>
        <span className="on">on</span> {date}
      </PostedDate>
    </Header>
    <Description
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  </Link>
)

LatestNewsItem.propTypes = {
  heading: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default LatestNewsItem
