import React from 'react'

import Sections from '../../components/sections/Sections.jsx'
import sectionsData from '../../components/sections/sectionsData.js'
import style from './About.module.css'
const About = () => {
  return (
    <div className={style.AboutContainer}
      >
      <h1 className={style.heading} style={{
        color : 'white',
        fontSize : '4rem',
        textAlign : 'center',
        fontWeight  : '500',
        letterSpacing : '2px',
      }}>We Offer You </h1>
      <Sections  data = {sectionsData}/>
    </div>
  )
}

export default About