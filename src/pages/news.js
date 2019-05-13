import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { ContentSection } from '../components/contentSection'
import NewsItem from '../components/newsItem'

const NewsPage = ({ location, data }) => (
  <Layout location={location.pathname}>
    <SEO
      title="News"
      description="Mulberry Fitted Kitchens Ltd – All the latest news about Mulberry, new offers and events."
    />
    <ContentSection>
      {data.allContentfulNewsItem.edges.map((newsItem, i) => (
        <NewsItem
          key={i}
          slug={newsItem.node.slug}
          date={newsItem.node.date}
          title={newsItem.node.title}
          thumbnail={
            newsItem.node.featureImage
              ? newsItem.node.featureImage.fluid
              : data.defaultThumb.childImageSharp.fluid
          }
          text={newsItem.node.text.childMarkdownRemark.excerpt}
        />
      ))}
    </ContentSection>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulNewsItem(sort: { fields: date, order: DESC }) {
      edges {
        node {
          date(formatString: "Do MMMM YYYY")
          title
          slug
          featureImage {
            fluid(maxWidth: 600, maxHeight: 400, quality: 95) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          text {
            childMarkdownRemark {
              excerpt(pruneLength: 250, format: HTML)
            }
          }
        }
      }
    }
    defaultThumb: file(relativePath: { eq: "default-thumbnail.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default NewsPage
