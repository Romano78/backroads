import React from "react"
import TourList from "./TourList"
import { useStaticQuery, graphql } from "gatsby"

const getListofTours = graphql`
  {
    ListOfTours: allContentfulTour {
      nodes {
        name
        price
        days
        contentful_id
        country
        slug
        images {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Tours = () => {
  const { ListOfTours } = useStaticQuery(getListofTours)

  return <TourList tours={ListOfTours} />
}

export default Tours
