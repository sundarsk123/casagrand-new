"use client"
import Image from 'next/image';
// import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from 'gsap/SplitText';
// gsap.registerPlugin( ScrollTrigger, SplitText);
import { useEffect } from 'react';

const Construction = ({val , onsent}) => {

    // function animateTextas() {
    //     // Split the text into characters
    //     var split = new SplitText(".ani h2", { type: "chars, words" });
    //     var chars = split.chars;
    
    //     // Set perspective on the container
    //     gsap.set(".ani h2", { perspective: 400 });
    
    //     // Animate characters
    //     gsap.from(chars, {
    //         duration: 1.5,
    //         scale: 0,
    //         y: 80,
    //         rotationX: 120,
    //         transformOrigin: "0% 30% -30",
    //         ease: "power4.out",
    //         stagger: 0.01,
    //         scrollTrigger: {
    //             trigger: ".ani h2",
    //             scrub: 1,
    //             start: "top 100%",
    //             end: "+=500px"
    //         }
    //     });
    // }

    // useEffect(()=>{
    //     animateTextas();
    //     ScrollTrigger.refresh();
    // },[])



    return (
        <div>
            <div className="lp7">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 lp7-col1">
                            <Image width={400} height={407} alt='mobileimg' className="lp7-mobile-image" src={val.acf.lp_section7_mobile_image.url}/>
                                <Image width={150} height={147} alt='trust-logo' className="lp7-trust-logo" src={val.acf.lp_section7_trust_logo_image.url}/>
                                </div>
                                <div className="col-md-6 ver-cen lp7-col">
                                    <div className='ani'>
                                        <h2 className="font-40 colorw ">{val.acf.lp_section7_title}</h2>
                                        <p className="lp7-sub-title colorw fn-three">{val.acf.lp_section7_sub_title}</p>
                                        <div className="lp7-cta">
                                            <a className="cta" style={{cursor : "pointer"}} onClick={onsent}><span>Start your Construction</span></a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            );
}
export default Construction;
