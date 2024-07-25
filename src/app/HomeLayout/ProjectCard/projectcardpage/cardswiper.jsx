"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Navigation } from 'swiper/modules';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";


const Cardswiper = ({val , posts}) => {
    useGSAP(()=>{
        gsap.from('.fade', {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut'
          });
    })

    

    return (

       
        <div  className="fade">
           
        <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        scrollbar: { dragSize: 50 }

                    },
                    768: {
                        slidesPerView: 1,
                    },
                    992: {
                        slidesPerView: 1,
                    },
                    2300: {
                        slidesPerView: 1,
                    }
                }}
                effect={'cards'}
                spaceBetween={10}
                navigation={true}
        
                grabCursor={true}
                modules={[EffectCards, Navigation]}
                className="mySwiper"
            >
                 {
                posts.slice(0, 6).map(datas =>{
                    return(
                        <div key={datas.id}>

                <SwiperSlide>
                    <Link href={`/projects/${datas.slug}`} style={{color : "inherit" , textDecoration : "none" }}>
                    <div className="hs3-grid ">

                        <Image 
                        src={datas?._embedded['wp:featuredmedia']['0']?.source_url}  
                        alt="img1" 
                        width={300} 
                        height={300} 
                        className="hs3-grid-img img-w hgt" 
                        loading="lazy" />
                        <p className="hs3-pd-title-outer acenter"><span className="hs3-pd-title">{datas?.title?.rendered}</span><br />
                            {/* <span className="hs3-pd-loc">{datas?.acf?.project_location}</span> */}
                            </p>
                        <div className="hs3-pd-outer">
                            <div className="hs3-pd">
                                <Image src={"img/ICON-01.svg"} alt="Icon" width={10} height={10} loading="lazy" className="hgt" />
                                <span className="pos-re-b">{datas?.acf?.bhk}</span>
                            </div>
                            <div className="hs3-pd">
                                <Image src={"img/ICON-02.svg"} alt="Icon" width={10} height={10} loading="lazy" className="hgt" />
                                <span className="pos-re-b">{datas?.acf?.structural}</span>
                            </div>
                            <div className="hs3-pd">
                                <Image src={"img/ICON-03.svg"} alt="Icon" width={10} height={10} loading="lazy" className="hgt" />
                                <span className="pos-re-b">{datas?.acf?.buildup_area}</span>
                            </div>
                        </div>
                        
                        <Link className="project-cta" href={`/projects/${datas.slug}`}><span>View project</span></Link>
                        </div>
                  
                    </Link>
                </SwiperSlide>
                
                </div>
                
                    )
                })
            }
                </Swiper>
        </div>
    );
}

export default Cardswiper;
