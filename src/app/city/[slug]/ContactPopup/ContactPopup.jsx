"use client"
import { useState } from "react";
import "./Contactpopup.css"
import Image from "next/image";

const ContactPopup = ({open , onclose}) => {



    return (
        <div className={`cpopup-wrapper ${open ? "" : "cpop-close"}`}>
            <div className="cpopup-clr">
                <div className="cpopup-title">
                <p className="bookp">Book a Free Consultation</p>
                <div onClick={onclose} className="close-img-div">
                    <Image
                    src={"/landingpage/popup/Cas-CLS.svg"}
                    alt="img-popup"
                    width={20}
                    height={20}

                    />
                </div>
                </div>
                <div>
                    <form action="">

                        <div className='cpopup-inp-div'> <input type="text" className='cpopup-inp' placeholder='Name*' /></div>
                        <div className='cpopup-inp-div'> <input type="text" className='cpopup-inp' placeholder='Email*'  /></div>
                        <div className='cpopup-inp-div'> <input type="text" className='cpopup-inp' placeholder='Phone*'  /></div>
                        <div className='cpopup-inp-div'> <input type="text" className='cpopup-inp' placeholder='Location of your plot*'  /></div>
                        <div className="cpopup-btn"><button className="cta" type='submit'><span>Start Your Construction</span></button></div>
                    </form>
                </div>
                <div>
                    <p className="sub-p">By submitting this form, you agree to the privacy policy and terms of use</p>
                </div>
            </div>
        </div>
    );
}

export default ContactPopup;
