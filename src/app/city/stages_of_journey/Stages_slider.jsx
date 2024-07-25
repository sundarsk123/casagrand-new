"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import "./Stage.css"

const StagesSlider = ({val}) => {
    return (
        <>
            <div className='stage-container-div-outer'>
                <div className='stage-mx-wd'>
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
                                navigation : false
                            },
                            575: {
                                loop: true,
                                slidesPerView: 1,
                                centeredSlides: false,
                                navigation : false
                            },
                            768: {
                                loop: true,
                                slidesPerView: 2,
                                centeredSlides: false,
                                pagination: false,
                                navigation : false
                            },
                            992: {
                                slidesPerView: 3,
                                pagination: false,
                            },


                        }}
                        slidesPerView={3}
                        // spaceBetween={30}

                        navigation={{
                            // navigation: true,
                            nextEl: '.stage-next',
                            prevEl: '.stage-prev',
                        }}

                        pagination={{
                            el: ".swiper-pagination",
                            dynamicBullets: true,
                            clickable: true,
                        }}

                        grabCursor={true}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="stage-container"
                    >

                        <SwiperSlide >
                            <div className='stage-con'>
                                <p>{val?.acf?.project_different_stages[0]?.project_different_stages_sub_title}</p>
                            </div>
                            <div className="stage-img-div">
                                <Image
                                    width={500}
                                    height={503}
                                    alt='logo1'
                                    className="img-main"
                                    src={val?.acf?.project_different_stages[0]?.project_different_stages_image?.url}
                                />

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='stage-con'>
                            <p>{val?.acf?.project_different_stages[1]?.project_different_stages_sub_title}</p>
                            </div>
                            <div className="stage-img-div">
                                <Image
                                    width={500}
                                    height={503}
                                    alt='logo1'
                                    className="img-main"
                                    src={val?.acf?.project_different_stages[1]?.project_different_stages_image?.url}
                                />

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='stage-con'>
                            <p>{val?.acf?.project_different_stages[2]?.project_different_stages_sub_title}</p>
                            </div>
                            <div className="stage-img-div">
                                <Image
                                    width={500}
                                    height={503}
                                    alt='logo1'
                                    className="img-main"
                                    src={val?.acf?.project_different_stages[2]?.project_different_stages_image?.url}
                                />

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='stage-con'>
                            <p>{val?.acf?.project_different_stages[3]?.project_different_stages_sub_title}</p>
                            </div>
                            <div className="stage-img-div">
                                <Image
                                    width={500}
                                    height={503}
                                    alt='logo1'
                                    className="img-main"
                                    src={val?.acf?.project_different_stages[3]?.project_different_stages_image?.url}
                                />

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='stage-con'>
                            <p>{val?.acf?.project_different_stages[4]?.project_different_stages_sub_title}</p>
                            </div>
                            <div className="stage-img-div">
                                <Image
                                    width={500}
                                    height={503}
                                    alt='logo1'
                                    className="img-main"
                                    src={val?.acf?.project_different_stages[4]?.project_different_stages_image?.url}
                                />

                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='stage-con'>
                            <p>{val?.acf?.project_different_stages[5]?.project_different_stages_sub_title}</p>
                            </div>
                            <div className="stage-img-div">
                                <Image
                                    width={500}
                                    height={503}
                                    alt='logo1'
                                    className="img-main"
                                    src={val?.acf?.project_different_stages[5]?.project_different_stages_image?.url}
                                />

                            </div>
                        </SwiperSlide>

                        <div className="swiper-pagination"></div>
                    
                    </Swiper>
                    <div className="swiper-button-prev stage-prev display-none"></div>
                    <div className="swiper-button-next stage-next display-none"></div>
                </div>

            </div>
        </>
    );
}

export default StagesSlider;
