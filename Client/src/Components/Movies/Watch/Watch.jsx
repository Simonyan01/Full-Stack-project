import React, { useState } from 'react'
import { watchData } from "./watchData";
import "./Watch.css";
import Popup from "./popup";

const Watch = () => {
    const [popup, setPopup] = useState(false);
    return (
        <>
            {watchData.map(item => {
                return <section >
                    <div className='watch_container'>
                        <img src={item.img} alt="scream" className='item-img' />
                        <div className="all-items">
                            <span className='item-title' key={item.id} >{item.title}</span><br />
                            <ul className='params-1'>
                                <li className='item-date '>{item.date}</li>
                                <li className='item-duration '>{item.duration}</li>
                                <li className='item-age '>{item.age}</li><br />
                            </ul>
                            <ul className='params-2'>
                                <li className='item-country '>{item.country}</li>
                                <li className='item-genre '>{item.genre}</li>
                            </ul><br />
                            <span className='item-description'>{item.description}</span><br /><br /><br /><br />
                            <button className='item-button' onClick={() => setPopup(true)}>{item.btnText}</button>
                            <Popup trigger={popup} setTrigger={setPopup}>
                                <iframe
                                    className="frame"
                                    width="560"
                                    height="315"
                                    src={item.link}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="autoplay">
                                </iframe>
                            </Popup>
                        </div>
                    </div>
                </section>
            })}
        </>
    )
}

export default Watch
