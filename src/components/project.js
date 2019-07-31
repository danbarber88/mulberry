import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

import LightboxWrapper from '../components/lightboxWrapper'

import { device } from '../utils/device'

library.add(faSearchPlus)

const Name = styled.h4`
  color: #000928;
  margin: 10px 0 5px 0;
  text-transform: uppercase;
  span {
    transition: all 0.5s;
    font-weight: 200;
    opacity: 0;
    margin-left: 10px;
  }
`

const Icon = styled(FontAwesomeIcon)`
  float: right;
  opacity: 0.5;
  transition: opacity 0.2s ease;
`

const Wrapper = styled.div`
  cursor: pointer;
  flex-basis: 48%;
  margin-top: 30px;

  :hover {
    ${Name} {
      span {
        opacity: 1;
        margin-left: 0;
      }
      ${Icon} {
        opacity: 1;
      }
    }
  }

  @media ${device.tablet} {
    margin: 30px auto 0 auto;
    flex-basis: 80%;
  }

  @media ${device.mobileL} {
    flex-basis: 100%;
  }
`

const Thumbnail = styled(Img)`
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);

  :hover {
    opacity: 0.9;
  }
`

class Project extends Component {
  constructor(props) {
    super(props)

    this.state = {
      galleryOpen: false,
    }

    this.closeGallery = this.closeGallery.bind(this)
  }

  closeGallery() {
    this.setState({
      galleryOpen: false,
    })
  }

  render() {
    const { galleryOpen } = this.state
    const { thumbnail, displayName, location, images } = this.props

    return (
      <>
        <Wrapper onClick={() => this.setState({ galleryOpen: true })}>
          <div>
            <Thumbnail backgroundColor="#cecece" fluid={thumbnail} />
            <Name>
              {displayName}
              {location && <span> / {location}</span>}
              <Icon icon={['fas', 'search-plus']} />
            </Name>
          </div>
        </Wrapper>

        {galleryOpen && (
          <LightboxWrapper images={images} closeGallery={this.closeGallery} />
        )}
      </>
    )
  }
}

Project.propTypes = {
  displayName: PropTypes.string.isRequired,
  location: PropTypes.string,
  thumbnail: PropTypes.object.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
