import React from "react"
import Title from "../StyledComponent/Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us"></Title>

      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore more experiences</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            facere rerum sequi. Minima, laboriosam quas ea doloribus asperiores
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            facere rerum sequi. Minima, laboriosam quas ea doloribus asperiores
          </p>
          <button type="button" className="btn-primary">
            Read More
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
