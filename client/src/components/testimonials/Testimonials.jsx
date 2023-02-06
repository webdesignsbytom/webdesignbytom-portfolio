import React from 'react';
import './testimonials.css';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { testimonyArray } from '../../utils/TestimonyData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Testimonials() {
  const swiper = useSwiper();

  return (
    <section id='testimonials'>
      <h5>What I Offer</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='container testimonials__container'
        // install Swiper modules
        modules={[Navigation, Pagination]}
        // spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onClick={() => swiper.slideNext()}
      >
        {testimonyArray.map(({ avatar, name, review, link }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='client' />
              </div>

              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
              <a className='client__link'>{link}</a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
