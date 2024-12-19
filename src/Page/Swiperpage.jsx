import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Swipers = () => {
  return (
    <div className='w-full mt-20'>
      <div className='w-full flex items-center justify-center'>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          effect='fade'
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, EffectFade]}
          className='w-screen cursor-pointer'
        >
          
          <SwiperSlide>
            <div className='w-screen h-[50vh] md:h-[70vh] bg-image1 bg-cover bg-center'></div>
          </SwiperSlide>
        
          <SwiperSlide>
            <div className='w-screen h-[50vh] md:h-[70vh] bg-image2 bg-cover bg-center'></div>
          </SwiperSlide>
    
          <SwiperSlide>
            <div className='w-screen h-[50vh] md:h-[70vh] bg-image3 bg-cover bg-center'></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Swipers;
