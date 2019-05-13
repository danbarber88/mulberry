import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Banner from '../components/banner'
import {
  ContentSection,
  ContentContainer,
  MainHeader,
  SecondaryHeader,
} from '../components/contentSection'
import Button from '../components/button'
import DesignProcess from '../components/designProcess'
import TestimonialBanner from '../components/testimonialBanner'

const DesignPage = ({ location, data }) => (
  <Layout location={location.pathname}>
    <SEO
      title="Design Service"
      description="Mulberry Fitted Kitchens Ltd – Offers a free, no obligation design service. Visit our showroom to arrange a home visit."
      keywords={[`design service`, `designers`, `bespoke`]}
    />
    <Banner
      img={data.bannerImg.childImageSharp.fluid}
      backgroundColor="#716559"
      text="Whether you have zero ideas or know exactly what you want, we are here
      to help materialise your perfect kitchen."
    />
    <ContentSection>
      <ContentContainer>
        <MainHeader>Design sets us apart</MainHeader>
        <p>
          When you choose a local kitchen company you are going to receive a
          service that just cannot be matched by the larger retailers. Our
          designers, Geoff and Colleen have a combined experience of over 35
          years between them, completing hundreds of projects, large and small,
          throughout our local area.
        </p>
        <p>
          Therefore when you ask us to design your kitchen, we will be utilising
          our accrued knowledge and experience to make sure we exceed your
          expectations.
        </p>
      </ContentContainer>
      <ContentContainer>
        <SecondaryHeader>Let us help</SecondaryHeader>
        <p>
          The amount of choice you face when considering a new kitchen can be
          daunting, we are always ready to help in any way possible. Mulberry
          offers a free no obligation design service, please feel free to visit
          our showroom at any time. If you wish to talk to a designer during
          this visit please book an appointment.
        </p>
        <Link to="/request-appointment">
          <Button primary>book appointment</Button>
        </Link>
        <Link to="/contact-us">
          <Button>find us</Button>
        </Link>
      </ContentContainer>
    </ContentSection>
    <DesignProcess />
    <TestimonialBanner
      text="Thank you for designing such a stunning kitchen - we love it, even the
      cat is happy as he's got a new hammock! Also for the first class service and
      support you gave throughout the fitting, from your first visit to discuss
      ideas to your last visit to deliver the cutlery drawer - nothing was too
      much trouble for you. We will certainly recommend Mulberry Kitchens in the future."
      name="Mrs E"
    />
  </Layout>
)

export const query = graphql`
  query {
    bannerImg: file(relativePath: { eq: "design.jpg" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default DesignPage
