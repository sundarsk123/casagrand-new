"use client"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin( ScrollTrigger);
import AsSeenSlider from './AsSeenSlider';
// import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';

const AsSeenOn = ({val}) => {



    useGSAP(()=>{
        ScrollTrigger.create({
            trigger : "div.lp9",
            start: "top 100%",
            end: "bottom -50%",
            //

            onEnter: () => {
                gsap.to('body', { duration: 1.0, backgroundColor: '#E7E7E7'})
              },

            onLeaveBack: () => {
                gsap.to('body', { duration: 1.0, backgroundColor: '#ffffff'})
              },
        })
    })

   
    return (
        <>
            <div className="lp9">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="lp8-heading-div animis">
                                <h2 className="font-40">{val.acf.lp_section9_title}</h2>
                            </div>
                            <div className="lp9-div-outer">
                      
                                       <AsSeenSlider val={val}/>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AsSeenOn;
