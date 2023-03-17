module.exports = {
  siteMetadata: {
    siteUrl: `https://cut-send.netlify.app/`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        mergeSecurityHeaders: true, // ? testing june 18 2022 csp issue // boolean to turn off the default security headers
        mergeScriptHashes: false, // you can disable scripts sha256 hashes
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        directives: {
          "script-src": "'self' 'unsafe-inline'",
          "style-src": "'self' 'unsafe-inline'",
          "font-src": "'self' 'unsafe-inline' data:",
          "img-src": "'self' data: about:",
          "connect-src": "'self' data:"
          // you can add your directives or override defaults
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cut Send`,
        short_name: `Cut Send`,
        start_url: `/`,
        background_color: `#fffaf2`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
  ]
};