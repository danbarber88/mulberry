import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import { SecondaryHeader } from '../components/contentSection'

import { device } from '../utils/device'

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 80%;
  margin-top: 60px;

  @media ${device.laptopL} {
    width: 100%;
  }

  @media ${device.tablet} {
    flex-direction: column;
    width: 75%;
    margin: 60px auto 0 auto;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`

const Thumbnail = styled(Img)`
  min-width: 300px;
  margin: 0 15px 0 0;

  @media ${device.laptop} {
    min-width: 200px;
    height: 133px;
  }

  @media ${device.tablet} {
    height: auto;
    margin: 0 0 20px 0;
  }
`

const Title = styled(SecondaryHeader)`
  font-size: 1.75rem;
  margin: 0;
`

const Date = styled.p`
  font-size: 1rem;
  color: #8f5200;
  margin: 0;
  line-height: 0.9rem;
`

const Excerpt = styled.div`
  margin-top: 20px;
`

const NewsItem = ({ slug, date, title, thumbnail, text }) => (
  <Wrapper to={`/${slug}/`}>
    <Thumbnail fluid={thumbnail} backgroundColor="#cecece" />
    <div>
      <Title>{title}</Title>
      <Date>on {date}</Date>
      <Excerpt
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
      Read More
    </div>
  </Wrapper>
)

NewsItem.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
}

export default NewsItem
