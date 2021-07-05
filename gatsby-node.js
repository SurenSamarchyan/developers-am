/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const urls = require('./src/urls')

exports.createPages = async ({actions, graphql}) => {
    const {data: {articles}} = await graphql(`
    {
      articles: allDatoCmsArticle {
        nodes {
          slug
        }
      }
    }
  `)

    // Article pages
    articles.nodes.forEach((article) =>
        actions.createPage({
            path: urls.articleUrl(article.slug),
            component: path.resolve(`./src/templates/article.js`),
            context: {
                slug: article.slug
            },
        })
    )
}

exports.onCreateWebpackConfig = ({stage, actions}) => {
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
