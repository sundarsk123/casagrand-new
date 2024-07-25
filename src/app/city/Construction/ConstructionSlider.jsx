"use client"
// import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from 'gsap/SplitText';
// gsap.registerPlugin( ScrollTrigger, SplitText);
import LandingCSlider from './Slider/LandingCSlider';
import { useEffect } from 'react';

const ConstructionSlider = ({val}) => {

    // function animateTextas() {
    //     // Split the text into characters
    //     var split = new SplitText(".animiq", { type: "chars, words" });
    //     var chars = split.chars;
    
    //     // Set perspective on the container
    //     gsap.set(".animiq", { perspective: 400 });
    
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
    //             trigger: ".animiq",
    //             scrub: 1,
    //             start: "top 100%",
    //             end: "+=500px"
    //         }
    //     });
    // }

    // useEffect(()=>{
    //     animateTextas();
    // ScrollTrigger.refresh();
    // },[])

  

    return (
        <div>
            <div className="lp8">
                <div className="container-fluid">
                    <div className="row lp8-row">
                        <div className="col-md-12">
                            <div className="lp8-heading-div animationcon">
                                <h2 className="font-40 colorw ">Top Reasons <br/> To Choose Us</h2>
                                {/* <h2 className='font-40 colorw animationcon' dangerouslySetInnerHTML={{ __html: val.acf.lp_section8_title }} /> */}
                               
                            </div>
                            <div className="lp8-div-outer">
                               
                                        <LandingCSlider val={val}/>
     

                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConstructionSlider;
