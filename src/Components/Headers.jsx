/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles1.css';

// import required modules
import { Autoplay, Pagination  } from 'swiper/modules';

const Headers = () => {
  return (
    <div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay ]}
        className="mySwiper"
      >
        <SwiperSlide className='pp'> <p> عروض اليوم الوطني بدأت 🇸🇦 و لفترة محدودة </p></SwiperSlide>
        <SwiperSlide className='pp'> <p> #شجاع_من_جيل_لجيل </p> </SwiperSlide>        
      </Swiper>
    </div>
  )
}

export default Headers
