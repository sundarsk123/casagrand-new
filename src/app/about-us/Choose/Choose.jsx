"use client"
import React from 'react';
import "./Choose.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);


const Choose = () => {

    useGSAP(() => {
        var split = new SplitText(".choose-heading h2 ", { type: "words,chars" });
        var charsa = split.chars;
        gsap.set(".choose-heading h2", { perspective: 400 });

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
                trigger: ".choose-heading h2",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }
        });
        gsap.utils.toArray('.choose-acc').forEach(card => {

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
            <div style={{ backgroundColor: "#F3F3F1" }}>
                <div className='Choose ' >
                    <div className='choose-heading'>
                        <h2>Why Choose Perch</h2>
                    </div>
                    <div className='choose-acc-main'>
                        <div className='choose-acc-main-two'>
                            <div className='choose-acc-first choose-acc'>
                                <div className='choose-left '>
                                    <h3>01/</h3>
                                    <p>Confidence</p>
                                </div>
                                <div className='choose-right'>
                                    <p>Build Your Dream Home <br /> with Confidence </p>
                                    <p className='res-head'>Build Your Dream Home <br /> with Confidence</p>
                                    <p>At Casagrand Perch, we lead the way in construction excellence,
                                        transcending conventional boundaries to bring your dream home to life.
                                        Our dynamic approach to building quality homes sets us apart,
                                        making us the ideal choice for your construction needs.</p>
                                </div>
                            </div>
                            <div className='choose-acc-second choose-acc'>
                                <div className='choose-left '>
                                    <h3>02/</h3>
                                    <p>Innovation</p>
                                </div>
                                <div className='choose-right'>
                                    <p>Innovation and <br /> Excellence </p>
                                    <p className='res-head'>Innovation and Excellence </p>
                                    <p>We take immense pride in crafting dream homes that reflect a fresh perspective on construction. Each structure we create redefines excellence, ensuring that every detail meets the highest standards of quality and design.</p>
                                </div>
                            </div>
                            <div className='choose-acc-third choose-acc'>
                                <div className='choose-left '>
                                    <h3>03/</h3>
                                    <p>Legacy</p>
                                </div>
                                <div className='choose-right'>
                                    <p>A Legacy of <br  /> Trust</p>
                                    <p className='res-head'>A Legacy of Trust</p>
                                    <p> We take immense pride in crafting dream homes that reflect a fresh perspective on construction. Each structure we create redefines excellence, ensuring that every detail meets the highest standards of quality and design.</p>
                                </div>
                            </div>
                            <div className='choose-acc-four choose-acc'>
                                <div className='choose-left '>
                                    <h3>04/</h3>
                                    <p>Approach</p>
                                </div>
                                <div className='choose-right'>
                                    <p>    Customer-Centric <br />Approach</p>
                                    <p className='res-head'>Customer-Centric Approach</p>
                                    <p> At Casagrand Perch, we prioritize our customers needs and aspirations. Our commitment to transparency, agility, and respect ensures that your home-building journey is smooth and satisfying. We also offer a long-term construction warranty, providing peace of mind and confidence in our work.
                                        <br /><br />
                                        Choose Casagrand Perch to turn your dream home into a reality, with a team dedicated to delivering unmatched value and superior quality living spaces.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Choose;