import React from "react"
import Title from "../StyledComponent/Title"
import styles from "../../css/services.module.css"
import ServicesIcon from "../../constants/Services"

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services"></Title>
      <div className={styles.center}>
        {ServicesIcon.map((icon, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{icon.icon}</span>
              <h4>{icon.title}</h4>
              <p>{icon.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
