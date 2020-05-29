import React from "react"
import Layout from "../components/layout"
import Tours from "../components/Tours/Tours"
// import Button from "../exampleStyleComponent/Button"
import StyledHero from "../components/StyledComponent/StyledHero"
import { graphql } from "gatsby"
export default ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.image.fluid}></StyledHero>
      <h1>Hello from Tour</h1>
      <Tours></Tours>
    </Layout>
  )
}

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      image: childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
