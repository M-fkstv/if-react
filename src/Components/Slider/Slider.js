// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { HotelCard } from "../HotelCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import "../SliderButton/SliderButton.css";

export const Slider = ({ className, data }) => {
  
  return (
    <Swiper
      className={className}
      modules={[Navigation]}
      loop={true}
      navigation={{
        nextEl: ".s-button-next",
        prevEl: ".s-button-prev",
        clickable: true,
      }}
      spaceBetween={16}
      slidesPerView={4}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <HotelCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
