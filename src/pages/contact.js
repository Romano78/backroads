import React from "react"
import Layout from "../components/layout"
import StyledHero from "../components/StyledComponent/StyledHero"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <StyledHero img={data.connectBcg.image.fluid}></StyledHero>
      <h1>Hello from Contact</h1>
    </Layout>
  )
}

export const query = graphql`
  {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
