"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import "./LandIntro.css"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';




function formatNumber(value, decimals) {

    let s = (+value).toLocaleString('en-US').split(".");

    return decimals
        ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals)
        : s[0];
}

const LandingIntro = ({ val , onsent }) => {

    const [loaded, setLoaded] = useState(false);

    useGSAP(()=>{
        // gsap.from(".lp1-content-sec h1", {
        //   duration: 0.5,
        //   scale: 0,
        //   y: 80,
        //   delay: 0.3,
        //   rotationX: 120,
        //   transformOrigin: "0% 30% -30",
        //   ease: "power4.out",
        //   stagger: 0.01,
    
        // })
        gsap.from(".lp1-content-sec h1", {
            duration: 1, // Duration of the animation
            y: 100, // Move 100px upwards
            opacity: 0, // Start from opacity 0
            ease: "power4.out" // Use easing function for smooth animation
          });

        
        const lp1CostElementsone = document.querySelectorAll('.lp1-subtitle');
    
        lp1CostElementsone.forEach((element, index) => {
          gsap.from(element, {
            y: '50%',
            opacity: 0,
            duration: 0.5,
            delay: 0.3,
            ease: 'power2.out',
           
          });
        });

        const lp1CostElementso = document.querySelectorAll('.lp1-cta');
    
        lp1CostElementso.forEach((element, index) => {
          gsap.from(element, {
            y: '50%',
            opacity: 0,
            duration: 0.5,
            delay: 0.3,
            ease: 'power2.out',
           
          });
        });

        const lp1CostElementson = document.querySelectorAll('.lp1-status');
    
        lp1CostElementson.forEach((element, index) => {
          gsap.from(element, {
            y: '50%',
            opacity: 0,
            duration: 0.5,
            delay: 0.3,
            ease: 'power2.out',
           
          });
        });

        gsap.from(".count", {
            textContent: "0",
            duration: 1.5,
            ease: "power1.inOut",
            modifiers: {
                textContent: value => formatNumber(value, 0)
            },

        });

   
    })

    return (
        <>
            <div className="header-log-div">
                <div className="header-logo-inner-div">
                    <div className="top"></div>
                    <Link href={"/"} className='logo-mob'>
                    <Image 
                    width={140}
                    height={39}
                    className="lplogo Def-img-wd" 
                    src="/Perch new logo-01.svg" 
                    alt='logo' 
                    priority 
                    />
                    </Link>
                    <Link href={"/"} className='logo-mobs .pos-logo'>
                    <Image
                    width={300}
                    height={83} 
                    className="lplogo Def-img-wd" 
                    src="/Perch new logo-01.svg" 
                    alt='logo' 
                    priority 
                     />
                    </Link>
                    
                </div>
            </div>
            <div className="lp1">
              
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <Image
                                className={`hlp1-img Def-img-wd ${loaded ? 'loaded' : 'loading'}`}
                                // src={val.acf.hl_banner_image.url}
                                src={val.acf.hl_banner_image.url}
                                alt={val.acf.hl_banner_image.title}
                                width={1426}
                                height={706}
                                priority
                                onLoad={() => { setLoaded(true) }}
                            />
                            <Image className="hlp1-img-mobile ld-wd-100"
                                src={val.acf.hl_banner_mobile_image.url}
                                alt={val.acf.hl_banner_mobile_image.title}
                                width={400}
                                height={450}
                                priority />
                            <div className="lp1-content-sec">
                                <div className="row lp1-content-row">
                                    <div className="col-lg-8 ver-cen lp1-col">
                                        <h1 className="font-70">{val.acf.hl_banner_title}</h1>
                                        <p className="lp1-subtitle fn-three">{val.acf.hl_banner_sub_title}</p>
                                        <div className="lp1-status-div">
                                            <div className="lp1-status">
                                                <div>
                                                    <Image
                                                    className='Def-img-wd'
                                                     width={40} 
                                                     height={100} 
                                                     priority
                                                    src={val.acf.lp1_status[0].lp_status_icon.url} 
                                                    alt={val.acf.lp1_status[0].title}  
                                                    />
                                                </div>
                                                <div>
                                                    <p className="lp1-status-count"><span className='count'>{val.acf.lp1_status[0].lp_status_count}</span><span>{val.acf.lp1_status[0].lp_status_count_text}</span></p>
                                                    <p className="lp1-status-type fn-three">{val.acf.lp1_status[0].lp1_status_type}</p>
                                                </div>
                                            </div>
                                            <div className="lp1-status">
                                                <div>
                                                    <Image
                                                    className='Def-img-wd'
                                                     width={40} 
                                                     height={100}
                                                    src={val.acf.lp1_status[1].lp_status_icon.url} 
                                                    alt={val.acf.lp1_status[1].title}
                                                    priority  
                                                    />
                                                </div>
                                                <div>
                                                    <p className="lp1-status-count"><span className='count'>{val.acf.lp1_status[1].lp_status_count}</span><span>{val.acf.lp1_status[1].lp_status_count_text}</span></p>
                                                    <p className="lp1-status-type fn-three">{val.acf.lp1_status[1].lp1_status_type}</p>
                                                </div>
                                            </div>

                                            <div className="lp1-status">
                                                <div>
                                                    <Image 
                                                    className='Def-img-wd'
                                                    width={40} 
                                                    height={100} 
                                                    src={val.acf.lp1_status[2].lp_status_icon.url} 
                                                    alt={val.acf.lp1_status[2].title} 
                                                    priority 
                                                    />
                                                </div>
                                                <div>
                                                    <p className="lp1-status-count"><span className='count'>{val.acf.lp1_status[2].lp_status_count}</span><span>{val.acf.lp1_status[2].lp_status_count_text}</span></p>
                                                    <p className="lp1-status-type fn-three">{val.acf.lp1_status[2].lp1_status_type}</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="lp1-cta">
                                            <a className="cta" style={{cursor : "pointer"}} onClick={onsent} ><span >Start your Construction</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
             
                </div>
                {/* </div> */}
                <div className="lp1-cost-main-div">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="lp1-cost-tag">

                                    <div className="lp1-cost-title">
                                        <p>Cost Estimation Of
                                            Constructing A House In</p>

                                    </div>
                                    <div className="lp1-cost-sec-div">
                                        <div>
                                            <Image
                                            width={120}
                                            height={62}
                                            loading='lazy'
                                            className="lp1-cost-img Def-img-wd " 
                                            src={val.acf.lp1_cost_tag[0].lp1_cost_tag.url} 
                                            alt={val.acf.lp1_cost_tag[0].lp1_cost_tag.title}  
                                            />
                                        </div>
                                        <div>
                                            <p className="lp1-cost-name">{val.acf.lp1_cost_tag[0].lp1_cost_name}</p>
                                            <p className="lp1-cost-price">{val.acf.lp1_cost_tag[0].lp1_cost_price}</p>
                                        </div>
                                    </div>
                                    <div className="lp1-cost-sec-div">
                                        <div>
                                            <Image
                                            width={120}
                                            height={62}
                                            loading='lazy' 
                                            className="lp1-cost-img  Def-img-wd" 
                                            src={val.acf.lp1_cost_tag[1].lp1_cost_tag.url} 
                                            alt={val.acf.lp1_cost_tag[1].lp1_cost_tag.title}  
                                            />
                                        </div>
                                        <div>
                                            <p className="lp1-cost-name">{val.acf.lp1_cost_tag[1].lp1_cost_name}</p>
                                            <p className="lp1-cost-price">{val.acf.lp1_cost_tag[1].lp1_cost_price}</p>
                                        </div>

                                    </div>
                                    <div className="lp1-cost-sec-div">
                                        <div>
                                            <Image
                                            width={120}
                                            height={62}
                                            loading='lazy' 
                                            className="lp1-cost-img Def-img-wd" 
                                            src={val.acf.lp1_cost_tag[2].lp1_cost_tag.url} 
                                            alt={val.acf.lp1_cost_tag[2].lp1_cost_tag.title}  
                                            />
                                        </div>
                                        <div>
                                            <p className="lp1-cost-name">{val.acf.lp1_cost_tag[2].lp1_cost_name}</p>
                                            <p className="lp1-cost-price">{val.acf.lp1_cost_tag[2].lp1_cost_price}</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default LandingIntro;
