"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import "./bulid.css"
import Image from 'next/image';
import { useState } from 'react';

const BuildindSlider = ({val}) => {

    // const[slide ]=useState(val.acf.section_5_slider)
    return (
       
   
            <div className="hs6">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="hs6-div-outer">
                                <div className="swiper feature-container">
                                    <Swiper
                                        breakpoints={{
                                            0: {
                                                slidesPerView: 1,
                                                scrollbar: {
                                                    dragSize: 50,
                                                },
                                            },
                                            0: {
                                                loop: true,
                                                slidesPerView: 1.2,
                                                centeredSlides: false,
                                            },
                                            575: {
                                                loop: true,
                                                slidesPerView: 1.6,
                                                centeredSlides: true,
                                            },
                                            768: {
                                                loop: true,
                                                slidesPerView: 2,
                                                centeredSlides: true,
                                            },
                                            992: {
                                                slidesPerView: 4,
                                            },
                                        }}
                                        // slidesPerView={2}
                                        loop={true}
                                        grabCursor={true}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        modules={[Autoplay]}
                                        className="mySwipers"
                                    >
                                        <div className="swiper-wrpper">
                                           <SwiperSlide>
                                                <div className="swiper-side">
                                                    <div className="hs6-div">
                                                        <p className="hs6-div-p">{val.acf.section_5_slider[0].section_5_slider_title}</p>
                                                        <Image className="hs6-div-icon" src={val.acf.section_5_slider[0].section_5_icon.url} alt="Icon" width={50} height={50} />
                                                        <p className="hs6-div-content fn-w3">{val.acf.section_5_slider[0].section_5_content}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-side">
                                                    <div className="hs6-div">
                                                        <p className="hs6-div-p">{val.acf.section_5_slider[1].section_5_slider_title}</p>
                                                        <Image className="hs6-div-icon" src={val.acf.section_5_slider[1].section_5_icon.url} alt="Icon" width={50} height={50} />
                                                        <p className="hs6-div-content fn-w3">{val.acf.section_5_slider[1].section_5_content}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-side">
                                                    <div className="hs6-div">
                                                        <p className="hs6-div-p">{val.acf.section_5_slider[2].section_5_slider_title}</p>
                                                        <Image className="hs6-div-icon" src={val.acf.section_5_slider[2].section_5_icon.url} alt="Icon" width={50} height={50} />
                                                        <p className="hs6-div-content fn-w3">{val.acf.section_5_slider[2].section_5_content}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-side">
                                                    <div className="hs6-div">
                                                        <p className="hs6-div-p">{val.acf.section_5_slider[0].section_5_slider_title}</p>
                                                        <Image className="hs6-div-icon" src={val.acf.section_5_slider[0].section_5_icon.url} alt="Icon" width={50} height={50} />
                                                        <p className="hs6-div-content fn-w3">{val.acf.section_5_slider[0].section_5_content} </p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-side">
                                                    <div className="hs6-div">
                                                        <p className="hs6-div-p">{val.acf.section_5_slider[1].section_5_slider_title}</p>
                                                        <Image className="hs6-div-icon" src={val.acf.section_5_slider[1].section_5_icon.url} alt="Icon" width={50} height={50} />
                                                        <p className="hs6-div-content fn-w3">{val.acf.section_5_slider[1].section_5_content}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper-side">
                                                    <div className="hs6-div">
                                                        <p className="hs6-div-p">{val.acf.section_5_slider[2].section_5_slider_title}</p>
                                                        <Image className="hs6-div-icon" src={val.acf.section_5_slider[2].section_5_icon.url} alt="Icon" width={50} height={50} />
                                                        <p className="hs6-div-content fn-w3">{val.acf.section_5_slider[2].section_5_content}</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    );
}

export default BuildindSlider;
