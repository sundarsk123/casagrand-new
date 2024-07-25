"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Test.css"
import Image from 'next/image';
import { useState , useEffect } from 'react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(useGSAP, SplitText);



const Testimonials = ({ val }) => {


    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
  
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    useEffect(() => {
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    useGSAP(() => {
        gsap.from(".hs10-div1", {
            duration: 0.5,
            scale: 0.8,
            y: 80,
            delay: 1,
            // transformOrigin: "0% 30% -30",
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".hs10-div2",
                scrub: 1,
                start: "top 110%",
                end: "+=500px",
            }
        });

        gsap.from(".hs10-div2", {
            duration: 0.5,
            scale: 0.8,
            y: 80,
            delay: 1,
            // transformOrigin: "0% -30 30%",
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".hs10-div2",
                scrub: 1,
                start: "top 110%",
                end: "+=500px",
            }
        });
        gsap.from(".hs10-div3", {
            duration: 0.5,
            scale: 0.8,
            y: 80,
            delay: 1,
            // transformOrigin: "0% 30% -30",
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".hs10-div2",
                scrub: 1,
                start: "top 110%",
                end: "+=500px",
            }
        });

        gsap.from(".hs10-div1-btm", {
            duration: 0.5,
            scale: 0.8,
            y: 80,
            delay: 1,
            // transformOrigin: "0% 30% -30",
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".hs10-div2-btm",
                scrub: 1,
                start: "top 110%",
                end: "+=500px",
            }
        });

        gsap.from(".hs10-div2-btm", {
            duration: 0.5,
            scale: 0.8,
            y: 80,
            delay: 1,
            // transformOrigin: "0% 30% -30",
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".hs10-div2-btm",
                scrub: 1,
                start: "top 110%",
                end: "+=500px",
            }
        });

        gsap.from(".hs10-div3-btm", {
            duration: 0.5,
            scale: 0.8,
            y: 80,
            delay: 1,
            // transformOrigin: "0% 30% -30",
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".hs10-div2-btm",
                scrub: 1,
                start: "top 110%",
                end: "+=500px",
            }
        });
        // const mediaQuery = window.matchMedia('(min-width: 768px)');

        var split = new SplitText(".hs10 h2 ", { type: "words,chars" });
        var charsa = split.chars;
        gsap.set(".hs10 h2", { perspective: 400 });

        gsap.from(charsa, {
            duration: 0.5,
            scale: 0,
            y: 100,
            delay: 1,
            rotationX: 120,
            transformOrigin: "0% 30% -30",
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".hs10 h2",
                scrub: 1,
                start: "top 110%",
                end: "+=500px",
            }
        })

        ScrollTrigger.create({
            trigger : "section.hs10",
            start: "top 100%",
            end: "bottom -50%",
            //

            onEnter: () => {
                gsap.to('body', { duration: 1.0, backgroundColor: '#E7E7E7'})
              },

            onLeaveBack: () => {
                gsap.to('body', { duration: 1.0, backgroundColor: '#ffffff'})
              },
        })




    })


    return (
        <div >
   
            <section className={`hs10 ${isScrolled ? 'active' : ''}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="font-40 acenter">{val.acf.testimonials_title}</h2>
                        </div>
                    </div>
                    <div className="row d-mob hs10-r1">
                        <div className="col-md-12">
                            <div className="swiper testi-container">
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
                                                centeredSlides : false,  
                                            },
                                            575: {
                                                loop: true,                         
                                                slidesPerView: 1.6,
                                                centeredSlides : false,  
                                            },
                                            768: {
                                                loop: true,                         
                                                slidesPerView: 2,
                                                centeredSlides : false,  
                                                 spaceBetween: 40,
                                            },
                                    }}
                                   
                                    centeredSlides={true}
                                    spaceBetween={20}
                                    grabCursor={true}
                                 
                                   
                                    className="mySwiperws"
                                >
                                    <div className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="hs10-div hs10-div1">
                                                <p className="hs10-div-p"><span className="testi-author">{val.acf.testimonials[0].testimonail_name}</span><br /><span className="testi-loc">{val.acf.testimonials[0].testimonal_location}</span></p>
                                                <Image className="hs10-div-icon" src={val.acf.testimonials[0].client_image.url} alt="Author Image" width={100} height={100} loading='lazy'/>
                                                {/* <p>{val.acf.testimonials[0].testimonial_review}</p> */}
                                                <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.acf.testimonials[0].testimonial_review }} />
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="hs10-div hs10-div1">
                                                <p className="hs10-div-p"><span className="testi-author">{val.acf.testimonials[1].testimonail_name}</span><br /><span className="testi-loc">{val.acf.testimonials[1].testimonal_location}</span></p>
                                                <Image className="hs10-div-icon" src={val.acf.testimonials[1].client_image.url} alt="Author Image"  width={100} height={100} loading='lazy' />
                                                <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.acf.testimonials[1].testimonial_review }} />
                                                </div>
                                        </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="hs10-div hs10-div1">
                                                <p className="hs10-div-p"><span className="testi-author">{val.acf.testimonials[2].testimonail_name}</span><br /><span className="testi-loc">{val.acf.testimonials[2].testimonal_location}</span></p>
                                                <Image className="hs10-div-icon" src={val.acf.testimonials[2].client_image.url} alt="Author Image" width={100} height={100} loading='lazy'/>
                                                <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.acf.testimonials[2].testimonial_review }} />
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="hs10-div hs10-div1">
                                                <p className="hs10-div-p"><span className="testi-author">{val.acf.testimonials[3].testimonail_name}</span><br /><span className="testi-loc">{val.acf.testimonials[3].testimonal_location}</span></p>
                                                <Image className="hs10-div-icon" src={val.acf.testimonials[3].client_image.url} alt="Author Image" width={100} height={100} loading='lazy'/>
                                                <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.acf.testimonials[3].testimonial_review }} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="row d-desk dis-none">
                        <div className="col-md-4">
                            <div className="hs10-div hs10-div1">
                                <p className="hs10-div-p"><span className="testi-author">{val.acf.testimonials[0].testimonail_name}</span><br /><span className="testi-loc">{val.acf.testimonials[0].testimonal_location}</span></p>
                                <Image className="hs10-div-icon" src={val.acf.testimonials[0].client_image.url} alt="Author Image" width={100} height={100} loading='lazy'/>
                                {/* <p>{val.acf.testimonials[0].testimonial_review}</p> */}
                                <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.acf.testimonials[0].testimonial_review }} />
                            </div>
                            <div className="hs10-div hs10-div1-btm">
                                <p className="hs10-div-p"><span className="testi-author">{val.acf.testimonials[2].testimonail_name}</span><br /><span className="testi-loc">{val.acf.testimonials[2].testimonal_location}</span></p>
                                <Image className="hs10-div-icon" src={val.acf.testimonials[2].client_image.url} alt="Author Image" width={100} height={100} loading='lazy'/>
                                <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.acf.testimonials[2].testimonial_review }} />
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="hs10-div  hs10-div2">
                                <p className="hs10-div-p"><span className="testi-author">{val.acf.testimonials[1].testimonail_name}</span><br /><span className="testi-loc">{val.acf.testimonials[1].testimonal_location}</span></p>
                                <Image className="hs10-div-icon" src={val.acf.testimonials[1].client_image.url} alt="Author Image" width={100} height={100} loading='lazy'/>
                                <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.acf.testimonials[1].testimonial_review }} />
                            </div>
                            <div className="hs10-div hs10-div2-btm">
                                <p className="hs10-div-p"><span className="testi-author">{val.acf.testimonials[2].testimonail_name}</span><br /><span className="testi-loc">{val.acf.testimonials[2].testimonal_location}</span></p>
                                <Image className="hs10-div-icon" src={val.acf.testimonials[2].client_image.url} alt="Author Image" width={100} height={100} loading='lazy'/>
                                <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.acf.testimonials[2].testimonial_review }} />
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="hs10-div  hs10-div3">
                                <p className="hs10-div-p"><span className="testi-author">{val.acf.testimonials[3].testimonail_name}</span><br /><span className="testi-loc">{val.acf.testimonials[3].testimonal_location}</span></p>
                                <Image className="hs10-div-icon" src={val.acf.testimonials[3].client_image.url} alt="Author Image" width={100} height={100} loading='lazy'/>
                                <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.acf.testimonials[3].testimonial_review }} />
                            </div>
                            <div className="hs10-div hs10-div3-btm">
                                <p className="hs10-div-p"><span className="testi-author">{val.acf.testimonials[1].testimonail_name}</span><br /><span className="testi-loc">{val.acf.testimonials[1].testimonal_location}</span></p>
                                <Image className="hs10-div-icon" src={val.acf.testimonials[1].client_image.url} alt="Author Image" width={100} height={100} loading='lazy'/>
                                <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.acf.testimonials[1].testimonial_review }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonials;
