import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "./Swiper.css";
import "swiper/css";
import first from "./Images/IT.jpg";
import second from "./Images/Avengers-Infinity-Wars-la-critique.jpg";
import third from "./Images/fast-and-furious-7-2015-1600x900.jpg";
import fourth from "./Images/wallpapersden.com_hd-spider-man-no-way-home-poster_1600x900.jpg";
import fifth from "./Images/wallpapersden.com_official-black-adam-hd-poster_1600x900.jpg";
import sixth from "./Images/Jurassic-World-blonde-girl-and-dinosaurs_2880x1800.jpg"

const Images = [first, second, third, fourth, fifth, sixth]

function createSlide() {
  return (
    <>
      {Images.map((item, key) => {
        return <SwiperSlide key={key}>
          <img src={item} alt="Pictures" />
        </SwiperSlide>
      })}
    </>
  );
}

function ProductSwiper() {
  return (
    <div>
      <Swiper
        slidesperview={30}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={true}
        modules={[Pagination, Autoplay]}
      >
        <div>
          {createSlide()}
        </div>
      </Swiper>
    </div>
  );
}

export default ProductSwiper;
