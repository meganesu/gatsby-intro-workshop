module.exports = {
  siteMetadata: {
    title: "Getting Started with Gatsby Workshop - GatsbyConf 2021",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tutorial`,
        path: `${__dirname}/src/tutorial`
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,        
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-remark-images`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
};
