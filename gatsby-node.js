/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const urls = require('./src/urls')

exports.createPages = async ({ graphql, actions }) => {
    const {createPage, createRedirect} = actions

   /*
------  template page example  -------

   const {data} = await graphql(`
    {
      articles: allDatoCmsArticle {
        nodes {
          slug
        }
      }
      forms: allDatoCmsForm {
          nodes {
            slug
          }
      }
      redirects: allDatoCmsRedirect {
        nodes {
          redirectType
          oldUrl
          newUrl
        }
      }
    }
  `)

    // Article pages
    data.articles.nodes.forEach((article) =>
        createPage({
            path: urls.articleUrl(article.slug),
            component: path.resolve(`./src/templates/article.tsx`),
            context: {
                slug: article.slug
            },
        })
    )*/
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage.startsWith('develop')) {
        actions.setWebpackConfig({
            resolve: {
                alias: {
                    'react-dom': '@hot-loader/react-dom',
                },
            },
        })
    }
}
