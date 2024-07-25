"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useState } from 'react';


const OurSwiper = ({val}) => {

    const[customer] = useState(val.acf.lp_section3_customer)
    return (
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

                },

                1300: {

                    slidesPerView: 4,

                },

                1440: {

                    slidesPerView: 5,

                },
            }}
            slidesPerView={5}
            // spaceBetween={30}

            pagination={{
                clickable: true,
            }}

            // autoplay={{
            //     delay : 2500,
            // }}
            loop={true}
            grabCursor={true}
            modules={[Autoplay]}
            className="ourcustomers-container"
        >
            {
                customer.map(val=>{return(<>
              
                  <SwiperSlide>
                   
                <div className="swiper-slide" key={val.id}>
                    <div className="lp3-div">
                        <Image 
                        width={697}
                        height={1001}
                        className="customer-video-img Def-img-wd" 
                        src={val.lp_section3_customer_image.url} 
                        alt={val.lp_section3_customer_image.title}   
                        />
                        <div className="CustomerInformation">
                            <svg id="customer-img" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 22" width="31" height="22">
                                <path id="Layer" className="s0" d="m21.8 14.3c-0.3-0.1-0.6-0.1-0.8-0.2-3.1-1-5.3-4-5.1-7.2 0.2-3.4 2.6-6.2 6-6.8 4.3-0.7 8.4 2.5 8.4 7 0.1 2.6-0.3 5.2-1.6 7.6-1.8 3.6-4.7 5.7-8.6 6.5q-0.3 0-0.7 0.1c-0.5 0.1-0.9-0.1-1.2-0.5-0.2-0.4-0.1-0.8 0.1-1.2q1.5-2.3 3-4.5 0.2-0.4 0.4-0.8z" />
                                <path id="Layer" className="s0" d="m5.8 14.4c-0.6-0.3-1.3-0.5-1.9-0.8-2.8-1.4-4.3-4.5-3.8-7.6 0.5-3 3-5.5 6-5.9 4.2-0.6 8.1 2.5 8.3 6.9 0.1 2.7-0.3 5.3-1.6 7.8-1.9 3.7-5.1 5.8-9.1 6.5q-0.2 0-0.3 0c-0.5 0.1-0.9-0.1-1.1-0.5q-0.4-0.6 0.1-1.2c0.4-0.7 0.9-1.4 1.4-2.1q0.9-1.3 1.8-2.8 0.1-0.1 0.2-0.3z" />

                            </svg>
                            <p className="lp3-customer-video-name">{val.lp_section3_customer_name}</p>
                        </div>
                    </div>
                </div>
               
            </SwiperSlide>
      
                </>)})
            }


        </Swiper>
    );
}

export default OurSwiper;
