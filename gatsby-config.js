/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  
  plugins: [
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        height: 3,
        prependToBody: false,
        color: `#ffa500`,
        footerHeight: 500,
      }
    },
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-nprogress`,
    options: {
      // Setting a color is optional.
      color: `tomato`,
      // Disable the loading spinner.
      showSpinner: true,
    },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oxygen`,
            variants: [`400`, `700`]
          },
          {
            family: `Quicksand`,
            variants: [`400`, `700`]
          },
          {
            family: `Montserrat`,
            variants: [`400`, `700`]
          },
          {
            family: `Raleway`,
          variants: [`300`, `700`]
          },
        ],
      }
    },
  ]
}