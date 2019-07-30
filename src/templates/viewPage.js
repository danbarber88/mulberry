import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from '../components/gatsbyImageWithIEPolyfill'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  ContentSection,
  ContentContainer,
  MainHeader,
} from '../components/contentSection'

import { device } from '../utils/device'

const CustomerName = styled(MainHeader)`
  margin: 40px 0;
  padding: 0;
  font-size: 3rem !important;
`

const OptionalText = styled.p`
  margin-bottom: 40px;
`

const Thumb = styled.div`
  width: 48%;
  cursor: pointer;
  margin: 0 1% 10px 0;

  @media ${device.tablet} {
    width: 100%;
    margin: 0 0 10px 0;
  }
`

const Gallery = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;

  @media ${device.tablet} {
    width: 100%;
  }
`

class ViewPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      galleryOpen: false,
    }
  }

  componentDidMount() {
    const nodes = document.querySelectorAll('.noContextMenu')
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener('contextmenu', e => e.preventDefault())
    }
  }

  render() {
    const { index, galleryOpen } = this.state
    const {
      customerName,
      optionalText,
      galleryImages,
      thumbnailImages,
    } = this.props.data.contentfulView

    return (
      <Layout location={this.props.location.pathname}>
        <SEO />
        <ContentSection column>
          <ContentContainer width="60%">
            <CustomerName>{customerName}</CustomerName>
            {optionalText && (
              <OptionalText>{optionalText.optionalText}</OptionalText>
            )}
          </ContentContainer>
          <Gallery>
            {thumbnailImages.map((image, i) => (
              <Thumb
                key={i}
                onClick={() =>
                  this.setState({
                    index: i,
                    galleryOpen: true,
                  })
                }
              >
                <Img
                  className="noContextMenu"
                  fluid={image.fluid}
                  backgroundColor="#cecece"
                />
              </Thumb>
            ))}
          </Gallery>
        </ContentSection>

        {galleryOpen && (
          <Lightbox
            keyRepeatLimit={0}
            imageCaption={galleryImages[index].description}
            mainSrc={galleryImages[index].fluid.src}
            // have these loop round because they need a next img when they reach the end
            nextSrc={
              galleryImages.length > 1 &&
              galleryImages[(index + 1) % galleryImages.length].fluid.src
            }
            prevSrc={
              galleryImages.length > 1 &&
              galleryImages[
                (index + galleryImages.length - 1) % galleryImages.length
              ].fluid.src
            }
            onImageLoad={() => {
              document
                .querySelector('.ril-image-current')
                .addEventListener('contextmenu', e => e.preventDefault())
            }}
            onAfterOpen={() => {
              if (galleryImages.length > 1) {
                const prevButton = document.querySelector('.ril__navButtonPrev')
                const nextButton = document.querySelector('.ril__navButtonNext')
                // if starting at the beginning of the gallery then disable prev button
                if (index === 0) {
                  prevButton.disabled = true
                  prevButton.classList.add('disabled')
                }
                // if starting at the end of the gallery then disable next button
                if (index === galleryImages.length - 1) {
                  nextButton.disabled = true
                  nextButton.classList.add('disabled')
                }
              }
            }}
            onCloseRequest={() =>
              this.setState({
                index: 0,
                galleryOpen: false,
              })
            }
            onMovePrevRequest={() => {
              if (galleryImages.length > 1) {
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
              if (galleryImages.length > 1) {
                // Next image in the gallery unless we are at the end
                this.setState({
                  index:
                    index === galleryImages.length - 1
                      ? galleryImages.length - 1
                      : index + 1,
                })

                const prevButton = document.querySelector('.ril__navButtonPrev')
                const nextButton = document.querySelector('.ril__navButtonNext')

                // Re-enable previous button
                prevButton.classList.remove('disabled')
                prevButton.disabled = false

                // Next image will be last in gallery, disable next button
                if (index === galleryImages.length - 2) {
                  nextButton.disabled = true
                  nextButton.classList.add('disabled')
                }
              }
            }}
          />
        )}
      </Layout>
    )
  }
}

ViewPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ViewPage

export const pageQuery = graphql`
  query ViewPageQuery($url: String!) {
    contentfulView(url: { eq: $url }) {
      url
      customerName
      optionalText {
        optionalText
      }
      galleryImages: images {
        description
        fluid(maxWidth: 1800, maxHeight: 1200, quality: 95) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      thumbnailImages: images {
        fluid(quality: 95) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`
