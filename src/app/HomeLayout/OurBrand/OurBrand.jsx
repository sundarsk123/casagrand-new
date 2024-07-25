"use client"
// import React from 'react';
import "./ourBrand.css"
import styles from './brand.module.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from "next/image";
import Marquee from 'react-fast-marquee'
import { useState, useEffect } from 'react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// gsap.registerPlugin(useGSAP, SplitText);




const OurBrand = ({ val }) => {

    // const images = [
    //     { src: "/img/Brand01.png", alt: "Logo" },
    //     { src: "/img/Brand02.png", alt: "Logo" },
    //     { src: "/img/Brand03.png", alt: "Logo" },
    //     { src: "/img/Brand04.png", alt: "Logo" },
    //     { src: "/img/Brand05.png", alt: "Logo" },
    //     { src: "/img/Brand06.png", alt: "Logo" },
    // ];
    
    // const imagee = [
    //     { src: "/img/Brand07.png", alt: "Logo" },
    //     { src: "/img/Brand08.png", alt: "Logo" },
    //     { src: "/img/Brand09.png", alt: "Logo" },
    //     { src: "/img/Brand10.png", alt: "Logo" },
    //     { src: "/img/Brand11.png", alt: "Logo" },
    //     { src: "/img/Brand07.png", alt: "Logo" },
        
    
    // ];

   

    const [direction, setDirection] = useState('up');

    useEffect(() => {
      const handleResize = () => {
        const isMobile = window.innerWidth <= 767;
        setDirection(isMobile ? 'right' : 'up');
      };
  
      handleResize(); 
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const [direction2, setDirection2] = useState('left');

    useEffect(() => {
      const handleResize = () => {
        const isMobiles = window.innerWidth <= 767;
        setDirection2(isMobiles ? 'left' : 'down');
      };
  
      handleResize(); 
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    useGSAP(() => {
        gsap.from(".hs9 h2", {
            duration: 0.5,
            /*scale:1,*/
            y: 80,
            delay: 1,
            /*transformOrigin: "0% 30% -30",*/
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".hs9 h2",
                scrub: 1,
                start: "top 110%",
                end: "+=500px",
            }
        });

        
        var split = new SplitText(".hs9 h2 ", { type: "words,chars" });
        var charsa = split.chars;
        gsap.set(".hs9 h2", { perspective: 400 });

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
                trigger: ".hs9 h2",
                scrub: 1,
                start: "top 110%",
                end: "+=500px",
            }
        })

 

    
    })

    const[images]=useState(val?.acf?.brand_partner_logos_left)
    const[imgee]=useState(val?.acf?.brand_partner_logos_right)

    return (
        <div>
     
            <div className="hs9">
                <div className="container-fluid">
                    <div className="row">
                        <div className={"col-md-6 hs9-col1"}>
                            <Image className="hs9-img " src={val.acf.brand_partner_image.url} alt="our1" width={800} height={800} loading="lazy" />
                            <Image className="hs9-img-mob he" src={val.acf.brand_partner_mobile_image.url} alt="our2" width={800} height={800} loading="lazy" />
                            <h2 className="font-40 colorw hs9-title">{val.acf.brand_partner_title}</h2>
                        </div>
                        <div className="col-md-3 df-none">
                            <div className="hs9-logo">
                            <Marquee direction={direction}>
                              {images.map((val) => (
                                    <div key={val?.id}>
                                        <Image src={val?.brand_partner_logo_left?.url} alt={val?.brand_partner_logo_left?.alt} width={150} height={50} loading="lazy"  />
                                    </div>
                                ))}
                                </Marquee>
                            </div>
                        </div>
                        <div className="col-md-3 df-none-m df-block">
                            <div className="hs9-logo">
                           
                              {images.map((val) => (
                                    <div key={val.id} className={styles.hss}>
                                        <Image src={val?.brand_partner_logo_left?.url} alt={val?.brand_partner_logo_left?.alt} width={150} height={50} loading="lazy" />
                                    </div>
                                ))}
                            
                            </div>
                        </div>
                        <div className="col-md-3 df-none">
                            <div className="hs9-logo js-ticker">
                                <Marquee direction={direction2}>
                                {imgee.map((val) => (
                                    <div key={val.id}>
                                        <Image src={val?.brand_partner_logo_right?.url} alt={val?.brand_partner_logo_right?.alt} width={150} height={50} loading="lazy"  />
                                    </div>
                                ))}
                                </Marquee>
                            </div>
                        </div>
                        <div className="col-md-3 df-none-m df-block">
                            <div className="hs9-logo js-ticker">
                               
                                {imgee.map((val) => (
                                    <div key={val.id} className={styles.hs}>
                                        <Image src={val?.brand_partner_logo_right?.url} alt={val?.brand_partner_logo_right?.alt} width={150} height={50} loading="lazy"  />
                                    </div>
                            ))}
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurBrand;
