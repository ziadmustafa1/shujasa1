/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Swiper1 = () => {
  return (
    <div>
       <>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        speed={1000}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src='https://media.zid.store/bda63855-f7ff-4be7-bd9f-1d497a22336c/7ee67a88-ae8b-4748-906c-6b29527e0bcd.png' />
            <div>
            <h3 className='sw'>Iris Musk</h3>
            <h3 className='sw1'>Shuja Perfumes</h3> 
            </div>          
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://media.zid.store/bda63855-f7ff-4be7-bd9f-1d497a22336c/7cad1f3f-ab5a-4c42-888f-71b8127c4133.png' />
            <div>
            <h3 className='sw'>Diriyah</h3>
            <h3 className='sw1'>Shuja Collection</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://media.zid.store/bda63855-f7ff-4be7-bd9f-1d497a22336c/654f8d33-0e4b-4e7a-a695-03606a16e75f.png' />
            <div>
            <h3 className='sw'>Velvet Amber</h3>
            <h3 className='sw1'>Shuja Perfumes</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://media.zid.store/bda63855-f7ff-4be7-bd9f-1d497a22336c/d0cfd3a2-c9c1-4df0-94ae-c808e7766805.png' />
            <div>
            <h3 className='sw'>Smokey Wood</h3>
            <h3 className='sw1'>Shuja Perfumes</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://media.zid.store/bda63855-f7ff-4be7-bd9f-1d497a22336c/f781efce-7be4-4894-8b34-0b29ff7e297b.png' />
            <div>
            <h3 className='sw'>Green Flower</h3>
            <h3 className='sw1'>Shuja Perfumes</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://media.zid.store/bda63855-f7ff-4be7-bd9f-1d497a22336c/dbad79c0-1f9c-4855-a2eb-a004f301ed16.png' />
            <div>
            <h3 className='sw'>Shuja Musk</h3>
            <h3 className='sw1'>Shuja Perfumes</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://media.zid.store/bda63855-f7ff-4be7-bd9f-1d497a22336c/4fe3a5ef-d8e5-4b62-8d95-e05bfa4c5e97.png' />
            <div>
            <h3 className='sw'>Iris Musk - Hair Mist</h3>
            <h3 className='sw1'>Shuja Hair Mists</h3>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  )
}

export default Swiper1
