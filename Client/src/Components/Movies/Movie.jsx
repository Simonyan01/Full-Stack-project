/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { movies } from "./data";
// import Loading from "../Loading/Load";
import "./Movie.css";
import { Link } from "react-router-dom";

function createImage() {
  const settings = {
    className: "settings",
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          dots: false,
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          dots: false,
        }
      }
    ]
  }
  return (
    <>
      <Slider {...settings}>
        {movies.map((item, key) => {
          return <div key={key}>
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
      </Slider>
    </>
  )
}

const Movie = () => {
  const [getUserData, setUserData] = useState([]);
  const getData = async (e) => {

    const res = await fetch('http://localhost:8080/api/v1/movie', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    if (res.status === 200) {
      setUserData(data);
    } else {
      console.log(data.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div id="ivi">
        <a href="/movies" className="adviceText">
          <span className="arrow" href="/"> Рекомендуем вам посмотреть<IoIosArrowForward /></span>
        </a>
        <Link to="/subscribe" className="subscribe">
          <img
            src="https://solea-central.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg"
            alt="lightning"
            className="lightningImage"
          />
          <span className="subscribeText"> 14 дней подписки за 1 $</span>
        </Link>
        <div className="movie-container">
          {createImage()}
        </div>
      </div>
    </>
  );
};

export default Movie;