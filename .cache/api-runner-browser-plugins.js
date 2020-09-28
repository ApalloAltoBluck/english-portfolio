module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-page-progress/gatsby-browser.js'),
      options: {"plugins":[],"height":3,"prependToBody":false,"color":"#ffa500","footerHeight":500},
    },{
      plugin: require('../node_modules/gatsby-plugin-scroll-reveal/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"tomato","showSpinner":true},
    }]
