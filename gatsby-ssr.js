/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import Layout from "./src/components/layout/layout"

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
