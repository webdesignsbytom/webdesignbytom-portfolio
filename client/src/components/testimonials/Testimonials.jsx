import React from 'react';
import './testimonials.css';
import avatar1 from '../../assets/images/avatar1.jpg';
import avatar2 from '../../assets/images/avatar2.jpg';
import avatar3 from '../../assets/images/avatar3.jpg';
import avatar4 from '../../assets/images/avatar4.jpg';

import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    avatar: avatar1,
    name: 'Wervings Syrups',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis odio facilis at, fugit provident sint illum magnam, recusandae aut, esse voluptatibus quis itaque earum',
  },
  {
    avatar: avatar2,
    name: 'Wervings Syrups',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis odio facilis at, fugit provident sint illum magnam, recusandae aut, esse voluptatibus quis itaque earum',
  },
  {
    avatar: avatar3,
    name: 'Wervings Syrups',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis odio facilis at, fugit provident sint illum magnam, recusandae aut, esse voluptatibus quis itaque earum',
  },
  {
    avatar: avatar4,
    name: 'Wervings Syrups',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nobis odio facilis at, fugit provident sint illum magnam, recusandae aut, esse voluptatibus quis itaque earum',
  },
];

function Testimonials() {
  const swiper = useSwiper();

  return (
    <section id="testimonials">
      <h5>What I Offer</h5>
      <h2>Testimonials</h2>
      

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[ Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onClick={() => swiper.slideNext()}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="client" />
              </div>
              
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
            
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
