import React from 'react'
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
      <h1>Hello dear</h1>
  </Layout>
)

export default IndexPage
/*

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`

*/
