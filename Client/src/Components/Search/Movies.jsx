import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Movies.css";
import { Link } from 'react-router-dom';
import { first, second, third } from "./data";


const Movies = () => {
  const [query, setQuery] = useState("")
  return (
    <div className='film-container'>
      <div className='search-container'>
        <button className='btn-search'><FontAwesomeIcon icon={faSearch} /></button>
        <input className='search' type="search" placeholder="Поиск . . ." onChange={(e) => setQuery(e.target.value)}/>
      </div>
      <div className='first_container'>
        {first.filter(item => item.title.toLowerCase().toUpperCase().includes(query)).map((item, key) => {
          return <div key={key}>
            <div className="img-wrapper">
              <img src={item.img} className="movie blur" alt="Movie pictures" />
              <Link to={`${item.id}`}>
                <div className="content fade">
                  {item.text} <br />
                  {item.category} <br />
                  {item.time}
                </div>
              </Link>
              <div className="title">{item.title}</div>
            </div>
          </div>
        })}
      </div>
      <div className='second_container'>
        {second.filter(item => item.title.toLowerCase().includes(query)).map((item, key) => {
          return <div key={key}>
            <div className="img-wrapper">
              <img src={item.img} className="movie blur" alt="Movie pictures" />
              <Link to={`${item.id}`}>
                <div className="content fade">
                  {item.text} <br />
                  {item.category} <br />
                  {item.time}
                </div>
              </Link>
              <div className="title">{item.title}</div>
            </div>
          </div>
        })}
      </div>
      <div className='third_container'>
        {third.filter(item => item.title.toLowerCase().includes(query)).map((item, key) => {
          return <div key={key}>
            <div className="img-wrapper">
              <img src={item.img} className="movie blur" alt="Movie pictures" />
              <Link to={`${item.id}`}>
                <div className="content fade">
                  {item.text} <br />
                  {item.category} <br />
                  {item.time}
                </div>
              </Link>
              <div className="title">{item.title}</div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Movies
