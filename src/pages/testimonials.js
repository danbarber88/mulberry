import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { device } from '../utils/device'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import { ContentSection } from '../components/contentSection'
import Testimonial from '../components/testimonial'

const TestimonialContainer = styled.div`
  margin-top: 100px;
  column-count: 3;
  column-gap: 50px;

  @media ${device.laptop} {
    column-count: 2;
  }

  @media ${device.tablet} {
    column-count: 1;
    width: 80%;
    margin: 70px auto 0 auto;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`

const TestimonialsPage = ({ location, data }) => (
  <Layout location={location.pathname}>
    <SEO
      title="Testimonials"
      description="Mulberry Fitted Kitchens Ltd – Our collection of testimonies from Mulberry customers will help answer any question you might have about buying a kitchen with us."
      keywords={[`review`, `testimonial`]}
    />
    <Banner
      img={data.bannerImg.childImageSharp.fluid}
      backgroundColor="#565a5e"
      text='"Our kitchen is truly stunning and is the new heart of our home."'
    />
    <ContentSection>
      <TestimonialContainer>
        {data.allContentfulTestimonial.edges.map((testimonial, i) => (
          <Testimonial
            key={i}
            name={testimonial.node.name}
            text={testimonial.node.text.text}
          />
        ))}
      </TestimonialContainer>
    </ContentSection>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulTestimonial(sort: { fields: date, order: DESC }) {
      edges {
        node {
          name
          text {
            text
          }
        }
      }
    }
    bannerImg: file(relativePath: { eq: "testimonial-banner.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default TestimonialsPage
