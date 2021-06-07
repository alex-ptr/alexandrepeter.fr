/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import Layout from "./src/components/layout/layout"

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
