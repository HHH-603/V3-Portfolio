module.exports = {
  siteMetadata: {
    title: "Hank Holmes | Full Stack Web Developer",
    description:
      "Hank is a Front End Web Developer based in Charlotte, NC who enjoyes designing + building websites, web applications, and unified software solutions.",
    author: "Hank Holmes",
    siteUrl: "https://hankholmes.me",
    image: "https://i.imgur.com/smcSJLz.jpg",
    twitterUsername: "@Sherlock774",
    flags: {
      FAST_DEV: true,
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: "/",
        icon: "src/images/favicon-h.png",
        name: "Hank Holmes | Full Stack Web Developer",
        short_name: "Hank Holmes",
        background_color: "#222626",
        theme_color: "#222626",
        display: "standalone",
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
  ],
};
