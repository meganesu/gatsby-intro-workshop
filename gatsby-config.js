module.exports = {
  siteMetadata: {
    title: "Intro to Gatsby Workshop - GatsbyConf 2021",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tutorial`,
        path: `${__dirname}/src/tutorial`
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
  ],
};
