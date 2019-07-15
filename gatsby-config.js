require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.mulberrykitchens.co.uk/',
    title: `Mulberry Fitted Kitchens Ltd - Kitchen Design & Installation in Hull`,
    description: `Mulberry Fitted Kitchens Ltd specialises in the design and installation of bespoke luxury kitchens in Hull & East Yorkshire.`,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    'gatsby-transformer-remark',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mulberry Kitchens`,
        short_name: `Mulberry`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#000928`,
        display: `minimal-ui`,
        icon: `src/images/mulberry-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-35682438-1',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.mulberrykitchens.co.uk`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: `${process.env.HOTJAR_ID}`,
        sv: '6',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.mulberrykitchens.co.uk',
        sitemap: 'https://www.mulberrykitchens.co.uk/sitemap.xml',
        // policy: [{ userAgent: '*', disallow: '/' }],
      },
    },
  ],
}
