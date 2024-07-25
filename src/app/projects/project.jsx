"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Marquee from 'react-fast-marquee';
import Projectpagecard from './productpagecontent/projectpagecard';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
import { Helmet } from 'react-helmet';

const Project = ({val}) => {

    const title =  'Projects';
    const description = 'Default Description';

    useGSAP(() => {
        var split = new SplitText(".ps1 h1", { type: "words,chars" });
        var charsa = split.chars;

        gsap.set(".ps1 h1", { perspective: 400 });

        gsap.from(charsa, {
            duration: 0.3,
            scale: 0,
            y: 80,
            delay: 0,
            rotationX: 120,
            transformOrigin: "0% 30% -30",
            ease: "power4.out",
            stagger: 0.01,
        });
        gsap.from(".ps1-contentrow p", {
            duration: 0.9,
            y: 80,
            delay: 0,
            ease: "power4.out",
            stagger: 0.01,
        });
        gsap.from(".ps4-button-sec", {
            duration: 0.2,
            /*scale:1,*/
            y: 80,
            delay: 0,
            /*transformOrigin: "0% 30% -30",*/
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".ps4-button-sec",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }
        });
        gsap.set(".ps3-img", { scale: "1" });
        gsap.to(".ps3-img", {
            scale: "1.2",
            scrollTrigger: {
                trigger: ".ps3-img",
                start: "top center",
                end: "top top",
                scrub: true
            }
        });

 
    })

    return (
        <div>
             <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div className="projectMain">
                <div className="ps1">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="font-100 text-upper txt-center">{val.title.rendered}</h1>

                            </div>
                        </div>
                        <div className="row ps1-contentrow">
                            <div className="col-md-5">


                            </div>
                            <div className="col-md-7">
                                <p>{val.acf.projects_section_1_content}</p>

                            </div>

                        </div>

                    </div>
                </div>
                <div className="ps2">
                    <div className="">
                        <div className="row">
                            <div className="col-md-12">
                                <Marquee
                                pauseOnHover
                                style={{cursor : "pointer"}}
                                
                                >
                                <div className="js-ticker">
                                    <ul className="ps-points ss1ul1 wrapper">
                                        <li>Top Featured</li>
                                        <li><span className="ps-rated">{val.acf.projects_section1_highlight_points[1].project_rating}</span><span className="ps-point-name">{val.acf.projects_section1_highlight_points[1].project_points_name}</span></li>
                                        <li>Top Featured</li>
                                        <li><span className="ps-rated">{val.acf.projects_section1_highlight_points[2].project_rating}</span><span className="ps-point-name">{val.acf.projects_section1_highlight_points[2].project_points_name}</span></li>
                                        <li>Top Featured</li>
                                        <li><span className="ps-rated">{val.acf.projects_section1_highlight_points[0].project_rating}</span><span className="ps-point-name">{val.acf.projects_section1_highlight_points[0].project_points_name}</span></li>
                                        <li>Top Featured</li>
                                        <li><span className="ps-rated">{val.acf.projects_section1_highlight_points[3].project_rating}</span><span className="ps-point-name">{val.acf.projects_section1_highlight_points[1].project_points_name}</span></li>
                                        <li>Top Featured</li>
                                        <li><span className="ps-rated">{val.acf.projects_section1_highlight_points[2].project_rating}</span><span className="ps-point-name">{val.acf.projects_section1_highlight_points[2].project_points_name}</span></li>
                                        <li>Top Featured</li>
                                        <li><span className="ps-rated">{val.acf.projects_section1_highlight_points[0].project_rating}</span><span className="ps-point-name">{val.acf.projects_section1_highlight_points[0].project_points_name}</span></li>
                                    </ul>
                                </div>
                                </Marquee>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="ps3 desk-none">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="ps3-img project-img" src="https://dezvolta.in/casagrand-perch/img/banner.jpg" alt="psec3 banner" />

                                <div className="ps3-button-sec">
                                    <a className="ps3-button">#Chennai</a><a className="ps3-button">#featured</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            
        </div>
    );
}

export default Project;
