"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination , Navigation } from 'swiper/modules';
import axios from 'axios';
import { useEffect, useState } from "react";
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText';
import Image from 'next/image';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);



const ProjectLanding = () => {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
  
      const fetchPosts = async () => {
       
          const response = await axios.get('https://api.casagrandperch.co.in/wp-json/wp/v2/projects?slug=&_embed');
          setPosts(response.data);
         };
  
      fetchPosts();
      const interval = setInterval(fetchPosts, 60000);
  
      return () => clearInterval(interval);
    }, []);

    // useGSAP(()=>{
    // const projectContainers = document.querySelectorAll('.product-container-div-outer');

    // if (window.innerWidth >= 768) {
    //     projectContainers.forEach((container, index) => {
    //       gsap.from(container, {
    //         y: '100%', 
    //         opacity: 0,
    //         duration: 0.5,
    //         delay: 0.4 * index, // Adjust delay according to your needs
    //         ease: 'power2.out',
    //         scrollTrigger: {
    //           trigger: container, 
    //           start: 'top 120%',
    //           end: '+=800px', 
    //           scrub: true, 
    //         },
    //       });
    //     });
    //   }

    // },[])
    return (
        <div className="product-container-div-outer">
            <Swiper
            breakpoints={
                {
                 0: {
                     slidesPerView: 1,
                     scrollbar: {
                     dragSize: 50,
                     },
                     },
                     0: {
                         loop: true,                         
                         slidesPerView: 1,
                         
                         //centeredSlides : false,  
                     },
                     575: {
                         loop: true,                         
                         slidesPerView: 1,
                         
                         //centeredSlides : true,  
                     },
                     768: {
                         loop: true,                         
                         slidesPerView: 2,
                         //centeredSlides : true,  
                          pagination: false,
                     },
                     992: {
                     slidesPerView: 3,
                      pagination: false,
                     },
                     1360: {
                     slidesPerView: 4,
                      pagination: false,
                     },
                }
             }
                slidesPerView={4}
                // spaceBetween={30}
                navigation={{
                    navigation: true,
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  pagination={{
                    el: ".swiper-pagination",
                    dynamicBullets: true,
                    
                  }}
               
                modules={[Pagination, Navigation]}
                className="product-container"
            >
                  {
        posts.slice(0, 6).map((val) => {
          return (
         
           <SwiperSlide key={val.id}>
              <Link href={`/projects/${val.slug}`} style={{color : "inherit" , textDecoration : "none"}}>
           
           <div className="swiper-slide" key={val.id}>

                        <div className="lp-ps4-grid">
                      
                            <Image
                            width={306}
                            height={268} 
                            className="ps4-grid-img ld-wd-100" 
                            src={val?._embedded['wp:featuredmedia']['0']?.source_url} 
                            alt="project Image" 
                            />
                          
                            <p className="ps4-pd-title-outer acenter"><span className="ps4-pd-title">{val?.title?.rendered}</span><br />
                                {/* <span className="ps4-pd-loc">{val?.acf?.project_location}</span> */}
                                </p>
                            <div className="ps4-pd-outer">
                                <div className="ps4-pd">
                                    <Image
                                    width={15}
                                    height={13}
                                    src="https://dezvolta.in/casagrand-perch/img/ICON-01.svg" 
                                    alt="Icon" />{val?.acf?.bhk}
                                </div>
                                <div className="ps4-pd">
                                    <Image
                                    width={15}
                                    height={13}
                                    src="https://dezvolta.in/casagrand-perch/img/ICON-02.svg" 
                                    alt="Icon" />{val?.acf?.structural}
                                </div>
                                <div className="ps4-pd">
                                    <Image
                                    width={15}
                                    height={13}
                                    src="https://dezvolta.in/casagrand-perch/img/ICON-03.svg" 
                                    alt="Icon" />{val?.acf?.buildup_area}
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    </Link>
            </SwiperSlide>
         
          )
        })
      }
    
            <div className="swiper-pagination"></div>
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          

      </div>
    );
}

export default ProjectLanding;
