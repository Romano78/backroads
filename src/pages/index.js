import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledComponent/StyledHero"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <StyledHero home="true" img={data.defaultBcg.image.fluid}>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, accusamus."
        >
          <Link className="btn-white" to="/tour">
            Explore Tours
          </Link>
        </Banner>
      </StyledHero>
      <About />
      <Services />
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
