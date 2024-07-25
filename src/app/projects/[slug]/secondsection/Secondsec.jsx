"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import Popup from '@/app/EnquirePopup/Popup';
import "./Second.css"

const Secondsec = ({ val }) => {

    useEffect(() => {
        gsap.set(".build-img", { xPercent: -50, yPercent: -50 });

        var ball = document.querySelector(".build-img ");
        var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        var mouse = { x: pos.x, y: pos.y };
        var speed = 0.1;

        var xSet = gsap.quickSetter(ball, "x", "px");
        var ySet = gsap.quickSetter(ball, "y", "px");



        window.addEventListener("mousemove", e => {
            mouse.x = e.x;
            mouse.y = e.y;
        });
        gsap.ticker.add(() => {
            var dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            xSet(pos.x);
            ySet(pos.y);
        });


    }, [])
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open);
    };






    return (
        <>
        {/* onClick={toggleMenu} style={{cursor : "pointer"}} */}
            <div className="pds2 btn-section sec-max-w" >
                <div className="container-fluid " >

                    {/* <div className='mobile-dn' >
                        <Image
                            alt='img6'

                            className="letsbuild-icon build-img"
                            src="/projectdetail/letsBuiLd.svg"
                            width={800}
                            height={800}
                        />
                    </div> */}
                    <div className="row">
                        <div className="col-md-6  cs-product-subdiv">
                            <p className='sec-font-size'>{val?.acf?.project_details_description}</p>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6">
                            <div>
                                <ul className="pds2-statics cs ">
                                    {/* <li>
                                        <span>
                                            Location
                                        </span> <span>{val?.acf?.project_location}</span> 
                                        </li> */}
                                    <li>
                                        <span>
                                            {/* {val?.acf?.project_detail_list[1]?.project_detail_title} */}Buildup Area
                                        </span> <span>{val?.acf?.buildup_area}</span> </li>
                                    <li>
                                        <span>
                                            {/* {val?.acf?.project_detail_list[2]?.project_detail_title} */}Structural
                                        </span> <span>{val?.acf?.structural}</span> </li>
                                    <li><span>
                                        {/* {val?.acf?.project_detail_list[3]?.project_detail_title} */}3D Available
                                    </span>
                                        <span>
                                            {val?.acf?.Threed_available}
                                        </span> </li>
                                    <li><span>
                                        {/* {val?.acf?.project_detail_list[4]?.project_detail_title} */}BHK
                                    </span> <span>{val?.acf?.bhk}</span> </li>

                                    {/* <div className="pds3-cta cta-animi" >
                                        <a className="cta" onClick={()=>{setopen(!open)}}  style={{cursor : "pointer"}}><span>Lets Build</span></a>
                                    </div> */}

                                    <div className=' cta-animi' >
                                        <Image
                                            alt='img6'
                                            onClick={toggleMenu}
                                            className="btn-work"
                                            src="/projectdetail/letsBuiLd.svg"
                                            width={90}
                                            height={90}
                                        />
                                    </div>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <Popup open={open} onclose={() => { setOpen(!open) }} />
        </>
    );
}

export default Secondsec;
