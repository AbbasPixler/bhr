import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import NewsImg01 from '../../../assets/latest-news-img/news-img01.png';
function Features () {
  return (
    <>
     <Swiper
        rewind={true}
        navigation={false}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="sliderCol">
              <img src={NewsImg01} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderCol">
              <img src={NewsImg01} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderCol">
              <img src={NewsImg01} />
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  )   
}

export default Features;