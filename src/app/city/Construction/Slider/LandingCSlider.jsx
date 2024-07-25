"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import Marquee from 'react-fast-marquee';
import { useState } from 'react';


const LandingCSlider = ({val}) => {

    const [slides] = useState(val.acf.lp_section_8_slider)
    return (
        <>
        
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

                        slidesPerView: 1.2,

                        centeredSlides: false,

                    },

                    768: {

                        loop: true,

                        slidesPerView: 2,

                        centeredSlides: false,

                    },

                    992: {

                        slidesPerView: 3,
                        pagination: false,
                    },

                    1300: {

                        slidesPerView: 4,
                        pagination: false,
                    },

                    1440: {

                        slidesPerView: 4,
                        pagination: false,
                    },
                }}
                slidesPerView={4}
                // spaceBetween={30}
                // autoplay={{
                //     delay : 2500
                // }}
                pagination={{
                    el: ".swiper-pagination",
                    dynamicBullets: true,
                    clickable: true,
                  }}


                loop={true}
                grabCursor={true}
                modules={[Pagination ]}
                className="reasonstochoose-container"
            >
                {
                    slides.map(slid => {
                        return(
                            <SwiperSlide key={slid.id}>

                            <div class="swiper-slide">
                                <div class="lp8-div">
                                    {/* <p class="lp8-div-p">Enjoy Peace of<br />
                                        Mind: Hassle-free<br />
                                        Journey</p> */}
                                         <p className="lp8-div-p " dangerouslySetInnerHTML={{ __html: slid.lp_section_8_slider_title}} />
                                    <p className="lp8-div-content fn-three-s">{slid.lp_section_8_slider_content}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        )
                    })
                }
                
               
                {/* <SwiperSlide>
                <div class="swiper-slide">
                        <div class="lp8-div">
                            <p class="lp8-div-p">Enjoy Peace of<br />
                                Mind: Hassle-free<br />
                                Journey</p>
                            <p class="lp8-div-content">Enjoy Peace of Mind: Hassle-free Journey Seamless assistance with EB, sewage, metro water, property tax, & more</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="swiper-slide">
                        <div class="lp8-div">
                            <p class="lp8-div-p">Enjoy Peace of<br />
                                Mind: Hassle-free<br />
                                Journey</p>
                            <p class="lp8-div-content">Enjoy Peace of Mind: Hassle-free Journey Seamless assistance with EB, sewage, metro water, property tax, & more</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="swiper-slide">
                        <div class="lp8-div">
                            <p class="lp8-div-p">Enjoy Peace of<br />
                                Mind: Hassle-free<br />
                                Journey</p>
                            <p class="lp8-div-content">Enjoy Peace of Mind: Hassle-free Journey Seamless assistance with EB, sewage, metro water, property tax, & more</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                <div class="swiper-slide">
                        <div class="lp8-div">
                            <p class="lp8-div-p">Enjoy Peace of<br />
                                Mind: Hassle-free<br />
                                Journey</p>
                            <p class="lp8-div-content">Enjoy Peace of Mind: Hassle-free Journey Seamless assistance with EB, sewage, metro water, property tax, & more</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>


                <div class="swiper-slide">
                        <div class="lp8-div">
                            <p class="lp8-div-p">Enjoy Peace of<br />
                                Mind: Hassle-free<br />
                                Journey</p>
                            <p class="lp8-div-content">Enjoy Peace of Mind: Hassle-free Journey Seamless assistance with EB, sewage, metro water, property tax, & more</p>
                        </div>
                    </div>
                </SwiperSlide> */}
               <div className="swiper-pagination"></div>
            </Swiper>
           
        </>
    );
}

export default LandingCSlider;
