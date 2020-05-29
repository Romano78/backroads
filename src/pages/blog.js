import React from "react"
import Layout from "../components/layout"
import StyledHero from "../components/StyledComponent/StyledHero"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.image.fluid}></StyledHero>
      <h1>Hello from blog</h1>
    </Layout>
  )
}

export const query = graphql`
  {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
