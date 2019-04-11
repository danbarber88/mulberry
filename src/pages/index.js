import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
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

const LogoContainer = styled(ContentContainer)`
  display: flex;
  align-items: center;
`

const NeffLogo = styled(Img)`
  width: 200px;
  margin: 0 auto;
  img {
    margin: 0;
  }

  @media ${device.laptop} {
    margin: 30px 0 0 0;
  }

  @media ${device.mobileL} {
    margin: 30px auto 0 auto;
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
          Bacon ipsum dolor amet flank pastrami ex ad culpa. Jerky ad mollit
          dolor beef ribs esse biltong minim sirloin elit leberkas short loin
          flank ex ut. Ribeye alcatra fatback, tail id sausage laboris pancetta
          shoulder ut rump turkey et. Est aute sausage nulla, sed elit officia
          ground round dolore tenderloin in chicken laboris.
        </p>
        <p>
          Jerky ad mollit dolor beef ribs esse biltong minim sirloin elit
          leberkas short loin flank ex ut. Ribeye alcatra fatback, tail id
          sausage laboris pancetta shoulder ut rump turkey et. Est aute sausage
          nulla.
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
        <NeffLogo fluid={props.data.neffLogo.childImageSharp.fluid} />
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
