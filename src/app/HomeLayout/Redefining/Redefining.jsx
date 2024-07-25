"use client"
import React from 'react';
import "./redefining.css"
// import { useState , useEffect} from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from 'next/image';
import "./redefining.css"
import MobileRedefining from './MobileRedefining/MobileRedefining';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);




function formatNumber(value, decimals) {

    let s = (+value).toLocaleString('en-US').split(".");

    return decimals
        ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals)
        : s[0];
}


const Redefining = ({ val }) => {


    useGSAP(() => {
        var split = new SplitText(".hs2 h1", { type: "words,chars" });
        var charsa = split.chars;
        gsap.set(".hs2 h1", { perspective: 400 });

        gsap.from(charsa, {
            duration: 0.5,
            scale: 0,
            y: 80,
            delay: 1,
            rotationX: 120,
            transformOrigin: "0% 30% -30",
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".hs2 h1",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }
        })

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

        let panels = gsap.utils.toArray(".panel");

        let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));

        panels.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
                pin: true,
                pinSpacing: false
            });
        });
        ScrollTrigger.create({
            snap: {
                snapTo: (progress, self) => {
                    let panelStarts = tops.map(st => st.start),
                        snapScroll = gsap.utils.snap(panelStarts, self.scroll());
                    return gsap.utils.normalize(ScrollTrigger.maxScroll(window), snapScroll);
                },
                duration: 1
            }
        });

        const cards = document.querySelectorAll('.sq');

        cards.forEach((card, index) => {
            gsap.set(card, { autoAlpha: 0, y: 50 });

            ScrollTrigger.create({
                trigger: card,
                start: "top bottom-=100", // Adjust as needed
                end: "bottom top",
                onEnter: () => {
                    gsap.to(card, { duration: 0.5, autoAlpha: 1, y: 0, ease: "power2.out" });
                },

            });
        });





    });






    return (
        <>

            <div className="hs2 panel ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h1 className={"re-font-100 re-lh-140 text"}>
                                {val.acf.section_2_title}<span className="hs2-span1 d-desk"><i><span className="hs2-counter-num"> {val.acf.section2_number1}</span>{val.acf.section2_symbol1}</i>{val.acf.section2_text1}</span> <br className="d-desk" /> {val.acf.section2_title2} <span className="hs2-span2 d-desk"><i><span className="hs2-counter-num">{val.acf.section2_number2}</span>{val.acf.section2_symbol2}</i> {val.acf.section2_text2}</span> <br />{val.acf.section2_title3} <span className="hs2-span3 d-desk"><i><span className="hs2-counter-num">{val.acf.section2_number3}</span>{val.acf.section2_symbol3}</i> {val.acf.section2_text3}</span>
                            </h1>
                            {/* <div className="d-mob hs4-mob-div">
                                <span className="hs2-span1">
                                    <Image src={"./img/sec2-icon1.svg"} alt='redefining1' width={10} height={10} loading='lazy'/>
                                    <i><span className="hs2-counter-num">{val.acf.section2_number1}</span>{val.acf.section2_symbol1}</i>{val.acf.section2_text1}</span><span className="hs2-span2">
                                       <Image src={"./img/sec2-icon2.svg"} alt='redefinig2'width={10} height={10} loading='lazy'/>
                                    <i><span className="hs2-counter-num">{val.acf.section2_number2}</span>{val.acf.section2_symbol2}</i> {val.acf.section2_text2}</span> <span className="hs2-span3">
                                        <Image src={"./img/sec2-icon3.svg"} alt='redefinig3'width={10} height={10} loading='lazy'/>
                                        <i><span className="hs2-counter-num">{val.acf.section2_number3}</span>{val.acf.section2_symbol3}</i> {val.acf.section2_text3}</span>
                            </div> */}
                            <p className="hs2-para">{val.acf.section_2_content}</p>
                            {/* <MobileRedefining val={val}/> */}
                            <div className='pad-space'></div>
                            <div className='d-mob'>
                                <div className='sq clr'>
                                    <i><span className="hs2-counter-num">{val.acf.section2_number1}</span>{val.acf.section2_symbol1}</i>
                                    <p>Happy <br /> customer</p>
                                </div>
                                <div className='sq clr1 '>
                                    <i><span className="hs2-counter-num">{val.acf.section2_number2}</span>{val.acf.section2_symbol2}</i>
                                    <p>Prime <br /> Landmarks</p>
                                </div>
                                <div className='sq clr2 '>
                                    <i ><span className="hs2-counter-num">{val.acf.section2_number3}</span>{val.acf.section2_symbol3}</i>
                                    <p>Sq.FT <br /> Developed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Redefining;
