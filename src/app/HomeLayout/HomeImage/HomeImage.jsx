"use client"
import Image from 'next/image';
import React from 'react';
import "./Home.css"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';

const HomeImage = ({val}) => {

    useGSAP(()=>{
        ScrollTrigger.create({
            trigger : ".hs11",
            start: "top 50%",
            end: "bottom 0%",
            // E7E7E7

            onEnter: () => {
                gsap.to('body', { duration: 1.0, backgroundColor: '#fff'})
              },

            onLeaveBack: () => {
                gsap.to('body', { duration: 1.0, backgroundColor: '#fff'})
              },
        })
    })
    return (
        <div>
            <div className="hs11">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 imgs">
                            <Image src={val.acf.testimonials_bg_image.url} alt="Footer Pattern" width={1500} height={1500} loading='lazy'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeImage;
