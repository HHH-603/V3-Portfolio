
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/hhh603/Documents/Projects/V3-Portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/hhh603/Documents/Projects/V3-Portfolio/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/hhh603/Documents/Projects/V3-Portfolio/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/home/hhh603/Documents/Projects/V3-Portfolio/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/home/hhh603/Documents/Projects/V3-Portfolio/src/pages/projects.js"))
}

