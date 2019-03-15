const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const newsItemPageTemplate = path.resolve('src/templates/newsItemPage.js')
    return graphql(`
      {
        allContentfulNewsItem(limit: 1000) {
          edges {
            node {
              date
              title
              slug
              featureImage {
                fluid {
                  src
                }
              }
              images {
                fluid {
                  src
                }
              }
              text {
                text
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      result.data.allContentfulNewsItem.edges.forEach(edge => {
        createPage({
          path: `${edge.node.slug}`,
          component: newsItemPageTemplate,
          context: {
            title: edge.node.title,
            slug: edge.node.slug,
            featureImage: edge.node.featureImage,
            images: edge.node.images,
            text: edge.node.text,
          },
        })
        resolve()
      })
    })
  })
}
