"use client"
import React, { useEffect } from 'react';
import "./DesktopRedefing.css"
import Image from 'next/image';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);



function formatNumber(value, decimals) {

    let s = (+value).toLocaleString('en-US').split(".");

    return decimals
        ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals)
        : s[0];
}

const DesktopRedefining = ({val}) => {

    useGSAP(() => {
        var split = new SplitText(".hstwo2 h2", { type: "words,chars" });
        var charsa = split.chars;
        gsap.set(".hstwo2 h2", { perspective: 400 });

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
                trigger: ".hstwo2",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }
        })

        gsap.from(".count-num", {
            textContent: "100",
            duration: 1,
            ease: "power1.inOut",
            modifiers: {
                textContent: value => formatNumber(value, 0)
            },
            scrollTrigger: {
                trigger: ".dhs2-gridcol",
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

        let panels = gsap.utils.toArray(".panels");
   
        let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start:"top top" }));

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

    // useEffect(() => {
    //     const movableElements = document.querySelectorAll('.movable');
    //     const movableElements2 = document.querySelectorAll('.movable2');
    //     const allMovableElements = document.querySelectorAll('.movable');
    //     gsap.utils.toArray(allMovableElements).forEach(movable => {
    //         gsap.fromTo(
    //             movable,
    //             { opacity: 0, scale: 0.5 },
    //             {
    //                 opacity: 1,
    //                 scale: 1,
    //                 stagger: 0.15,
    //                 scrollTrigger: {
    //                     once: true,
    //                     trigger: movable,
    //                     start: 'top 100%',
    //                     end: 'bottom 20%',
    //                     toggleActions: 'play none none reverse',
    //                 }
    //             }
    //         );
    //     });
    //     const mouseMoveHandler = (e) => {
    //         movableElements.forEach((movableElement) => {
    //             const boundingRect = movableElement.getBoundingClientRect();
    //             const elementCenterX = boundingRect.left + boundingRect.width / 2;
    //             const elementCenterY = boundingRect.top + boundingRect.height / 2;

    //             const mouseX = e.clientX;
    //             const mouseY = e.clientY;

    //             const moveX = (mouseX - elementCenterX) / 20;
    //             const moveY = (mouseY - elementCenterY) / 20;

    //             gsap.to(movableElement, { x: moveX, y: moveY, duration: 0.3 });
    //         });

    //         movableElements2.forEach((movableElement) => {
    //             const boundingRect = movableElement.getBoundingClientRect();
    //             const elementCenterX = boundingRect.left + boundingRect.width / 2;
    //             const elementCenterY = boundingRect.top + boundingRect.height / 2;

    //             const mouseX = e.clientX;
    //             const mouseY = e.clientY;

    //             const moveX = (elementCenterX - mouseX) / 20;
    //             const moveY = (elementCenterY - mouseY) / 20;

    //             gsap.to(movableElement, { x: moveX, y: moveY, duration: 0.3 });
    //         });
    //     };

    //     document.addEventListener('mousemove', mouseMoveHandler);

    //     return () => {
    //         document.removeEventListener('mousemove', mouseMoveHandler);
    //     };
    // }, []);
    return (
        <>
            <div className='dhs2 hstwo2 panel '>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-md-12 dhs2-col ">
                            <h2 className='dhs2-title re-font-100 text'>Redefining the Home Construction Experience*</h2>
                            <div className="dhs2-imd-inner">
                                <div className='dhs2-img-div'>

                                    <Image className='dhs2-img-sh' width={967} height={948} src="/SEC-02_H-SH-min.png" />

                                    <Image className='dhs2-img movable bouncing' width={967} height={948} src="/SEC-02_H-min.png" />
                                </div>
                            </div>

                            <div className='dhs2-grid'>
                                <div className='dhs2-gridcol'>
                                    <div className='dhs2-gridcontent ptag'><p>{val?.acf?.section_2_content}</p>
                                    </div>
                                </div>
                                <div className='dhs2-gridcol'>
                                    <div className='dhs2-gridcontent'>
                                        <p className='number-cont'><span className='count-num'>{val?.acf?.section2_number1}</span><span>{val?.acf?.section2_symbol1}</span></p>
                                        <p>{val?.acf?.section2_text1}</p>
                                    </div></div>
                                <div className='dhs2-gridcol'>
                                    <div className='dhs2-gridcontent'>
                                        <p className='number-cont'><span className='count-num'>{val?.acf?.section2_number2}</span><span>{val?.acf?.section2_symbol2}</span></p>
                                        <p>{val?.acf?.section2_text2}</p>
                                    </div>
                                </div>
                                <div className='dhs2-gridcol'>
                                    <div className='dhs2-gridcontent'>
                                        <p className='number-cont'> <span className='count-num'>{val?.acf?.section2_number3}</span><span>{val?.acf?.section2_symbol3}</span></p>
                                        <p>{val?.acf?.section2_text3}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height : "200px"}}></div>
        </>
    );
}

export default DesktopRedefining;
