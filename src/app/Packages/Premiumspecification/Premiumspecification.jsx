"use client"
import React, { useState } from 'react'
import "./premium.css"
import Link from 'next/link';
import Popup from '@/app/EnquirePopup/Popup';

const Premiumspecification = ({val , onscrollani , onData}) => {
    
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const [openIndex2, setOpenIndex2] = useState(null);

    const handleToggle2 = (index) => {
        setOpenIndex2(openIndex2 === index ? null : index);
    };

    const [Premiumspecification] = useState(val.acf.construction_premium_packages)
    
    const [ultraPremiumspecification] = useState(val.acf.construction_ultra_premium_packages)
  
   

  return (
    <>

<div className='ccps'>
        <div className='row'>
            <div className='col-sm-12'>
           <h2 className="font-100 text-upper text-center">Packages</h2>
         
            </div>

        </div>


    </div>
    <div className='ccp'>
        <div className='row'>
            <div className='col-md-12'>

                <div className='row ccprow'>
                    <div className='col-md-6 ccp-col'>
                        <div className='ccp-inner-col'>
                            <div className='ccp-title-premiumbg1'>
                            <p className='ccp-title'>{val.acf.construction_premium_title}</p>
                            {/* <p className='ccp-sub-title'>{val.acf.construction_premium_sub_title}</p> */}
                            </div>
                           <div className='ccp-specification'>
                           {Premiumspecification.map((val, index)=>{return(<>
                                    <button className={`acc-butn  ${openIndex === index ? "premaccactive" : ""}`} onClick={() => handleToggle(index)} >{val.construction_premium_packages_types}</button>
                                    <div className={`hidesec ${openIndex === index ? "opensection" : ''}`}>
                                    <div className='para-pad' dangerouslySetInnerHTML={{ __html: val.construction_premium_packages_types_description }}></div>
                                    </div>
                                    </>)})}
                            </div>
                            <div className="ccp-cta" style={{cursor : "pointer"}}  onClick={onData}
                            ><a className="cta" ><span>Get Quote</span></a></div>
                               

                        </div>

                    </div>
                    <div className='col-md-6 ccp-col'>
                        <div className='ccp-inner-col'>
                        <div className='ccp-title-ultrapremiumbg2'>
                        <p className='ccp-title'>{val.acf.construction_ultra_premium_title}</p>
                        {/* <p className='ccp-sub-title'>{val.acf.construction_ultra_premium_sub_title}</p> */}
                        </div>
                           <div className='ccp-specification'>
                           {ultraPremiumspecification.map((val, index)=>{return(<>
                                    <button className={`acc-butn  ${openIndex2 === index ? "premaccactive" : ""}`} onClick={() => handleToggle2(index)} >{val.construction_ultra_premium_packages_types}</button>
                                    <div className={`hidesec ${openIndex2 === index ? "opensection" : ''}`}>
                                        <div className='para-pad' dangerouslySetInnerHTML={{ __html: val.construction_ultra_premium_packages_types_description }}></div>
                                    </div>
                                    </>)})}
                            </div>
                            
                            <div className="ccp-cta" style={{cursor : "pointer"}}   onClick={onData}
                            ><a  className="cta" ><span>Get Quote</span></a></div>
                         
                               

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
   
    </>
  )
}

export default Premiumspecification