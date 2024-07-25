"use client"
import React from 'react'
import "./Vision.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);


const Vision = () => {

    useGSAP(() => {
        var split = new SplitText(".vision-heading h2 ", { type: "words,chars" });
        var charsa = split.chars;
        gsap.set(".vision-heading h2", { perspective: 400 });

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
                trigger: ".vision-heading h2",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }


        })

        gsap.utils.toArray('.vision-acc').forEach(card => {

            gsap.fromTo(card,
                { y: -100, opacity: -1 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 110%',
                        end: 'bottom 90%',
                        scrub: 3,
                    }
                }
            );
        });
    })
    return (
        <>
            <div className='Vision' >
                <div className='vision-heading'>
                    <h2>Vision & Mission</h2>
                </div>
                <div className='vision-acc-main'>
                    <div className='vision-acc-main-two'>
                        <div className='vision-acc-first vision-acc'>
                            <div className='vision-left '>
                                <p>Our Vision</p>
                            </div>
                            <div className='vision-right'>
                                <p> To be India&apos;s most reliable independent home building solution provider, ensuring a seamless home building process from design to handover.</p>
                            </div>
                        </div>
                        <div className='vision-acc-second vision-acc'>
                            <div className='vision-left '>
                                <p>Our Mission</p>
                            </div>
                            <div className='vision-right'>
                                <p>To earn the distinction of being the most reliable independent home solution provider, successfully building 500+ homes over the next 3 years. We aim to transform plots into superior quality homes tailored to meet our clients specific requirements.</p>
                            </div>
                        </div>
                        <div className='vision-acc-third vision-acc'>
                            <div className='vision-left '>
                                <p>Our Purpose</p>
                            </div>
                            <div className='vision-right'>
                                <p>To serve society by providing high-quality homes at competitive prices and to offer our employees the best opportunities for career growth, remuneration, and benefits.To delight customers at every step.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vision
