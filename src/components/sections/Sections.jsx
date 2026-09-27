import React from 'react'
import data from './sectionsData.js'
import style from './Sections.module.css'
const Sections = ({ data }) => {
    return (
        <div className={style.sectionContainer}>
            {data.map((item) =>
                <div key={item.id} className={style.imgFeatureContainer}>
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                    <div>
                        <div className={style.featureheadings}>
                            {item.badge && <h3>{item.badge}</h3>}
                            <h4>{item.eyebrow}</h4>
                            <h1>{item.heading}</h1>
                            <p>{item.description}</p>
                            {item.id === 2 && (
                                <h2 className={style.knowMore}>
                                    Know More <span className={style.arrow}>&rarr;</span>
                                </h2>
                            )}
                        </div>
                        <div>
                            <div>
                                {item.features && item.features.length > 0 &&
                                    (
                                        <div className={style.featuresList}>
                                            {item.features.map((feature) => (
                                                <div key={feature.number} className={style.featureItem}>
                                                    <button className={style.featureNumber}>{feature.number}</button>
                                                    <div className={style.featureDetails}>
                                                        <h4>{feature.title}</h4>
                                                        <p>{feature.text}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sections