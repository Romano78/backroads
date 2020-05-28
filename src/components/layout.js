import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
