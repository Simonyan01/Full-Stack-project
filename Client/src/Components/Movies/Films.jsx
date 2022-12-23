/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Loading from "../Loading/Load";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "./data";
import "./Films.css";

const MOVIE_URL = "http://localhost:8080/api/v1/movie"

function CreateImage() {
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
        {Data.map((item, key) => {
          return <div key={key}>
            <div className="img-wrapper">
              <img src={item.img} className="movie blur" alt="Movie pictures" />
              <Link to={`/movies/${item.id}`}>
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

let data
const Movie = () => {
  const [getUserData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const getData = async () => {
  //   const res = await fetch(MOVIE_URL, {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   })

  //   data = await res.json();
  //   if (res.status === 200) {
  //     setUserData(data);
  //   } else {
  //     console.log(data.message);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      {loading ? (
        <Loading loading={loading} setLoading={setLoading} />
      ) : (
        <div id="ivi">
          <a href="/movies" className="adviceText">
            <span className="arrow" > Рекомендуем вам посмотреть<IoIosArrowForward /></span>
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
            {CreateImage()}
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;