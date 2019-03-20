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

import { device } from '../utils/device'

const FeatureImage = styled(Img)`
  height: 350px;
  width: 100%;
  margin: 30px 0 60px 0;
`

const Title = styled(MainHeader)`
  margin: 0;
  font-size: 2.2rem;
`

const PostedDate = styled.p`
  color: #8f5200;
  font-size: 14px;
  line-height: 14px;
  margin: 0 0 30px 0;
`

const Thumb = styled(Img)`
  width: 200px;
  max-height: 150px;
  margin: 0 0 10px 10px;
  cursor: pointer;
`

const Gallery = styled.div`
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
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
        <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />
        <ContentSection>
          <FeatureImage fluid={featureImage.fluid} backgroundColor="3D4044" />
          <ContentContainer width="55%">
            <Title>{title}</Title>
            <PostedDate>on {date}</PostedDate>
            <div
              dangerouslySetInnerHTML={{
                __html: text.childMarkdownRemark.html,
              }}
            />
          </ContentContainer>
          <Gallery>
            {images.map((image, i) => (
              <div
                onClick={() => this.setState({ index: i, galleryOpen: true })}
              >
                <Thumb key={i} fluid={image.fluid} />
              </div>
            ))}
          </Gallery>
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
        fluid(
          resizingBehavior: FILL
          maxWidth: 1132
          maxHeight: 750
          quality: 100
        ) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      text {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
