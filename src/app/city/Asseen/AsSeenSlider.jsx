"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useState } from 'react';
import Image from 'next/image';


const AsSeenSlider = ({val}) => {

    const [slide] = useState(val.acf.lp_section9_slider)
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
                        pagination: false,
                    },
                    992: {
                        slidesPerView: 3,
                        pagination: false,
                    },

            
                }}
                slidesPerView={3}
                // spaceBetween={30}

                navigation={{
                    navigation: true,
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}

                pagination={{
                    el: ".swiper-pagination",
                    dynamicBullets: true,
                    clickable: true,
                  }}
                autoplay={{
                    delay : 2500,
                }}
                loop={true}
                grabCursor={true}
                modules={[Navigation , Pagination , Autoplay]}
                className="asseenon-container"
            >
                {
                slide.map((slid)=>{
                        return(
                            <SwiperSlide key={slid.id}>
                            <div className="swiper-slide">
                                <div className="lp9-div">
                                    <Image
                                    width={200}
                                    height={63} 
                                    alt='logo1'
                                    className="lp9-logo" 
                                    src={slid.lp_section9_logo.url} />
                                    <p className="lp9-div-content fn-four">{slid.lp_section9_content}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        )
                    })
                }
             
                {/* <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="lp9-div">
                            <img className="lp9-logo" src="/landingpage/business-standard.png" />
                            <p className="lp9-div-content">CASAGRAND PERCH aspires to offer a stress-free experience considering most home buyers are unaware of the process that goes behind constructing a house, thereby aiding them in all procedures from Design to Handover.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="lp9-div">
                            <img className="lp9-logo" src="/landingpage/Infra.png" />
                            <p className="lp9-div-content">Through this venture, we will build an individual home by following the same standards of CASAGRAND. People usually reach out to unorganised players to build their homes and there are times when they are...</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="lp9-div">
                            <img className="lp9-logo" src="/landingpage/Infra.png" />
                            <p className="lp9-div-content">Enjoy Peace of Mind: Hassle-free Journey Seamless assistance with EB, sewage, metro water, property tax, & more</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="swiper-slide">
                        <div className="lp9-div">
                            <img className="lp9-logo" src="/landingpage/Infra.png" />
                            <p className="lp9-div-content">Enjoy Peace of Mind: Hassle-free Journey Seamless assistance with EB, sewage, metro water, property tax, & more</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>


                    <div className="swiper-slide">
                        <div className="lp9-div">
                            <img className="lp9-logo" src="/landingpage/Infra.png" />
                            <p className="lp9-div-content">Enjoy Peace of Mind: Hassle-free Journey Seamless assistance with EB, sewage, metro water, property tax, & more</p>
                        </div>
                    </div>
                </SwiperSlide> */}
                <div className="swiper-pagination"></div>
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </>
    );
}

export default AsSeenSlider;
