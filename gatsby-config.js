module.exports = {
  siteMetadata: {
    title: "Intro to Gatsby Workshop - GatsbyConf 2021",
  },
  plugins: [
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
