import React from 'react'
import data from './data.js'
import style from './Cards.module.css'
import cardImg from './routes.PNG'
const Cards = () => { //single object parameter
    return (
        <div className={style.cardContainer}>
            {data.map((item) => (
                <div className={style.cardsc}>
                    <div key={item.id} className={style.card}>
                        <img src={cardImg} alt="" className={style.cardImage} />
                        <h1>{item.title}</h1>
                        <span>{item.description}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards