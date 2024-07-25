"use client"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from 'react';
import "./LastRepo.css";



gsap.registerPlugin(useGSAP, ScrollTrigger);
function formatNumber(value, decimals) {

    let s = (+value).toLocaleString('en-US').split(".");

    return decimals
        ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals)
        : s[0];
}
const LastRepo = () => {
    useGSAP(() => {
        gsap.from(".hs2-counter-num", {
            textContent: "100",
            duration: 1,
            ease: "power1.inOut",
            modifiers: {
                textContent: value => formatNumber(value, 0)
            },
            scrollTrigger: {
                trigger: ".hs2",
                start: "100px 100%",
                end: "+=100",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(".hs2-para", {
            duration: 0.5,
            y: 100,
            ease: "power4.out",
            delay: 1,
            stagger: {
                amount: 0.2
            },
            scrollTrigger: {
                trigger: ".hs2-span3",
                start: "top 100%",
                end: "+=500px",
                scrub: 1,
            },
        });
    })
    return (
        <>
            <div className='d-mob'>
            <div className='sq clr'>
                    <i><span className="hs2-counter-num">38</span>M+</i> 
                    <p>Sq.FT <br /> Developed</p>
                </div>
                <div className='sq clr1 '>
                    <i><span className="hs2-counter-num">40</span>K+</i>
                    <p>Happy <br /> customer</p>
                </div>
                <div className='sq clr2 '>
                    <i ><span className="hs2-counter-num">140</span>+</i>
                    <p>Landmarks</p>
                </div>
            </div>
        </>
    )
}

export default LastRepo