import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            defaultTitle={data.site.siteMetadata.title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `google-site-verification`,
                content: 'DLQyN7WlDDX0QuZKdHotyPBXjUXt_PyEuYiHd0RlMEA',
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          >
            <script type="application/ld+json">
              {`
              {
                "@context": "http://www.schema.org",
                "@type": "LocalBusiness",
                "name": "Mulberry Fitted Kitchens Ltd",
                "url": "https://www.mulberrykitchens.co.uk/",
                "image": "https://www.mulberrykitchens.co.uk/static/f8ef60a21207668f00993182135f44b3/2f196/inframe.jpg",
                "description": "Mulberry Fitted Kitchens Ltd specialises in the design and installation of bespoke luxury kitchens in Hull & East Yorkshire.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "289 National Avenue",
                  "addressLocality": "Hull",
                  "postalCode": "HU5 4JB",
                  "addressCountry": "Britain"
                },
                "email": "info@mulberrykitchens.co.uk",
                "telephone": "01482 475370",
                "openingHours": "Mo 09:00-16:30 Tu 09:00-16:30 We 09:00-16:30 Th 09:00-16:30 Fr 09:00-16:30 Sa 10:00-13:00",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "reviewCount": 16,
                  "ratingValue": 4.3
                }
              }`}
            </script>
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
