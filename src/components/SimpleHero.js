import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getHeroImage = graphql`
  {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const SimpleHero = ({ children }) => {
  const {
    file: {
      image: { fluid },
    },
  } = useStaticQuery(getHeroImage)

  return <div className="defaultHero">{children}</div>
}

export default SimpleHero
