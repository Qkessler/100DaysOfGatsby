module.exports = {
  siteMetadata: {
    title: "POC_project",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "48i9opSxLz3Sl7SpVzm47648ShMbk7A7tGmVJdTR7Mg",
        spaceId: "b76r2sihdq04",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "@chakra-ui/gatsby-plugin",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
