import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
import logo from './Capture-removebg-preview.png'
const Navigation = () => {
  return (
    <div className={styles.navBar}>
      <div>
        <img src={logo} alt=""  className={styles.logoImg}/>
      </div>
      <div className={styles.navLinks}>
        <Link className={styles.navLink} to="/">Home</Link>
        <Link className={styles.navLink} to="/about">About us</Link>
        <Link className={styles.navLink} to="/Products">Products</Link>
      </div>
    </div>
  )
}

export default Navigation