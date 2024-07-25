"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./process.css"
// import styles from "./process.module.css"
import "./process.css"
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const OurProcessLanding = ({ val, onsent }) => {



    // useGSAP(()=>{
    //     gsap.utils.toArray('.parallax-elements').forEach(element => {
    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: element,
    //                 scrub: true,
    //                 start: 'top 100%',
    //                 end: '+=500px'
    //             }
    //         });

    //         tl.from(element, {
    //             rotationX: -68, 

    //             ease: 'none'
    //         });
    //     });

    //     gsap.utils.toArray('.parallax-elementsone').forEach(element => {
    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: element,
    //                 scrub: true,
    //                 start: 'top 100%',
    //                 end: '+=500px'
    //             }
    //         });

    //         tl.from(element, {
    //             rotationX:50,

    //             ease: 'none'
    //         });
    //     });
    //     gsap.utils.toArray('.parallax-elementstwo').forEach(element => {
    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: element,
    //                 scrub: true,
    //                 start: 'top 90%',
    //                 end: '+=500px'
    //             }
    //         });

    //         tl.from(element, {
    //             rotationY: 40, 
    //             ease: 'none'
    //         });
    //     });

    // },[])

    useGSAP(() => {
        const image = document.getElementById("home");

        // Set initial styles
        gsap.set(image, { opacity: 0, y: 150 });

        // Define the animation timeline
        const tl = gsap.timeline();

        // Add animation to the timeline
        tl.to(image, {
            opacity: 1,
            y: 0,
            delay:1.5,
            duration: 5, // Adjust duration as needed
            ease: "power3.out" // Adjust easing function as needed
        });

        // ScrollTrigger for triggering animation
        ScrollTrigger.create({
            trigger: image,
            scrub: 1,
            start: "top 80%",
            end: "+=500px",
            animation: tl

        });




    }, [])

    useGSAP(()=>{
        
        const images = document.getElementById("pattern");

        // Set initial styles
        gsap.set(images, { opacity: 0, y: 160 });

        // Define the animation timeline
        const tls = gsap.timeline();

        // Add animation to the timeline
        tls.to(images, {
            opacity: 1,
            y: 0,
            duration: 5, 
            delay: 2.5,// Adjust duration as needed
            ease: "power3.out" // Adjust easing function as needed
        });

        // ScrollTrigger for triggering animation
        ScrollTrigger.create({
            trigger: images,
            scrub: 1,
            start: "top 75%",
            end: "+=500px",
            animation: tls

        });
    })

    return (
        <div>
            <div className="lp4-lp5main">
                <div className="lp4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="lp4-destop-image-div">
                                    <div className="parallax-elementstwo">
                                        <Image
                                            width={1426}
                                            height={823}
                                            id="bg"
                                            className="lp4-img-bg Def-img-wd sky "
                                            src={val.acf.lp_section4_desktop_bg.url}
                                        />
                                        <Image
                                            width={713}
                                            height={347}
                                            id="pattern"
                                            className="lp4-imgtext-image  text-img  Def-img-wd parallax-elements"
                                            src={val.acf.lp_section4_desktop_pattern.url}
                                        />
                                        <Image
                                            width={1426}
                                            height={774}
                                            id="home"
                                            className="lp4-imghome-image Def-img-wd house parallax-elementsone"
                                            src={val.acf.lp_section4_desktop_home_image.url}
                                        />
                                    </div>
                                    {/* <img  className="lp4-img-bg ld-wd-100 sky" src={val.acf.lp_section4_desktop_bg.url} />
                                    <img  className="lp4-imgtext-image ld-wd-100 text-img" src={val.acf.lp_section4_desktop_pattern.url} />
                                    <img  className="lp4-imghome-image ld-wd-100 house" src={val.acf.lp_section4_desktop_home_image.url} /> */}
                                    <div className="lp4destop-overlay"></div>


                                </div>
                                <div className="lp4-mobile-button-div">
                                    <button>{val.acf.lp_section4_mobile_types[0].lp_section4_mobile_type}</button>
                                    <button>{val.acf.lp_section4_mobile_types[1].lp_section4_mobile_type}</button>
                                    <button>{val.acf.lp_section4_mobile_types[2].lp_section4_mobile_type}</button>
                                    <button>{val.acf.lp_section4_mobile_types[3].lp_section4_mobile_type}</button>
                                    <button>{val.acf.lp_section4_mobile_types[4].lp_section4_mobile_type}</button>
                                </div>
                                <div>
                                    <Image
                                        width={399}
                                        height={260}
                                        className="lp14-mobile-img ld-wd-100"
                                        src={val.acf.lp_section4_mobile_home_image.url} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lp5">
                    <div className="container-fluid">
                        <div className="lp5-process">
                            <div className="row">
                                <div className="col-md-12 animiws">
                                    <h2 className="font-40">{val.acf.lp_section5_title}</h2>
                                    <p className='fn-three'>{val.acf.lp_section5_content}</p>
                                </div>
                            </div>
                        </div>
                        <div className="lp5-process-types">
                            <div className="row lp5custom-row">
                                <div className="col lp5custom-col">
                                    <div className="lp5custom-inner">
                                        <Image
                                            width={64}
                                            height={64}
                                            className="lp5-process-icon"
                                            src={val.acf.our_process[0].our_process_logo.url} />
                                        {/* <p className="lp5-process-title">Raise a<br />
                                                        Request</p> */}
                                        <div className='lp5-process-title' dangerouslySetInnerHTML={{ __html: val.acf.our_process[0].our_process_logo_content }} />
                                    </div>
                                </div>
                                <div className="col lp5custom-col">
                                    <div className="lp5custom-inner">
                                        <Image
                                            width={64}
                                            height={64}
                                            className="lp5-process-icon"
                                            src={val.acf.our_process[1].our_process_logo.url} />
                                        <div dangerouslySetInnerHTML={{ __html: val.acf.our_process[1].our_process_logo_content }} />
                                    </div>
                                </div>
                                <div className="col lp5custom-col">
                                    <div className="lp5custom-inner">
                                        <Image
                                            width={64}
                                            height={64}
                                            className="lp5-process-icon"
                                            src={val.acf.our_process[2].our_process_logo.url} />
                                        <div dangerouslySetInnerHTML={{ __html: val.acf.our_process[2].our_process_logo_content }} />
                                    </div>
                                </div>
                                <div className="col lp5custom-col">
                                    <div className="lp5custom-inner">
                                        <Image
                                            width={64}
                                            height={64}
                                            className="lp5-process-icon"
                                            src={val.acf.our_process[3].our_process_logo.url} />
                                        <div dangerouslySetInnerHTML={{ __html: val.acf.our_process[3].our_process_logo_content }} />
                                    </div>
                                </div>
                                <div className="col lp5custom-col">
                                    <div className="lp5custom-inner">
                                        <Image
                                            width={64}
                                            height={64}
                                            className="lp5-process-icon"
                                            src={val.acf.our_process[4].our_process_logo.url} />
                                        <div dangerouslySetInnerHTML={{ __html: val.acf.our_process[4].our_process_logo_content }} />
                                    </div>
                                </div>


                            </div>

                        </div>

                        <div className="lp5-customer-sec">
                            <div className="row">
                                <div className="col-sm-12 animiwss">
                                    <h2 className="font-40">{val.acf.lp_section5_our_services_title}</h2>
                                </div>
                            </div>


                        </div>

                        <div className="lp5-service">
                            <div className="row lp5-service-row">
                                <div className="col-md-6 lp5-service-col">
                                    <div className="lp5-service-list">
                                        <p className="lp5-service-list-title">{val.acf.lp_section5_our_services_sub_title1}</p>
                                        <ul className="lp5-service-correctli faqulss">
                                            <li>{val.acf.lp_section5_our_services_points[0].lp_section5_our_services_points}</li>
                                            <li>{val.acf.lp_section5_our_services_points[1].lp_section5_our_services_points}</li>
                                            <li>{val.acf.lp_section5_our_services_points[2].lp_section5_our_services_points}</li>
                                            <li>{val.acf.lp_section5_our_services_points[3].lp_section5_our_services_points}</li>
                                            <li>{val.acf.lp_section5_our_services_points[4].lp_section5_our_services_points}</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-md-6 lp5-service-col">
                                    <div className="lp5-service-list">
                                        <p className="lp5-service-list-title">{val.acf.lp_section5_our_services_sub_title2}</p>

                                        <ul className="lp5-service-wrongli faqulss">
                                            <li>{val.acf.lp_section5_our_unservices_points[0].lp_section5_our_unservices_point}</li>
                                            <li>{val.acf.lp_section5_our_unservices_points[1].lp_section5_our_unservices_point}</li>
                                            <li>{val.acf.lp_section5_our_unservices_points[2].lp_section5_our_unservices_point}</li>
                                            <li>{val.acf.lp_section5_our_unservices_points[3].lp_section5_our_unservices_point}</li>
                                            <li>{val.acf.lp_section5_our_unservices_points[4].lp_section5_our_unservices_point}</li>
                                        </ul>

                                    </div>

                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="lp1-cta text-center lp5-service-cta">
                                        <a className="cta" style={{ cursor: "pointer" }} onClick={onsent}><span>Start your Construction</span></a>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OurProcessLanding;
