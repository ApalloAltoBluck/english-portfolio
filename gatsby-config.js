/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oxygen`,
            variants: [`400`, `700`]
          },
          {
            family: `Montserrat`,
            variants: [`400`, `700`]
          }
        ],
      },
    }
  ]
}