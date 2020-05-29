import React from "react"
import Title from "../StyledComponent/Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Title title="contact" subtitle="us"></Title>
      <div className={styles.center}>
        <form
          action="https://formspree.io/xlepjkgk"
          method="POST"
          className={styles.form}
        >
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="email"
              name="name"
              id="email"
              className={styles.formControl}
              placeholder="Email"
            />
          </div>
          <div>
            <textarea
              rows="10"
              name="message"
              id="message"
              className={styles.formControl}
              placeholder="Insert Text"
            />
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
