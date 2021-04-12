var plugins = [{
      name: 'gatsby-plugin-offline',
      plugin: require('/home/hhh-603/Documents/Projects/V3-Portfolio_Gatsby/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/home/hhh-603/Documents/Projects/V3-Portfolio_Gatsby/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/home/hhh-603/Documents/Projects/V3-Portfolio_Gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-sitemap',
      plugin: require('/home/hhh-603/Documents/Projects/V3-Portfolio_Gatsby/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","createLinkInHead":true},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/home/hhh-603/Documents/Projects/V3-Portfolio_Gatsby/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"icon":"src/images/icon.png","name":"Hank Holmes | Full Stack Web Developer","short_name":"Hank Holmes","background_color":"#222626","theme_color":"#222626","display":"standalone","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"53aa06cf17e4239d0dba6ffd09854e02"},
    },{
      name: 'gatsby-plugin-mdx',
      plugin: require('/home/hhh-603/Documents/Projects/V3-Portfolio_Gatsby/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx"],"defaultLayouts":{},"gatsbyRemarkPlugins":[],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/home/hhh-603/Documents/Projects/V3-Portfolio_Gatsby"},
    },{
      name: 'gatsby-plugin-html-attributes',
      plugin: require('/home/hhh-603/Documents/Projects/V3-Portfolio_Gatsby/node_modules/gatsby-plugin-html-attributes/gatsby-ssr'),
      options: {"plugins":[],"lang":"eng"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
