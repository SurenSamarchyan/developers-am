require('dotenv').config()

module.exports = {
    siteMetadata: {
        site: 'Armenian Developers Association',
        title: process.env.PROJECT_NAME,
        description: 'Armenian Developers Associations web app',
        siteUrl: process.env.SITE_URL,
        language: 'de',
        color: '#0E2B56',
        author: 'Suren Samarchyan',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-anchor-links`,
        {
            resolve: `gatsby-source-datocms`,
            options: {
                apiToken: process.env.DATO_API_TOKEN,
            },
        },
    ],
}
