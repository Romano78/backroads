import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const SimpleHero = ({ children }) => {
  const { file } = useStaticQuery(
    graphql`
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
  )

  const backgroundFluidImageStack = [
    file.image.fluid,
    `linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))`,
  ].reverse()

  return (
    <BackgroundImage
      Tag="section"
      className="defaultHero"
      fluid={backgroundFluidImageStack}
      BackgroundImage={`#040e18`}
    >
      <h2>{children}</h2>
    </BackgroundImage>
  )
}

export default SimpleHero
