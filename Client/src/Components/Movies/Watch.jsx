import React from 'react'
import { watchData } from "./watchData";
import "./Watch.css";


const Watch = () => {
    return (
        <>
            {watchData.map((item, key) => {
                return <section key={key} >
                    <div key={item.id} className='watch_container'>
                        <img src={item.img} alt="scream" className='item-img' />
                        <div className="all-items">
                            <span className='item-title'>{item.title}</span><br />
                            <ul className='params-1'>
                                <li className='item-date '>{item.date}</li>
                                <li className='item-duration '>{item.duration}</li>
                                <li className='item-age '>{item.age}</li><br />
                            </ul>
                            <ul className='params-2'>
                                <li className='item-country '>{item.country}</li>
                                <li className='item-genre '>{item.genre}</li>
                            </ul><br />
                            <span className='item-description'>{item.description}</span>
                        </div>
                    </div>
                </section>
            })}
        </>
    )
}

export default Watch
