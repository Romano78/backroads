import React, { useState } from "react"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import SocialLinks from "../constants/social-links"
import logo from "../images/logo.svg"
import { Link } from "gatsby"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  console.log(isOpen)
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navCenter}>
          <div className={styles.navHeader}>
            <Link to="/">
              <img src={logo} alt="backroads logo " />
            </Link>
            <button
              type="button"
              className={styles.logoBtn}
              onClick={toggleNav}
            >
              <FaAlignRight className={styles.logoIcon} />
            </button>
          </div>
          <ul
            className={
              isOpen
                ? `${styles.navLinks} ${styles.showNav}`
                : `${styles.navLinks}`
            }
          >
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item.text}</Link>
                </li>
              )
            })}
          </ul>
          <div className={styles.navSocialLinks}>
            {SocialLinks.map((item, index) => {
              return (
                <a key={index} href={item.url}>
                  {item.icon}
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
