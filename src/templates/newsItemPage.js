import React, { Component } from 'react'
import Img from '../components/gatsbyImageWithIEPolyfill'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { device } from '../utils/device'

const newsItemPage = ({ location, data }) => {
  const { title } = data.contentfulNewsItem
  return (
    <Layout location={location.pathname}>
      <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />
      <div>{title}</div>
      {/* {isOpen && (
        <Lightbox
          mainSrc={images[index].fluid.src}
          nextSrc={images[(index + 1) % images.length].fluid.src}
          prevSrc={images[(index + images.length - 1) % images.length].fluid.src}
          onCloseRequest={() => this.setState({ isOpen: false })}
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
      )} */}
    </Layout>
  )
}

newsItemPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default newsItemPage

export const pageQuery = graphql`
  query newsItemPageQuery($slug: String!) {
    contentfulNewsItem(slug: { eq: $slug }) {
      date
      title
      slug
      featureImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      text {
        text
      }
    }
  }
`
