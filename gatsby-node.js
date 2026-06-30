/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  const feedUrl = process.env.BEHOLD_FEED_URL
  if (!feedUrl) return

  try {
    const res = await fetch(feedUrl)
    const json = await res.json()
    const posts = Array.isArray(json) ? json : (json.posts ?? [])

    posts.forEach(post => {
      const mediaUrl = post.sizes?.medium?.mediaUrl ?? post.mediaUrl ?? ''
      createNode({
        instagramId: post.id,
        mediaType: post.mediaType,
        mediaUrl,
        permalink: post.permalink,
        id: createNodeId(`instagram-${post.id}`),
        internal: {
          type: 'InstagramPost',
          contentDigest: createContentDigest(post),
        },
      })
    })
    console.log(`[instagram] Sourced ${posts.length} posts from Behold.`)
  } catch (err) {
    console.warn('[instagram] Failed to fetch Behold feed:', err.message)
  }
}



// /**
//  * @type {import('gatsby').GatsbyNode['createPages']}
//  */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }


// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html" || stage === "develop-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /bad-module/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }