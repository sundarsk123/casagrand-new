// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
import React from 'react';
// import { SplitText } from 'gsap/SplitText';

const Dream = ({onopen}) => {

    // useGSAP(()=>{
    //     var split = new SplitText(".foot-row1 h2 ", { type: "words,chars" });
    //     var charsa = split.chars;
    //     gsap.set(".foot-row1 h2", { perspective: 400 });

    //     gsap.from(charsa, {
    //         duration: 0.5,
    //         scale: 0,
    //         y: 100,
    //         delay: 1,
    //         rotationX: 120,
    //         transformOrigin: "0% 30% -30",
    //         ease: "power4.out",
    //         stagger: 0.01,
    //         scrollTrigger: {
    //             trigger: ".foot-row1 h2",
    //             scrub: 1,
    //             start: "top 100%",
    //             end: "+=500px",
    //         }
    //     })
    // })
    return (
        <div>
            <div className="row foot-row1">
                <div className="col-md-8">
                    <h2 className="font-40">Your Dream Home Simplified</h2>
                </div>
                <div className="col-md-4 aright">
                    <a className="cta" onClick={onopen} style={{cursor : "pointer"}}><span>Enquire Now</span></a>
                </div>
            </div>
        </div>
    );
}

export default Dream;
