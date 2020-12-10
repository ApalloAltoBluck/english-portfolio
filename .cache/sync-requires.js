const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\bluck\\Buckstarter-Site\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\bluck\\Buckstarter-Site\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\bluck\\Buckstarter-Site\\src\\pages\\index.js"))),
  "component---src-templates-blog-template-js": hot(preferDefault(require("C:\\Users\\bluck\\Buckstarter-Site\\src\\templates\\blogTemplate.js")))
}

