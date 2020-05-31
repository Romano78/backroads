import React from "react"
import { graphql } from "gatsby"
import styles from "../css/template.module.css"
import Layout from "../components/layout"
import StyledHero from "../components/StyledComponent/StyledHero"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Img from "gatsby-image"
import Day from "../components/Tours/Day"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const TourTemplate = ({ data }) => {
  const {
    singleTour: {
      price,
      start,
      name,
      country,
      days,
      description: { description },
      images,
    },
  } = data

  const journey = data.singleTour.journey

  const [mainImage, ...tourImages] = images

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} alt={`${name} img`}></StyledHero>
      <div className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map(img => {
              return (
                <Img key={img.base64} fluid={img.fluid} alt={`${name} img`} />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h4>daily schedule</h4>
          <div className={styles.journey}>
            {journey.map((item, index) => {
              return <Day key={index} day={item.day} info={item.info} />
            })}
          </div>
          <AniLink fade to="/tour" className="btn-primary">
            Back To Tours
          </AniLink>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query TourTemplate($slug: String) {
    singleTour: contentfulTour(slug: { eq: $slug }) {
      price
      start(formatString: "ddd MMMM Do, YYYY")
      name
      country
      description {
        description
      }
      images {
        fluid(quality: 90) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      days
      contentful_id
      journey {
        day
        info
      }
    }
  }
`

export default TourTemplate
