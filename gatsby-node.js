const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      allContentfulTour {
        nodes {
          slug
        }
      }
    }
  `)
  data.allContentfulTour.nodes.forEach(node => {
    const slug = node.slug
    actions.createPage({
      path: `tour/${slug}`,
      component: require.resolve(`./src/templates/tour-template.js`),
      context: { slug: slug },
    })
  })
}
