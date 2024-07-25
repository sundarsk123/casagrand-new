"use client"
import { useEffect, useState } from "react";
import "./project.css"
import 'swiper/css';
import 'swiper/css/effect-cards';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import axios from 'axios';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from 'gsap/SplitText';
import Grid from "./grid";
import Labtopsvg from "./labtopsvg";
import Cardswiper from "./projectcardpage/cardswiper";
import Gridswiper from "./projectcardpage/gridswiper";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);




const ProjectCard = ({ val }) => {

    useGSAP(() => {

        gsap.from(".hs3 h2", {
            duration: 0.5,
            y: 80,
            delay: 1,
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".hs3 h2",
                scrub: 1,
                start: "top 150%",
                end: "+=500px",
            }
        });


        gsap.set(".hs2", { opacity: "1" });
        gsap.to(".hs2", {
            opacity: "0",
            scrollTrigger: {
                trigger: ".hs3",
                start: "top center",
                end: "top top",
                scrub: true
            }
        });
        // dhs2
        gsap.set(".dhs2", { opacity: "1" });
        gsap.to(".dhs2", {
            opacity: "0",
            scrollTrigger: {
                trigger: ".hs3",
                start: "top center",
                end: "top top",
                scrub: true
            }
        });

        var split = new SplitText(".hs3 h2 ", { type: "words,chars" });
        var charsa = split.chars;
        gsap.set(".hs3 h2", { perspective: 400 });

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
                trigger: ".hs3 h2",
                scrub: 1,
                start: "top 120%",
                end: "+=500px",
            }
        })



    })

    const [isActive, setisActive] = useState(true);
    const [open, setOpen] = useState(true)

    const handleFirstDivClick = () => {
        setisActive(!isActive);
        const hs3Element = document.querySelector('.hs3');
        hs3Element.scrollIntoView({ behavior: 'smooth' });
    
    };

    const [posts, setPosts] = useState([]);


    useEffect(() => {
  
      const fetchPosts = async () => {
       
          const response = await axios.get('https://api.casagrandperch.co.in/wp-json/wp/v2/projects?slug=&_embed');
          setPosts(response.data);
         };
  
      fetchPosts();
      const interval = setInterval(fetchPosts, 60000);
  
      return () => clearInterval(interval);
    }, []);


    return (
        <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
            <div>
                <div className="hs3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="font-50 acenter">Highlighted Projects</h2>
                                <div className="hs3-grid-div1"></div>
                                <div className="hs3-grid-div2"></div>

                                {open? <Cardswiper val={val} posts={posts} />: <Gridswiper val={val} posts={posts}/>}

                                
                                <div className="pro-card-grid">
                                    <div className={`change frist wd-svgcard ${isActive ? 'active-section' : ''}`} onClick={() => { handleFirstDivClick(); setOpen(!open) }}>
                                        <Labtopsvg
                                            isActive={isActive}
                                        />
                                    </div>
                                    <div className={`change normal-section wd-svg ${isActive ? '' : 'active-section'}`} onClick={() => { handleFirstDivClick(); setOpen(!open) }}>
                                        <Grid
                                            isActive={isActive}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                            <div className="swiper-scrollbar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;
