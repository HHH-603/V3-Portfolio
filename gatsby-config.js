module.exports = {
  siteMetadata: {
    title: "Hank Holmes | Full Stack Web Developer",
    description:
      "My name is Hank, and I'm a Full Stack Web Developer based in Charlotte, NC.",
    author: "Hank Holmes",
    siteUrl: "https://hankholmes.me",
    url: "https://hankholmes.me",
    image: "/alaska.jpg",
    twitterUsername: "@Sherlock774",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "eng",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/*"],
      },
    },
  ],
};
