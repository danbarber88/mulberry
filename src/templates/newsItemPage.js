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
      images,
    } = this.props.data.contentfulNewsItem

    return (
      <Layout location={this.props.location.pathname}>
        <SEO title={title} description={text.childMarkdownRemark.excerpt} />
        <ContentSection>
          {featureImage && (
            <FeatureImage
              fluid={featureImage.fluid}
              backgroundColor="#615f5b"
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

            {images && (
              <GalleryButton
                onClick={() => this.setState({ index: 0, galleryOpen: true })}
              >
                view image gallery
              </GalleryButton>
            )}
          </ContentContainer>

          {images && (
            <Gallery>
              {images.map((image, i) => (
                <Thumb
                  key={i}
                  onClick={() => this.setState({ index: i, galleryOpen: true })}
                >
                  <Img fluid={image.fluid} backgroundColor="#615f5b" />
                </Thumb>
              ))}
            </Gallery>
          )}
        </ContentSection>

        {galleryOpen && (
          <Lightbox
            mainSrc={images[index].fluid.src}
            nextSrc={images[(index + 1) % images.length].fluid.src}
            prevSrc={
              images[(index + images.length - 1) % images.length].fluid.src
            }
            onCloseRequest={() => this.setState({ galleryOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                index: (index + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                index: (index + 1) % images.length,
              })
            }
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
          quality: 100
        ) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      images {
        fluid(maxWidth: 1800, maxHeight: 1200, quality: 100) {
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
