"use client"
import React from 'react';
import "./aboutIntro.css"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
gsap.registerPlugin(useGSAP, SplitText , ScrollTrigger);
import { Helmet } from 'react-helmet';

const AboutIntro = () => {
    const title =  'About-us';
    const description = 'Default Description';

    useGSAP(()=>{
        var split = new SplitText(".intro-flex h1", { type: "words,chars" });
        var charsa = split.chars;
        gsap.set(".intro-flex h1", { perspective: 400 });

        gsap.from(charsa, {
            duration: 0.5,
            scale: 0,
            y: 100,
            delay: 0.3,
            rotationX: 120,
            transformOrigin: "0% 30% -30",
            ease: "power4.out",
            stagger: 0.01,     
        })
    })
    return (
        <> <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Helmet>
        <div className='container-fluid intro-main-div'>
            <div className='row'>
                <div className='col-md-12 intro-flex'>
                    <div className='div-abs'> 
                        <Image priority src={"/about/map/MAP09.png"} alt='map' width={500} height={500}/>
                    </div>
                    <h1 className='intro-cen font-100'>
                    SOUTH INDIA&apos;S <br/> LEADING REAL ESTATE <br/> COMPANY
                    </h1>
                </div>
            </div>
        </div>
        </>
    );
}

export default AboutIntro;
