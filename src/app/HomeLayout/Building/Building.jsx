"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React from 'react';
import { SplitText } from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import "./bulid.css"
import BuildindSlider from './BuildindSlider';
gsap.registerPlugin(useGSAP, SplitText , ScrollTrigger);

const Building = ({val}) => {



    useGSAP(() => {

        gsap.from(".hs5 h2", {
            duration: 0.5,
            scale:0,
            y: 80,
            delay: 1,
            rotationX: 120,
            transformOrigin: "0% 30% -30",
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
            trigger: ".hs5-logo",
            scrub:1,
          start: "top 100%",
          end: "+=500px",
          }
          });

        // gsap.from(".hs5-logo ", {
        //     duration: 0.5,
        //     scale:0,
        //     y: 80,
        //     delay: 1,
        //     rotationX: 120,
        //     transformOrigin: "0% 30% -30",
        //     ease: "power4.out",
        //     stagger: 0.01,
        //     scrollTrigger: {
        //     trigger: ".hs5-logo",
        //     scrub:1,
        //   start: "top 90%",
        //   end: "+=500px",
        //   }
        //   });

        var split = new SplitText(".hs5 h2 ", { type: "words,chars" });
          var charsa = split.chars;
          gsap.set(".hs5 h2", { perspective: 400 });
  
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
                  trigger: ".hs5 h2",
                  scrub: 1,
                  start: "top 100%",
                  end: "+=500px",
              }
              
              
          })

        //   if (window.matchMedia("(min-width: 992px)").matches) {
        //     gsap.set(".hs4", { opacity: "1" });
        //     gsap.to(".hs4", {
        //         opacity: "0",
        //         scrollTrigger: {
        //             trigger: ".build-direc",
        //             start: "top 70%", 
        //              end: "+=500px", 
        //             scrub: true,
                 
        //         }
        //     });
        // } 

        if (window.matchMedia("(min-width: 992px)").matches) {
            // Set initial opacity
            gsap.set(".hs4", { opacity: "1" });
        
            // Define the scroll-triggered animation
            gsap.to(".hs4", {
                opacity: "0.5",
                scrollTrigger: {
                    trigger: ".build-direc",
                    start: "top 100%",
                    end: "+=500px",
                    scrub: true,
                    onEnter: () => ScrollTrigger.refresh(), // Refresh ScrollTrigger on enter
                    onLeave: () => ScrollTrigger.refresh(), // Refresh ScrollTrigger on leave
                }
            });
        }
       
    
    })

    // useEffect(()=>{
    

    // },[])


    return (
        <div >
         
            <div className="hs5">
                <div className="container-fluid h5-containerfluid">
                    <div className="row">
                        <div className="col-md-12 build-direc">
                            <h2 className="colorgrey re-font-100">{val.acf.section_5_title}</h2>
                            {/* <Image src={val.acf.section_5_tag_image.url} className="hs5-logo" alt="Perch Logo"  width={500} height={500}/> */}
                            <BuildindSlider val={val}/>
                        </div>
                       
                    </div>
                </div>
            </div>

            {/* <BuildindSlider val={val}/> */}
        </div>
    );
}

export default Building;
