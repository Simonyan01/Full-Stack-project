import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { data } from "./data";
import "./movies.css";


const Movies = () => {
  const [query, setQuery] = useState("")

  return (
    <>
      <div className='search-container'>
        <button className='btn-search'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          className='search'
          type="search"
          placeholder="Поиск . . ."
          onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className='film-container'>
        {data.filter(item => item.title.toLowerCase().includes(query)).map((item, key) => {
          return <div className='items' key={key}>
            <div className="img-wrapper">
              <img src={item.img} className="movie blur" alt="Movie pictures" />
              <Link to={`${item.id}`}>
                <div className="content fade">
                  {item.year} <br />
                  {item.category} <br />
                  {item.time}
                </div>
              </Link>
              <div className="title">{item.title}</div>
            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default Movies
