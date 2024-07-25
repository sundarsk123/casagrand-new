"use client"
import React, { useState } from 'react';
import Card from './card';
import Image from 'next/image';

const Projectpagecard = ({val}) => {

   const[active , setActive] =useState(true)
   const[sent , setsent] = useState("Completed")

   const scroll = () =>{
    const hs3Element = document.querySelector('.ps4');
    hs3Element.scrollIntoView({ behavior: 'smooth' });
   }


    return (
        <div className='projectMain'>
            
                <div className="ps3 mob-none">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <Image width={564} height={405} className=" project-img" src="/project/MOBILE-min.jpg" alt="psec3 banner" />

                                <div className="ps3-button-sec">
                                    <a className="ps3-button">#Chennai</a><a className="ps3-button">#featured</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ps4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 ps4-button-col">
                                <div className="ps4-button-sec">
                                    <a 
                                    className={`ps4-button ${active ? "ps4-btnactive" : ""} `}
                                    onClick={()=>{setActive(!active) , setsent("Completed") , scroll()}}
                                    >Completed</a>
                                    <a 
                                    className={`ps4-button ${active ? "" : "ps4-btnactive"} `}
                                    onClick={()=>{setActive(!active) , setsent("Near Completion"), scroll()}}
                                    >Near Completion</a>
                                </div>

                            </div>
                        </div>

                       {/* connect card */}
                    
                        
                        <Card val={val} sent={sent} />
                    </div>
                </div>
                


                <div className="hs11">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <img  className='project-img' src="https://dezvolta.in/casagrand-perch/img/Pattern-Footer.png" alt="Footer Pattern" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Projectpagecard;
