import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
