import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Map from '../components/map'

import {
  ContentSection,
  ContentContainer,
  MainHeader,
} from '../components/contentSection'
import Budget from '../components/budget'
import TestimonialBanner from '../components/testimonialBanner'

import { device } from '../utils/device'

const MapWrapper = styled.div`
  width: 100%;
  height: 20vw;

  @media ${device.laptop} {
    height: 25vw;
  }

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
    color: #000928;
    line-height: 20px;
    margin-bottom: 1rem;
    margin-top: 0.4rem;
    font-weight: 600;
  }

  .opening {
    color: #000928;
    font-weight: 600;
  }

  .phone {
    margin: 0;
  }

  .email {
    margin-bottom: 1rem;
  }

  @media ${device.laptop} {
    border-left: none;
    padding-left: 0;

    .email {
      margin-bottom: 2rem;
    }

    .address,
    .opening {
      font-size: 2rem;
      line-height: 2.2rem;
      font-weight: 400;
      margin-bottom: 2rem;
    }
  }

  @media ${device.mobileL} {
    .address,
    .opening {
      font-size: 1.8rem;
      line-height: 2rem;
    }
  }
`

const ContactUsPage = props => (
  <Layout location={props.location.pathname}>
    <SEO
      title="Contact Us"
      description="Mulberry Fitted Kitchens Ltd – 289 National Avenue, Hull, HU5 4JB. Phone: 01482 475370. Email: info@mulberrykitchens.co.uk."
    />

    <Map
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
        process.env.GATSBY_GOOGLE_API_KEY
      }&v=3.exp&libraries=places`}
      loadingElement={<MapWrapper />}
      containerElement={<MapWrapper />}
      mapElement={<MapWrapper />}
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
          289 National Avenue, <br />
          Hull, HU5 4JB
        </p>
        <p className="phone">
          <strong>T: </strong>01482 475 370
        </p>
        <p className="email">
          <strong>E: </strong>info@mulberrykitchens.co.uk
        </p>
        <p className="opening">Opening hours:</p>
        <p>Mon to Fri: 9:00am - 4:30pm</p>
        <p>Saturday: 10:00am - 1:00pm</p>
        <p>Sunday: Closed</p>
      </ContactDetails>
    </ContentSection>
    <Budget
      neffLogo={props.data.neffLogo.childImageSharp.fluid}
      cosentinoLogo={props.data.cosentinoLogo.childImageSharp.fluid}
      hafeleLogo={props.data.hafeleLogo.childImageSharp.fluid}
    />
    <TestimonialBanner
      text="Your computer generated images were spot on and the finished product was of an exceptional standard and below budget. All our questions were answered speedily and our requests for changes during the design and build were handled with the utmost care."
      name="Ian & Rosemary Stewart"
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
