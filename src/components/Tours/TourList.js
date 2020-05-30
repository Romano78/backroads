import React, { useState, useEffect } from "react"
import styles from "../../css/items.module.css"
import Tour from "./Tour"
import Title from "../StyledComponent/Title"

const TourList = ({ tours }) => {
  const [tour, setTours] = useState([])
  // const [sortedTours, setSortedTours] = useState([])

  useEffect(() => {
    setTours(tours.nodes)
    // setSortedTours(tours.nodes)
  }, [tours])

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours"></Title>
      <div className={styles.center}>
        {tour.map(item => {
          return <Tour key={item.contentful_id} tour={item} />
        })}
      </div>
    </section>
  )
}

export default TourList
