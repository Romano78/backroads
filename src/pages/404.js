import React from "react"
import styles from "../css/error.module.css"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"

const Error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink fade to="/" className="btn-white">
            Back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default Error
