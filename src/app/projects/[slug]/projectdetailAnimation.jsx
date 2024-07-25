"use client"
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const ProjectdetailAnimation = () => {

    useGSAP(()=>{
        var split = new SplitText(".animis p ", { type: "words,chars" });
        var charsa = split.chars;
        gsap.set(".animis p", { perspective: 400 });

        gsap.from(charsa, {
            duration: 1,
            scale: 0,
            y: 80,
            delay: 1.5,
            rotationX: 120,
            transformOrigin: "0% 30% -30",
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".animis p",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }
        })

        var split = new SplitText(".animiss h2 ", { type: "words,chars" });
        var charsa = split.chars;
        gsap.set(".animiss h2", { perspective: 400 });

        gsap.from(charsa, {
            duration: 1,
            scale: 0,
            y: 80,
            delay: 1.5,
            rotationX: 120,
            transformOrigin: "0% 30% -30",
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".animiss h2",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }
        })

        gsap.from('.cs-product-subdiv', {
            duration: 0.3,
            y: 50,
            ease: "power1.out",
            delay: 1,

            stagger: {
                amount: 0.3
            },
            scrollTrigger: {
                trigger: ".cs-product-subdiv",
                start: "top 100%",
                end: "+=500px",
                scrub: 1,
            },
        });

        gsap.from('.cs li', {
            duration: 0.3,
            y: 100,
            ease: "power1.out",
            delay: 1,
            /*skewY: 7, */
            stagger: {
                amount: 0.3
            },
            scrollTrigger: {
                trigger: ".cs li",
                start: "top 100%",
                end: "+=500px",
                scrub: 1,
            },
        });

        gsap.from('.cta-animi', {
            duration: 0.3,
            y: 100,
            ease: "power1.out",
            delay: 1,
            /*skewY: 7, cta-animi*/
            stagger: {
                amount: 0.3
            },
            scrollTrigger: {
                trigger: ".cta-animi",
                start: "top 120%",
                end: "+=500px",
                scrub: 1,
            },
        });

        gsap.from('.cs-ad span', {
            duration: 0.3,
            y: 100,
            ease: "power1.out",
            delay: 1,
            /*skewY: 7,*/
            stagger: {
                amount: 0.3
            },
            scrollTrigger: {
                trigger: ".cs-ad span",
                start: "top 100%",
                end: "+=500px",
                scrub: 1,
            },
        });
    })
    return (
        <>
            
        </>
    );
}

export default ProjectdetailAnimation;
