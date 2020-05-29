import React from "react"
import Layout from "../components/layout"
import SimpleHero from "../components/SimpleHero"
import { Link } from "gatsby"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default function Home() {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, accusamus."
        >
          <Link className="btn-white" to="/tour">
            Explore Tours
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  )
}
