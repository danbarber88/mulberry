import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

class LightboxWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: this.props.clickedImageIndex ? this.props.clickedImageIndex : 0,
    }
  }

  render() {
    const { index } = this.state
    const { images } = this.props
    return (
      <Lightbox
        keyRepeatLimit={0}
        imageCaption={images[index].description}
        mainSrc={images[index].fluid.src}
        // have these loop round because they need a next img when they reach the end
        nextSrc={
          images.length > 1 && images[(index + 1) % images.length].fluid.src
        }
        prevSrc={
          images.length > 1 &&
          images[(index + images.length - 1) % images.length].fluid.src
        }
        onImageLoad={() => {
          document
            .querySelector('.ril-image-current')
            .addEventListener('contextmenu', e => e.preventDefault())
        }}
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
        onCloseRequest={() => this.props.closeGallery()}
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
    )
  }
}

export default LightboxWrapper
