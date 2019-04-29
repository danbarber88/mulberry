import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Hero from '../components/hero'
import {
  ContentSection,
  ContentContainer,
  MainHeader,
  SecondaryHeader,
} from '../components/contentSection'
import LatestNewsItem from '../components/latestNewsItem'
import WorkSection from '../components/workSection'
import { device } from '../utils/device'
import SupplierLogo from '../components/supplierLogo'

const LogoContainer = styled(ContentContainer)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    padding: 30px 0 0 0;
  }

  @media ${device.mobileL} {
    padding: 30px auto 0 auto;
  }
`

const IndexPage = props => (
  <Layout location={props.location.pathname}>
    <SEO
      title="Home"
      keywords={[
        `kitchens`,
        `kitchen showrooms`,
        `fitted kitchens`,
        `bespoke`,
        `luxury`,
        `designers`,
        `design`,
      ]}
    />
    <Hero />
    <ContentSection>
      <ContentContainer>
        <MainHeader>Kitchen Design in Hull</MainHeader>
        <p>
          In recent years, the kitchen has become the centre of the house, with
          more focus on entertaining and cooking as a social activity. It’s a
          trend that we have been watching with interest, as more clients have
          approached the company in the hope of creating a beautiful, practical
          and awe-inspiring hub for their home.
        </p>
        <p>
          Since opening our doors in 2001, Mulberry has specialised in designing
          bespoke kitchens and we pride ourselves on the attention to detail
          that adds that personal touch to every design. Our team of skilled and
          knowledgeable staff can cater for every customer’s needs, from smaller
          kitchens to grand open-plan spaces.
        </p>
      </ContentContainer>
      <ContentContainer width="auto">
        <SecondaryHeader>Latest News</SecondaryHeader>
        {props.data.latestNews.edges.map((item, i) => (
          <LatestNewsItem
            key={i}
            slug={item.node.slug}
            heading={item.node.title}
            date={item.node.date}
            description={item.node.text.childMarkdownRemark.excerpt}
          />
        ))}
      </ContentContainer>
    </ContentSection>
    <WorkSection />
    <ContentSection>
      <ContentContainer>
        <SecondaryHeader>We are a NEFF 5* Master Partner</SecondaryHeader>
        <p>
          A Five Star Master Partner benefits from a higher discount structure
          than other NEFF retailers and it is part of Mulberry’s best value
          policy to pass these discounts on to you, the consumer.
        </p>
        <p>
          We are proud to consistently beat the best internet prices by a
          considerable margin and to offer these discounts to all retail
          clientele. But when those appliances are purchased alongside a
          Mulberry kitchen, the savings become truly remarkable.
        </p>
      </ContentContainer>
      <LogoContainer width="40%">
        <SupplierLogo
          width="200px"
          img={props.data.neffLogo.childImageSharp.fluid}
          url="http://www.neff.co.uk/"
        />
      </LogoContainer>
    </ContentSection>
  </Layout>
)

export const query = graphql`
  query {
    neffLogo: file(relativePath: { eq: "masterpartner_5logo.png" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 200) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    latestNews: allContentfulNewsItem(
      sort: { fields: date, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          date(formatString: "Do MMMM YYYY")
          title
          slug
          text {
            childMarkdownRemark {
              excerpt(pruneLength: 50, format: HTML)
            }
          }
        }
      }
    }
  }
`

export default IndexPage
