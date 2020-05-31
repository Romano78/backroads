import React from "react"
import styles from "../../css/tour.module.css"
import Img from "gatsby-image"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import PropTypes from "prop-types"

const Tour = ({ tour }) => {
  const { images, price, name, country, slug, days } = tour

  let mainImage = images[1].fluid
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Img fluid={mainImage} alt="single tour" className={styles.img} />
        <AniLink fade className={styles.link} to={`/tour/${slug}`}>
          Details
        </AniLink>
      </div>

      <div className={styles.footer}>
        <h3>{name || "default name"}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country || "default country"}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

// Tour.propTypes = {
//   tour: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     country: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     days: PropTypes.number.isRequired,
//     Images: PropTypes.array(PropTypes.object).isRequired,
//   }),
// }

export default Tour
