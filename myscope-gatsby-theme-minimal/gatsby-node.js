const data = require('./data/index.json')

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  data.pages.forEach(page => {
    createPage({
      path: `/${page.slug}`,
      component: require.resolve('./src/templates/bakery'),
      context: {
        title: page.title,
      },
    })
  })
}
