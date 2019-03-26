import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Map from '../components/map'

import {
  ContentSection,
  ContentContainer,
  MainHeader,
  SecondaryHeader,
} from '../components/contentSection'
import Budget from '../components/budget'
import TestimonialBanner from '../components/testimonialBanner'

import { device } from '../utils/device'

const MapWrapper = styled.div`
  width: 100%;
  height: 25vw;

  @media ${device.tablet} {
    height: 200px;
  }
`

const ContactDetails = styled.div`
  width: auto;
  margin-top: 60px;
  padding-left: 10px;
  border-left: 1px solid #bfc1c9;
  p {
    margin-bottom: 0.4rem;
  }

  strong {
    color: #000928;
  }

  .address {
    line-height: 20px;
    margin-bottom: 1rem;
    margin-top: 0.4rem;
  }

  .phone {
    margin: 0;
  }

  .email {
    margin-bottom: 1rem;
  }
`

const ContactUsPage = props => (
  <Layout location={props.location.pathname}>
    <SEO title="Contact Us" keywords={[`gatsby`, `application`, `react`]} />

    <Map
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
        process.env.GATSBY_GOOGLE_API_KEY
      }&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `25vw` }} />}
      containerElement={<MapWrapper />}
      mapElement={<div style={{ height: `100%` }} />}
    />

    <ContentSection>
      <ContentContainer>
        <MainHeader>Come in and see us</MainHeader>
        <p>
          Our showroom is of a fairly large size on National Avenue and we have
          made the utmost effort to ensure that any visiting customer will be
          able to see something they like. We can answer any queries you may
          have and get the ball rolling on your new kitchen.
        </p>
        <p>
          We offer a free design service, meaning that no costs will be incurred
          if for any reason your design does not meet your expectations.
        </p>
      </ContentContainer>
      <ContactDetails>
        <p className="address">
          <strong>
            289 National Avenue, <br />
            Hull, HU5 4JB
          </strong>
        </p>
        <p className="phone">
          <strong>T:</strong>01482 475 370
        </p>
        <p className="email">
          <strong>E:</strong>info@mulberrykitchens.co.uk
        </p>
        <p>
          <strong>Opening hours:</strong>
        </p>
        <p>Mon to Fri: 09:00 - 16:30</p>
        <p>Saturday: 10:00 - 13:00</p>
        <p>Sunday: Closed</p>
      </ContactDetails>
    </ContentSection>
    <Budget
      neffLogo={props.data.neffLogo.childImageSharp.fluid}
      cosentinoLogo={props.data.cosentinoLogo.childImageSharp.fluid}
      hafeleLogo={props.data.hafeleLogo.childImageSharp.fluid}
    />
    <TestimonialBanner
      text="Just a short note to say thank you to all concerned at Mulberry for helping to create our lovely kitchen. From coming into your showroom to the final workmen leaving our house we have been delighted with everyone's expertise"
      name="Carole & Allan"
    />
  </Layout>
)

export const query = graphql`
  query {
    neffLogo: file(relativePath: { eq: "masterpartner_5logo.png" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    cosentinoLogo: file(relativePath: { eq: "cosentino-logo.png" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    hafeleLogo: file(relativePath: { eq: "hafele-studio-partner-logo.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxHeight: 60) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default ContactUsPage
