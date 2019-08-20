import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from '../components/gatsbyImageWithIEPolyfill'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  ContentSection,
  ContentContainer,
  MainHeader,
} from '../components/contentSection'
import LightboxWrapper from '../components/lightboxWrapper'

import { device } from '../utils/device'

const CustomerName = styled(MainHeader)`
  margin: 40px 0;
  padding: 0;
  font-size: 3rem !important;
`

const OptionalText = styled.div`
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
      galleryOpen: false,
    }

    this.closeGallery = this.closeGallery.bind(this)
  }

  componentDidMount() {
    const nodes = document.querySelectorAll('.noContextMenu')
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener('contextmenu', e => e.preventDefault())
    }
  }

  closeGallery() {
    this.setState({
      galleryOpen: false,
    })
  }

  render() {
    const { galleryIndex, galleryOpen } = this.state
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
              <OptionalText
                dangerouslySetInnerHTML={{
                  __html: optionalText.childMarkdownRemark.html,
                }}
              />
            )}
          </ContentContainer>
          <Gallery>
            {thumbnailImages.map((image, i) => (
              <Thumb
                key={i}
                onClick={() =>
                  this.setState({
                    galleryIndex: i,
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
          <LightboxWrapper
            images={galleryImages}
            closeGallery={this.closeGallery}
            clickedImageIndex={galleryIndex}
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
        childMarkdownRemark {
          html
        }
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
