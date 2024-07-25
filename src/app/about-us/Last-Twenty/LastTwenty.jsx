"use client"
import React from 'react';
import "./LastTwenty.css"
import Arunimg from '../Arun-img/Arunimg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LastRepo from './LastRepo/LastRepo';
gsap.registerPlugin(useGSAP, SplitText , ScrollTrigger);


function formatNumber(value, decimals) {

    let s = (+value).toLocaleString('en-US').split(".");

    return decimals
        ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals)
        : s[0];
}


const LastTwenty = ({
    lastheading , 
    thirdyeight,
    Fourty,
    onefourty,
    Msymbol,
    Ksymbol,
    plushsymbol,
    sq,
    Happy,
    Landmark,
    arunimg,
    about_md_name,
    about_md_designation,
    about_md_description,
}) => {

    useGSAP(()=>{
        var split = new SplitText(".animi-head h3 ", { type: "words,chars" });
        var charsa = split.chars;
        gsap.set(".animi-head h3", { perspective: 400 });

        gsap.from(charsa, {
            duration: 0.5,
            scale: 0,
            y: 100,
            delay: 1,
            rotationX: 120,
            transformOrigin: "0% 30% -30",
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".animi-head h3",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }
            
            
        })

        gsap.from(".counter-num", {
            textContent: "100",
            duration: 1,
            ease: "power1.inOut",
            modifiers: {
                textContent: value => formatNumber(value, 0)
            },
            scrollTrigger: {
                trigger: ".animi-head",
                start: "100px 100%",
                end: "+=100",
                toggleActions: "play none none reverse"
            }
        });
    })
    return (
        <div className='container-fluid last-margin' style={{backgroundColor : "#F3F3F1"}}>
            <div className='row'>
                <div className='col-md-12 animi-head'>
                    <h3 className=' ab-txt-cen last-font-size'>
                        {lastheading}
                    </h3>


                    <div>
                    <div className='last-flex-div last-flex-div-padding'>
                                <div  className='last-custom'>
                                <div className='df-con'>
                                <div className='wd-div end-df'>
                                <span className="counter-num">{thirdyeight}</span>
                                </div>
                                <div className='wd-div start-df'>
                                <p className='last-cus-font'>{Msymbol}</p>
                                </div>
                                </div>
                                    <p className='p-width'>{sq}</p>
                                </div>
                                
                                <div  className='last-custom'>
                                <div className='df-con'>
                                <div className='wd-div end-df'>
                                <span className="counter-num">{Fourty}</span>
                                </div>
                                <div className='wd-div start-df'>
                                <p className='last-cus-font'>{Ksymbol}</p>
                                </div>
                                </div>
                                    <p>{Happy}</p>
                                </div>
                                <div  className='last-custom'>
                                <div className='df-con'>
                                <div className='wd-60 end-df'>
                                <span className="counter-num">{onefourty}</span>
                                </div>
                                <div className='wd-40 start-df'>
                                <p className='last-cus-font'>{plushsymbol}</p>
                                </div>
                                </div>
                                    <p>{Landmark}</p>
                                </div>
                            </div>
                            {/* <div className='last-flex-div last-flex-div-padding-bottom  aboslue-div'>
                                <div  className='last-custom'>
                             
                                    <p className='p-width'>{sq}</p>
                                </div>
                                
                                <div  className='last-custom'>
                                    
                                    <p>{Happy}</p>
                                </div>
                                <div  className='last-custom'>
                                    <p>{Landmark}</p>
                                </div>
                            </div> */}
                    </div>
                    <div className='last-md'>
                        <LastRepo/>
                    </div>
                    <Arunimg
                    arunimg={arunimg}
                    about_md_name={about_md_name}
                    about_md_designation={about_md_designation}
                    about_md_description={about_md_description}
                    />
                </div>
            </div>
            
        </div>
    );
}

export default LastTwenty;
