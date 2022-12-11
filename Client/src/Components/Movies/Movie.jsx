/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { Movies } from "./data";
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
        {Movies.map((item, key) => {
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
      </Slider>
    </>
  )
}

const Movie = () => {
  // const [loading, setLoading] = useState(false);
  return (
    <>
      {/* {
        loading ? (
          <Loading loading={loading} setLoading={setLoading} />
        ) : ( */}
      <div id="ivi">
        <a href="/" className="adviceText">
          <span className="arrowAndLink" href="/"> Рекомендуем вам посмотреть<IoIosArrowForward /></span>
        </a>
        <a href="/" className="modernText">
          <span className="arrowAndLink" href="/"> Современные мультфильмы <IoIosArrowForward /></span>
        </a>
        <a href="/" className="newFilmText">
          <span className="arrowAndLink" href="/"> Фильмы-новинки <IoIosArrowForward /></span>
        </a>
        <a href="/" className="dramaText">
          <span className="arrowAndLink" href="/"> Драмы <IoIosArrowForward /> </span>
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
        <div className="second-container">
          {createImage()}
        </div>
        <div className="third-container">
          {createImage()}
        </div>
        <div className="fourth-container">
          {createImage()}
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Movie;