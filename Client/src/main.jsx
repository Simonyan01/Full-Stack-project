import React, { useState } from "react";
import Loading from "./Components/Loading/Load";
import ProductSwiper from "./Components/ProductSwiper/Swiper";
import Movie from "./Components/Movies/Films";
import "./main.css";

function Main() {
  const [loading, setLoading] = useState(true);
  
  return (
    <div>
      {loading ? (
        <Loading loading={loading} setLoading={setLoading} />
      ) : (
        <>
          <ProductSwiper />
          <Movie />
        </>
      )
      }
    </div>
  )
}
export default Main;
