import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import Fade from 'react-reveal/Fade'

import { device } from '../utils/device'

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
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  background-color: #cecece;
`

class Project extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      disableNext: false,
      disablePrev: true,
      isOpen: false,
    }
  }

  render() {
    const { index, isOpen, disablePrev, disableNext } = this.state
    const { thumbnail, displayName, location, images } = this.props

    return (
      <>
        <Wrapper onClick={() => this.setState({ isOpen: true })}>
          <Fade distance="50px" bottom>
            <div>
              <Thumbnail fluid={thumbnail} />
              <Name>
                {displayName}
                {location && <span> / {location}</span>}
              </Name>
            </div>
          </Fade>
        </Wrapper>

        {isOpen && (
          <Lightbox
            mainSrc={images[index].fluid.src}
            nextSrc={
              images.length > 1 && !disableNext && images[index + 1].fluid.src
            }
            prevSrc={
              images.length > 1 && !disablePrev && images[index - 1].fluid.src
            }
            onCloseRequest={() =>
              this.setState({
                index: 0,
                isOpen: false,
                disableNext: false,
                disablePrev: true,
              })
            }
            onMovePrevRequest={() =>
              this.setState({
                index: index - 1,
                disablePrev: index === 1,
                disableNext: false,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                index: index + 1,
                disablePrev: false,
                disableNext: index === images.length - 2,
              })
            }
          />
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
