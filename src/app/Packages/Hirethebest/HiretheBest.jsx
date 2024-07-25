
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
import "./Hire.css"
import Popup from '@/app/EnquirePopup/Popup';
import { useState } from 'react';

const HiretheBest = () => {

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
        <>
            <div className="pds3">
                    <div className="container-fluid">
                        <Image alt='img7' className="pds3-image wd-100 deskimg" src="https://dezvolta.in/casagrand-perch/img/pds3-image.png"  width={900} height={900}/>
                        <Image alt='img8' className="pds3-image wd-100 mobiimg" src="/projectdetail/Hire the best.jpg" width={500} height={500} />
                        <div className="pds3-content-sec">
                            <div className="row">
                                <div className="col-md-7 animiss">
                                    <h2 className="font-45 cs-product-subdiv">Hire the Best<br />House construction Service</h2>
                                    <div className="pds3-statics ">
                                        <div className="pds3-statics-col ">
                                            <p>40K</p>
                                            <p>Happy Customers</p>
                                        </div>
                                        <div className="pds3-statics-col ">
                                            <p>140+</p>
                                            <p>Landmarks</p>
                                        </div>
                                        <div className="pds3-statics-col ">
                                            <p>2021+</p>
                                            <p>Quality Checks</p>
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
        </>
    );
}

export default HiretheBest;
