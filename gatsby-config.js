require("dotenv").config()

module.exports = {
  siteMetadata: {
    site: `Armenian Developers Association`,
    title: process.env.PROJECT_NAME,
    description: `Armenian Developers Association website site`,
    siteUrl: process.env.SITE_URL,
    language: `am`,
    color: `#164f56`,
    author: "Suren Samarchyan",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        previewMode: process.env.DATO_PREVIEW_API_TOKEN,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/static/assets/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Armenian Developers Association",
        short_name: "ADA",
        display: "standalone",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#164f56",
        /* ToDo: Add icons
        icon: `static/assets/favicon.svg`,
        icons: [
          {
            src: "static/assets/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "static/assets/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: `static/assets/favicon.svg`,
            sizes: "196x196",
            purpose: `any maskable`,
          }
        ]*/
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        mergeLinkHeaders: false,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    "gatsby-transformer-remark",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    /* ToDo: Add Google analytics key
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won"t be generated without it
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_KEY,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/!**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },*/
  ],
}
