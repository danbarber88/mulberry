import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Hero from '../components/hero'
import { ContentSection, ContentContainer } from '../components/contentSection'
import LatestNewsItem from '../components/latestNewsItem'
import WorkSection from '../components/workSection'

// TODO: Try a hover effect on workImages

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
`

const IndexPage = props => (
  <Layout location={props.location.pathname}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <ContentSection>
      <ContentContainer marginBottom>
        <h1>Kitchen Design in Hull</h1>
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
      <ContentContainer>
        <h2>Latest News</h2>
        {/* Generate these from news pages? */}
        <LatestNewsItem
          heading="True Handleless"
          date="13th Feb 2018"
          description="Presenting our latest display kitchen."
        />
        <LatestNewsItem
          heading="Mulberry stays off naughty list"
          date="13th Dec 2017"
          description="Great timing on this one!"
        />
        <LatestNewsItem
          heading="Macmillan Coffee Morning - Thank you!"
          date="3rd Oct 2017"
          description="Thanks so much to all who visited and donated."
        />
      </ContentContainer>
    </ContentSection>
    <WorkSection />
    <ContentSection>
      <ContentContainer marginBottom>
        <h1>We are a NEFF 5* Master Partner</h1>
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
  }
`

export default IndexPage
