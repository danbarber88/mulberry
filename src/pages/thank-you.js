import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import blueArrow from '../images/blue-arrow.svg'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import { ContentSection } from '../components/contentSection'

const Arrow = styled.img`
  margin: 50px auto;
`

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Card = styled.div`
  width: 25%;
  margin: 0 20px;

  height: 500px;
  background-color: purple;
`

const ThankYouPage = ({ location, data }) => (
  <Layout location={location.pathname}>
    <SEO title="Thanks!" keywords={[`gatsby`, `application`, `react`]} />
    <Banner
      img={data.bannerImg.childImageSharp.fluid}
      backgroundColor="#716559"
      header="Thank You!"
      text="We are checking our diary, we will be in touch very soon."
      button="Back Home"
    />
    <ContentSection>
      <Arrow src={blueArrow} />
      <CardContainer>
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </ContentSection>
  </Layout>
)

export const query = graphql`
  query {
    bannerImg: file(relativePath: { eq: "design.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default ThankYouPage
