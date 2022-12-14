import React, { useState } from 'react'
import { watchData } from "./watchData";
import "./Watch.css";
import Popup from "./Popup";
import { useParams } from 'react-router-dom';

const Watch = () => {
    const [popup, setPopup] = useState(false);
    
    const { id } = useParams()
    const selectedMovie = watchData.find((item) => {
        return item.id === +id
    })

    return (

        <section >
            <div className='watch_container'>
                <img src={selectedMovie.img} alt="scream" className='item-img' />
                <div className="all-items">
                    <span className='item-title'>{selectedMovie.title}</span><br />
                    <ul className='params-1'>
                        <li className='item-date '>{selectedMovie.date}</li>
                        <li className='item-duration '>{selectedMovie.duration}</li>
                        <li className='item-age '>{selectedMovie.age}</li><br />
                    </ul>
                    <ul className='params-2'>
                        <li className='item-country '>{selectedMovie.country}</li>
                        <li className='item-genre '>{selectedMovie.genre}</li>
                    </ul><br />
                    <span className='item-description'>{selectedMovie.description}</span><br /><br /><br /><br />
                    <button className='item-button' onClick={() => setPopup(true)}>{selectedMovie.btnText}</button>
                    <Popup trigger={popup} setTrigger={setPopup}>
                        <iframe
                            className="frame"
                            width="560"
                            height="315"
                            src={selectedMovie.link}
                            title="YouTube video player"
                            frameborder="0"
                            allow="autoplay">
                        </iframe>
                    </Popup>
                </div>
            </div>
        </section>
    )
}

export default Watch
