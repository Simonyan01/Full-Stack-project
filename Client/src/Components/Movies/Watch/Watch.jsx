/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { watchData } from "./watchData";
import Loading from '../../Loading/Load';
import "./Watch.css";
import Popup from "./popup";
import { useParams } from 'react-router-dom';

const MOVIE_URL = "http://localhost:8080/api/v1/movie"

const Watch = () => {
    const [popup, setPopup] = useState(false);
    const [loading, setLoading] = useState(true);
    const [getUserData, setUserData] = useState([]);
    const { id } = useParams()

    const selectedMovie = watchData.find((item) => {
        return item.id === +id
    })

    const getData = async () => {
        const myData = { watchData }
        const res = await fetch(MOVIE_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            body: JSON.stringify(myData),
        })

        const data = await res.json();
        if (res.status === 200) {
            console.log(data);
            setUserData(data);
        } else {
            console.log(data.message);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <>{
            loading ? (
                <Loading loading={loading} setLoading={setLoading} />
            ) : (
                <section>
                    <div className='watch_container'>
                        <img src={selectedMovie.img} alt="movies" className='item-img' />
                        <div className="all-items">
                            <span className='item-title'>{selectedMovie.title}</span><br />
                            <ul className='params-1'>
                                <li className='item-date '>{selectedMovie.date}</li>
                                <li className='item-duration '>{selectedMovie.duration}</li>
                                <li className='item-age '>{selectedMovie.age}+</li><br />
                            </ul>
                            <ul className='params-2'>
                                <li className='item-country '>{selectedMovie.country}</li>
                                <li className='item-genre '>{selectedMovie.genre}</li>
                            </ul><br />
                            <span className='item-description'>{selectedMovie.description}</span><br /><br /><br /><br />
                            <button className='item-button' onClick={() => setPopup(true)}>Смотреть Трейлер</button>
                            <Popup trigger={popup} setTrigger={setPopup}>
                                <iframe
                                    className="frame"
                                    width="560"
                                    height="315"
                                    src={selectedMovie.link}
                                    title="YouTube video player"
                                    frameborder="0">
                                </iframe>
                            </Popup>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default Watch
