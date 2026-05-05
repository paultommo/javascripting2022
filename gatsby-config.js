require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
siteMetadata: {
  
  title: `Paul Tomlinson: High-End Website Design`,
  titleTemplate: `%s`,
  description: `Paul Tomlinson: High-End Website Design`,
  url: `https://paultommo.com`, // No trailing slash!
  siteUrl: `https://paultommo.com`, //change this when changing URL
  image: '/images/static-pt.png', // Path to your image you placed in the 'static' folder
  author: `@paultommmo`,
  twitterUsername: '@paultommmo',

},

  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  
{
    resolve: `gatsby-source-wordpress`,
    options: {
      /*
       * The full URL of the WordPress site's GraphQL API.
       * Example : 'https://www.example-site.com/graphql'
       */
      url:process.env.GATSBY_WPGRAPHQL_ENDPOINT,
      schema: {
      perPage: 5, // currently set to 100
      requestConcurrency: 3, // currently set to 15
      previewRequestConcurrency: 1, // currently set to 5
    }
      },
    },


  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'G-YBH47E1P1M',
    },
  },

  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#ffffff`,
      // This will impact how browsers show your PWA/website
      // https://css-tricks.com/meta-theme-color-and-trickery/
      // theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/logo.png`, // This path is relative to the root of the site.
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
],
}
