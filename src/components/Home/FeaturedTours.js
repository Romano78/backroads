import React from "react"
import Title from "../StyledComponent/Title"
import styles from "../../css/items.module.css"
import Tour from "../Tours/Tour"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getTours = graphql`
  {
    featuredTour: allContentfulTour {
      nodes {
        name
        price
        slug
        contentful_id
        days
        images {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const data = useStaticQuery(getTours)
  const tours = data.featuredTour.nodes

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tour"></Title>
      <div className={styles.center}>
        {tours.map(tour => {
          return <Tour key={tour.contentful_id} tour={tour}></Tour>
        })}
      </div>
      <AniLink className="btn-primary" fade to="tour">
        Tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
