import React from 'react'
import style from './Main.module.css'
import mainImage from './Capture.PNG'
const Main = () => {
  return (
    <div className={style.mainWrapper}>
        <div className={style.mainContent}>
            <div className={style.mainText}>
                <h4>🔥 Solid - A Complete SaaS Web Template</h4>
                <h1>Free Next.js Template for SaaS</h1>
                <p>Solid Pro -
                    Packed with all the key integrations you need for swift SaaS startup 
                    launch, including - Auth, Database, Sanity Blog, Essential Components,
                    Pages and More. Built-winth - Next.js 16, React 19 and TypeScript.
                </p>
            </div>
            <div className={style.mainForm}>
                <input type="email" placeholder='Enter your email address' />
                <button type='submit'>Get Started</button>
            </div>
        </div>
        <div className={style.imageWrapper}>
            <img src={mainImage} alt="" />
        </div>
    </div>

  )
}

export default Main