import React from 'react';

import bg from '../../../images/icons/bgwork.jpg'

import './Projects.css'
import "swiper/swiper.min.css";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import num1 from '../../../images/image11.png'
import num2 from '../../../images/image12.png'
import num3 from '../../../images/image13.png'
// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper';


// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);
const Projects = () => {
    const back={
       
        backgroundImage: `url(${bg})`,
        backgroundColor:"#142F43",
        backgroundRepeat:"no-repeat",
        objectFit:"cover",
        backgroundSize:"cover" ,
        backgroundBlendMode:"multiply",
        height:"60vh",
        backgroundImageAttachment:"fixed"
        
    }
    return (
        <div style={{marginTop:"20px",fontFamily:"Roboto",color:"white",fontSize:"24px" }}>
        <div style={back} >
        <h1>Here are some of  <span style={{color:"#7AB259"}}>our works</span> </h1>
        <div style={{marginLeft:"270px",marginRight:"130px"}}>
        <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <img src={num1} alt="num" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={num2}  alt="num"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={num3}  alt="num"/>
        </SwiperSlide>
        
        </Swiper>
        </div>
       

        </div>

            
        </div>
    );
};

export default Projects;