import React, { useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
import "./Hirebest.css"
import Popup from '@/app/EnquirePopup/Popup';

const Hirebest = ({val}) => {

    useGSAP(()=>{
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
    })

    const[open , setopen]=useState(false)
    return (
        <div>
             <div className="pds3">
                    <div className="container-fluid">
                        <Image alt='img7' className="pds3-image wd-100 deskimg" src="https://dezvolta.in/casagrand-perch/img/pds3-image.png"  width={900} height={900}/>
                        <Image alt='img8' className="pds3-image wd-100 mobiimg" src="/projectdetail/Hire the best.jpg" width={500} height={500} />
                        <div className="pds3-content-sec">
                            <div className="row">
                                <div className="col-md-7 animiss">
                                    <h2 className="font-45 cs-product-subdiv hire-mx-font">{val?.acf?.project_section3_title_left_half}<br />{val?.acf?.project_section3_title_right_half} </h2>
                                    <div className="pds3-statics ">
                                        <div className="pds3-statics-col ">
                                            <p>{val?.acf?.project_section3_statics[0]?.project_section3_static}</p>
                                            <p>{val?.acf?.project_section3_statics[0]?.project_section3_static_name}</p>
                                        </div>
                                        <div className="pds3-statics-col ">
                                            <p>{val?.acf?.project_section3_statics[1]?.project_section3_static}</p>
                                            <p>{val?.acf?.project_section3_statics[1]?.project_section3_static_name}</p>
                                        </div>
                                        <div className="pds3-statics-col ">
                                            <p>{val?.acf?.project_section3_statics[2]?.project_section3_static}</p>
                                            <p>{val?.acf?.project_section3_statics[2]?.project_section3_static_name}</p>
                                        </div>

                                    </div>
                                    <div className="pds3-cta">
                                        <a className="cta" onClick={()=>{setopen(!open)}} style={{cursor : "pointer"}}><span>Lets Build</span></a>
                                    </div>
                                </div>




                                <div className="col-md-6">


                                </div>


                            </div>

                        </div>

                    </div>
                </div>
                <Popup open={open} onclose={()=>{setopen(!open)}}/>
        </div>
    );
}

export default Hirebest;
