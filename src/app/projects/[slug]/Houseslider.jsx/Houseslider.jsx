"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay , Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useState } from 'react';
import "./houseslider.css"

const Houseslider = ({val}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    const [imgs] = useState(val?.acf?.project_gallery)
    return (
        <>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        scrollbar: {
                            dragSize: 50,
                        },
                        navigation : false
                    },
                    0: {
                        loop: true,
                        slidesPerView: 1,
                        centeredSlides: false,
                        spaceBetween: 20,
                        navigation : false

                    },
                    575: {
                        loop: true,
                        slidesPerView: 1.6,
                        centeredSlides: true,
                        spaceBetween: 60,
                        navigation : false

                    },
                    768: {
                        loop: true,
                        slidesPerView: 2,
                        centeredSlides: true,
                        spaceBetween: 60,
                        navigation : false

                    },
                    992: {
                        slidesPerView: 2.6,
                        spaceBetween: 140,
                        centeredSlides: true,
                        navigation : false

                    },
                }}
                slidesPerView={2}
                navigation={false}
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                autoHeight={true}
                freeMode={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay ,  Navigation]}
                className="myswipergg"
            >
                {
                    imgs?.map((img) => {
                        return (

                            <SwiperSlide key={img.id}>

                                <div className="pd-gallery-img-div">
                                    <Image
                                        className={`pd-gallery-img project-border  wd-100 ${isLoaded ? 'clear-img' : 'blur-img'}`}
                                        alt='img2'
                                        src={img?.project_gallery_image}
                                        width={300}
                                        height={400}
                                        // 427 w and h
                                        priority
                                        onLoad={handleImageLoad}
                                    />
                                </div>

                            </SwiperSlide>

                        )
                    })
                }



            </Swiper>
        </>
    );
}

export default Houseslider;
