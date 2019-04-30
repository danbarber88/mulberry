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
      index: 0,
      isOpen: false,
    }
  }

  render() {
    const { index, isOpen } = this.state
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
            keyRepeatLimit={0}
            mainSrc={images[index].fluid.src}
            // have these loop round because they need a next img when they reach the end
            nextSrc={
              images.length > 1 && images[(index + 1) % images.length].fluid.src
            }
            prevSrc={
              images.length > 1 &&
              images[(index + images.length - 1) % images.length].fluid.src
            }
            onAfterOpen={() => {
              if (images.length > 1) {
                const prevButton = document.querySelector('.ril__navButtonPrev')
                const nextButton = document.querySelector('.ril__navButtonNext')

                // if starting at the beginning of the gallery then disable prev button
                if (index === 0) {
                  prevButton.disabled = true
                  prevButton.classList.add('disabled')
                }
                // if starting at the end of the gallery then disable next button
                if (index === images.length - 1) {
                  nextButton.disabled = true
                  nextButton.classList.add('disabled')
                }
              }
            }}
            onCloseRequest={() =>
              this.setState({
                index: 0,
                isOpen: false,
              })
            }
            onMovePrevRequest={() => {
              if (images.length > 1) {
                // Previous image in gallery unless we are at the start.
                this.setState({
                  index: index === 0 ? 0 : index - 1,
                })

                const prevButton = document.querySelector('.ril__navButtonPrev')
                const nextButton = document.querySelector('.ril__navButtonNext')

                // Re-enable next button
                nextButton.classList.remove('disabled')
                nextButton.disabled = false

                // Next image will be first in gallery, disable prev button.
                if (index === 1) {
                  prevButton.disabled = true
                  prevButton.classList.add('disabled')
                }
              }
            }}
            onMoveNextRequest={() => {
              if (images.length > 1) {
                // Next image in the gallery unless we are at the end
                this.setState({
                  index:
                    index === images.length - 1 ? images.length - 1 : index + 1,
                })

                const prevButton = document.querySelector('.ril__navButtonPrev')
                const nextButton = document.querySelector('.ril__navButtonNext')

                // Re-enable previous button
                prevButton.classList.remove('disabled')
                prevButton.disabled = false

                // Next image will be last in gallery, disable next button
                if (index === images.length - 2) {
                  nextButton.disabled = true
                  nextButton.classList.add('disabled')
                }
              }
            }}
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
