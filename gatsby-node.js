const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const viewPageTemplate = path.resolve('src/templates/viewPage.js')
    const newsItemPageTemplate = path.resolve('src/templates/newsItemPage.js')
    return graphql(`
      {
        allContentfulView {
          edges {
            node {
              url
              customerName
              optionalText {
                optionalText
              }
              images {
                description
                fluid {
                  src
                }
              }
            }
          }
        }
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
              facesVisible
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
    `)
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allContentfulView.edges.forEach(edge => {
          createPage({
            path: `views/${edge.node.url}/`,
            component: viewPageTemplate,
            context: {
              url: edge.node.url,
              customerName: edge.node.customerName,
              optionalText: edge.node.optionalText,
              images: edge.node.images,
            },
          })
        })

        result.data.allContentfulNewsItem.edges.forEach(edge => {
          createPage({
            path: `${edge.node.slug}/`,
            component: newsItemPageTemplate,
            context: {
              title: edge.node.title,
              slug: edge.node.slug,
              featureImage: edge.node.featureImage,
              images: edge.node.images,
              text: edge.node.text,
              crop: edge.node.facesVisible ? 'FACES' : 'CENTER',
            },
          })
        })
      })
      .then(resolve())
  })
}
