import React from 'react'
import "./testimonials.css"
import AVTR0 from "../../assets/avatar0.png"
import AVTR7 from "../../assets/avatar7.png"
import AVTR8 from "../../assets/avatar8.png"
import AVTR9 from "../../assets/avatar9.png"

// import Swiper core and required modules
import {Pagination} from 'swiper';
import "swiper/swiper-bundle.css"
import { Swiper, SwiperSlide } from 'swiper/react';


//import 'swiper/swiper.min.css'
//import 'swiper/pagination/pagination-bundle.min.css'

// Import Swiper styles
//import 'swiper/css';
//import 'swiper/css/pagination';



const data=[
  {
    avatar:AVTR0,
    name:"Mathias Bassaw",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Nobis similique dignissimos quia cum reiciendis alias? Ipsam ratione,laudantium illo numquam alias reiciendis aut quas explicabo maiores velit enim praesentium beatae."

  },

  {
    avatar:AVTR7,
    name:"Mayfred Norgbe",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Nobis similique dignissimos quia cum reiciendis alias? Ipsam ratione,laudantium illo numquam alias reiciendis aut quas explicabo maiores velit enim praesentium beatae."

  },

  {
    avatar:AVTR8,
    name:"Mawunyo Agor",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Nobis similique dignissimos quia cum reiciendis alias? Ipsam ratione,laudantium illo numquam alias reiciendis aut quas explicabo maiores velit enim praesentium beatae."

  },

  {
    avatar:AVTR9,
    name:"Dusan Tadic",
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Nobis similique dignissimos quia cum reiciendis alias? Ipsam ratione,laudantium illo numquam alias reiciendis aut quas explicabo maiores velit enim praesentium beatae."

  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
