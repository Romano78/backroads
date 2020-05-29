import React from "react"
import styles from "../css/banner.module.css"

const Banner = ({ title, info, children }) => {
  return (
    <div className={styles.banner}>
      <div>
        <h1>{title}</h1>
        <p>{info}</p>
        {children}
      </div>
    </div>
  )
}

export default Banner
