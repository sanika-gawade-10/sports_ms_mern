import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
      }}
      loop={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="/images/carousel/home-page-slider-2.jpeg"
          alt="Sports"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/images/carousel/home-page-slider-3.jpeg"
          alt="Sports"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/images/carousel/image 3.jpg"
          alt="Sports"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/images/carousel/image 4.jpg"
          alt="Sports"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;