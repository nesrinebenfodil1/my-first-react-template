import React from 'react'
import Features from '../../components/Features/Cards.jsx'
import style from './Products.module.css'
const Products = () => {
  return (
    <div>
      <h1 className={style.heading} style={{
        color : 'white',
        fontSize : '4rem',
        textAlign : 'center',
        fontWeight  : '500',
        letterSpacing : '2px',
      }}>Features</h1>
        <Features />
    </div>
  )
}

export default Products