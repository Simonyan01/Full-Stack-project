import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "./Swiper.css";
import "swiper/css";
import { data } from "./swiperData";

function createSlide() {
  return (
    <>
      {data.map((item, key) => {
        return <SwiperSlide key={key}>
          <img src={item.img} alt="Pictures" />
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
