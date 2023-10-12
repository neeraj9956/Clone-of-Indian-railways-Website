import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider(){
    return(
        <Swiper
        modules={[Navigation, Pagination, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    
      autoplay={{ draggable: true }}
        
      >
        <SwiperSlide>
          <img src="https://indianrailways.gov.in/amrit_new.jpg"alt="" style={{width:"100%",height:"60vh"}}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://indianrailways.gov.in/Pariksha.jpg"alt="" style={{width:"100%",height:"60vh"}}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://cbpssubscriber.mygov.in/assets/uploads/3rpbtfC38B9muoRQ?54"alt=""style={{width:"100%",height:"60vh"}}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://images.news18.com/ibnlive/uploads/2019/02/PM-Modi-Flags-Off-Vande-Bharat-Express-1.jpg?impolicy=website&width=0&height=0"alt=""style={{width:"100%",height:"60vh"}}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/pm-modi-new-pti-sixteen_nine.jpg?VersionId=ddEjUN77itIHsPaJcEWaKKd7oIFahJNb"alt=""style={{width:"100%",height:"60vh"}}/>
        </SwiperSlide>
        
        
      
      </Swiper>

    );
};
export default Slider;