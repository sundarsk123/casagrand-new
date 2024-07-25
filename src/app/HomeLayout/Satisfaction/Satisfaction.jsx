"use client"
import { useGSAP } from '@gsap/react';
import React, { useState } from 'react';
import gsap from 'gsap';

const Satisfaction = ({val}) => {

    useGSAP(() => {
        gsap.set('.hs7-points', {
            xPercent: 5,
        });
        gsap.to('.hs7-points', {
            xPercent: -15,
            ease: "none",
            scrollTrigger: {
                trigger: '.hs6',
                start: "top center",
                end: "bottom+=220%",
                scrub: true
            }
        });

     
    })

    const[lodata]=useState(val?.acf?.section_6_tag_button)
    return (
        <div>
         
            <div className="hs7">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="hs7-points fn-w3">
                                {/* <li>{val.acf.section_6_tag_button[0].section_6_tag_text}</li>
                                <li>{val.acf.section_6_tag_button[1].section_6_tag_text}</li>
                                <li>{val.acf.section_6_tag_button[2].section_6_tag_text}</li>
                                <li>{val.acf.section_6_tag_button[3].section_6_tag_text}</li>
                                <li>{val.acf.section_6_tag_button[4].section_6_tag_text}</li>
                                <li>{val.acf.section_6_tag_button[5].section_6_tag_text}</li>
                                <li>{val.acf.section_6_tag_button[0].section_6_tag_text}</li>
                                <li>{val.acf.section_6_tag_button[1].section_6_tag_text}</li>
                                <li>{val.acf.section_6_tag_button[2].section_6_tag_text}</li>
                                <li>{val.acf.section_6_tag_button[3].section_6_tag_text}</li>
                                <li>{val.acf.section_6_tag_button[4].section_6_tag_text}</li>
                                <li>{val.acf.section_6_tag_button[5].section_6_tag_text}</li> */}
                                {lodata.map((val)=>{return(<li key={val?.id}>{val?.section_6_tag_text}</li>)})}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Satisfaction;
