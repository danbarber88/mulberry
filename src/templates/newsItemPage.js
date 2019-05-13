import React, { Component } from 'react'
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
import Button from '../components/button'

import { device } from '../utils/device'

const FeatureImage = styled(Img)`
  width: 100%;
  margin: 30px 0 0 0;

  @media ${device.tablet} {
    margin: 20px 0 0 0;
  }

  @media ${device.mobileL} {
    height: 130px;
  }
`

const Title = styled(MainHeader)`
  margin: 40px 0 0 0;
  font-size: 2.2rem;

  @media ${device.mobileL} {
    font-size: 1.75rem;
    margin: 30px 0 0 0;
  }
`

const PostedDate = styled.p`
  color: #8f5200;
  font-size: 14px;
  line-height: 14px;
  margin: 0 0 30px 0;
`

const Thumb = styled.div`
  width: 35%;
  height: auto;
  margin: 0 0 10px 10px;
  cursor: pointer;
`

const Gallery = styled.div`
  margin: 43px 0 0 0;
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: flex-start;
  flex-wrap: wrap;

  @media ${device.laptop} {
    display: none;
  }
`

const GalleryButton = styled(Button)`
  display: none;

  @media ${device.laptop} {
    display: block;
    margin: 40px auto 0 auto;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`

class NewsItemPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      galleryOpen: false,
    }
  }

  render() {
    const { index, galleryOpen } = this.state
    const {
      title,
      date,
      featureImage,
      text,
      galleryImages,
      thumbnailImages,
    } = this.props.data.contentfulNewsItem

    return (
      <Layout location={this.props.location.pathname}>
        <SEO title={title} description={text.childMarkdownRemark.excerpt} />
        <ContentSection>
          {featureImage && (
            <FeatureImage
              fluid={featureImage.fluid}
              backgroundColor="#cecece"
            />
          )}

          <ContentContainer width="55%">
            <Title>{title}</Title>
            <PostedDate>on {date}</PostedDate>

            <div
              dangerouslySetInnerHTML={{
                __html: text.childMarkdownRemark.html,
              }}
            />

            {thumbnailImages && (
              <GalleryButton
                onClick={() => this.setState({ index: 0, galleryOpen: true })}
              >
                view image gallery
              </GalleryButton>
            )}
          </ContentContainer>

          {thumbnailImages && (
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
                  <Img fluid={image.fluid} backgroundColor="#cecece" />
                </Thumb>
              ))}
            </Gallery>
          )}
        </ContentSection>

        {galleryOpen && (
          <Lightbox
            keyRepeatLimit={0}
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

NewsItemPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default NewsItemPage

export const pageQuery = graphql`
  query NewsItemPageQuery($slug: String!, $crop: ContentfulImageCropFocus) {
    contentfulNewsItem(slug: { eq: $slug }) {
      date(formatString: "Do MMMM YYYY")
      title
      slug
      featureImage {
        fluid(
          resizingBehavior: FILL
          cropFocus: $crop
          maxWidth: 1350
          maxHeight: 400
          quality: 95
        ) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      galleryImages: images {
        fluid(maxWidth: 1800, maxHeight: 1200, quality: 95) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      thumbnailImages: images {
        fluid(maxWidth: 220, maxHeight: 147, quality: 90) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      text {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`
