"use client"
import "./Ourprocess.css"
import { useState , useEffect } from "react";
import Ourimage from './ourimage';
import Ourimagemobile from './ourimagemobile';
import Image from "next/image";
import styles from "./Our.module.css"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);


const Ourprocess = ({val}) => {


    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
  
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    useEffect(() => {
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const [activeSlider, setActiveSlider] = useState(0);
    const [filledPaths, setFilledPaths] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

  


    const handleClick = (index) => {
        setActiveSlider(index - 1);
        setFilledPaths(Array.from({ length: index }, (_, i) => i + 1));
        
        if (activeIndex !== index) {
            setActiveIndex(index);
          } else {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
          }
      };

      useGSAP(()=>{
        gsap.from(".carousel", { 
            y: 80, 
            
            duration: 0.1, 
            ease: "power3.out", 
            scrollTrigger: {
                trigger: ".carousel", 
                start: "top 100%",
                scrub: true, 
               
            }
        });

        var split = new SplitText(".animihs4 h3 ", { type: "words,chars" });
        var charsa = split.chars;
        gsap.set(".animihs4 h3", { perspective: 400 });

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
                trigger: ".animihs4 h3",
                scrub: 1,
                start: "top 110%",
                end: "+=500px",
            }
        })

        ScrollTrigger.create({
            trigger : "div.hs4",
            start: "top 100%",
            end: "bottom -50%",
            //

            onEnter: () => {
                gsap.to('body', { duration: 1.0, backgroundColor: '#ffffff'})
              },

            onLeaveBack: () => {
                gsap.to('body', { duration: 1.0, backgroundColor: '#ffffff'})
              },
        })

        // if (window.matchMedia("(min-width: 992px)").matches) {
        //     // Code that should only execute for viewport width >= 992px
        //     let panels = gsap.utils.toArray(".ourpanel"); // Select all elements with class "ourpanel"
            
        //     let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start:"top top" })); // Create ScrollTriggers for each panel and store them in 'tops' array
            
        //     panels.forEach((panel, i) => { // Iterate over each panel
        //         ScrollTrigger.create({
        //             trigger: panel,
        //             start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // Set start based on panel height and window height
        //             pin: true, // Pin the panel when in view
        //             pinSpacing: false // Disable pin spacing
        //         });
        //     });
            
        //     ScrollTrigger.create({
        //         snap: {
        //             snapTo: (progress, self) => {
        //                 let panelStarts = tops.map(st => st.start),
        //                     snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // Snap scrolling to each panel
        //                 return gsap.utils.normalize(ScrollTrigger.maxScroll(window), snapScroll); // Normalize scrolling
        //             },
        //             // duration: 1 
        //         }
        //     });
        // }  
        
        if (window.matchMedia("(min-width: 992px)").matches) {
            // Code that should only execute for viewport width >= 992px
            let panels = gsap.utils.toArray(".ourpanel"); // Select all elements with class "ourpanel"
            
            let scrollTriggers = panels.map((panel, i) => {
                let start = panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom";
                
                return ScrollTrigger.create({
                    trigger: panel,
                    start: start,
                    end: () => `+=${panel.offsetHeight}`, // Adjust end based on panel height
                    pin: true, // Pin the panel when in view
                    pinSpacing: false // Disable pin spacing
                });
            });
        
            let snapTrigger = ScrollTrigger.create({
                snap: {
                    snapTo: (progress, self) => {
                        let panelStarts = scrollTriggers.map(st => st.start),
                            snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // Snap scrolling to each panel
                        return gsap.utils.normalize(ScrollTrigger.maxScroll(window), snapScroll); // Normalize scrolling
                    },
                    // duration: 1 
                }
            });
        
            // Function to refresh specific ScrollTriggers
            function refreshScrollTriggers() {
                scrollTriggers.forEach(st => st.refresh());
                snapTrigger.refresh();
            }
        
            // Example of when to call the refresh function
            window.addEventListener('scrollend', () => {
                refreshScrollTriggers(); // Refresh on window resize
            });
        
            // Call refreshScrollTriggers() whenever you need to update ScrollTriggers for specific panels
        }
        
        
     
      })

    //   useEffect(() => {

    //     const refreshScrollTrigger = () => {
    //       ScrollTrigger.refresh();
    //     };
    

    //     refreshScrollTrigger();
   
    //     const interval = setInterval(refreshScrollTrigger, 5000);

    //     return ()=>{clearInterval(interval);}
    //   }, []);

      const[ourdata]=useState(val?.acf?.section_4_progress[0]?.section_4_progress_lists)
      const[ourdatatwo]=useState(val?.acf?.section_4_progress[1]?.section_4_progress_lists)
      const[ourdatathree]=useState(val?.acf?.section_4_progress[2]?.section_4_progress_lists)
      const[ourdatafour]=useState(val?.acf?.section_4_progress[3]?.section_4_progress_lists)
      const[ourdatafive]=useState(val?.acf?.section_4_progress[4]?.section_4_progress_lists)
    return (
       <> 
        <div className={`hs4 ourpanel sqs ${isScrolled ? 'active' : ''}`}>
            <div className="container ">

                <div className="carousel " >
                    <div className={`slider-container`} style={{ transform: `translateX(-${activeSlider * 100}%)` }}>
                        <div className="slider">  
                        <div className="row">
                            <div className="col-md-5">
                                <div className="hs4-process d-mob">

                                    <h3 className="font-40">{val.acf.section_4_progress[0].section_4_progress_title}</h3>
                                    <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[0].section_4_progress_content }} />
                                </div>
                                <div className="hs4-col1">
                                    <Image src={val.acf.section_4_progress[0].section_4_progress_image.url} alt="Image" width={500} height={500} loading="lazy"/>
                                    <span className="hs4-num">{val.acf.section_4_progress[0].section_4_progress_number}</span>
                                </div>
                            </div>  <div className={`col-md-7 ver-cen`}>
                                {/* <p className="hs4-title "><div dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[0].section_4_progress_sub_title }}></div></p> */}
                                <p className="hs4-title " dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[0].section_4_progress_sub_title }}></p>
                                 <ul className="hs4-points fn-w3">
                                    {/* <li>{val?.acf?.section_4_progress[0]?.section_4_progress_lists[0]?.section_4_progess_list}</li>
                                    <li>{val?.acf?.section_4_progress[0]?.section_4_progress_lists[1]?.section_4_progess_list}</li>
                                    <li>{val?.acf?.section_4_progress[0]?.section_4_progress_lists[2]?.section_4_progess_list}</li>
                                    <li>{val?.acf?.section_4_progress[0]?.section_4_progress_lists[3]?.section_4_progess_list}</li> */}
                                    {ourdata.map(val=>{return(<li key={val?.id}>{val?.section_4_progess_list}</li>)})}
                                </ul> 
                                {/* <div className="hs4-points" dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[0].section_4_progress_list }} /> */}
                            </div>
                        </div>
                        </div>
                        <div className="slider">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="hs4-process d-mob">

                                    <h3 className="font-40">{val.acf.section_4_progress[1].section_4_progress_title}</h3>
                                    <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[1].section_4_progress_content }} />
                                </div>
                                <div className="hs4-col1">
                                <Image src={val.acf.section_4_progress[1].section_4_progress_image.url} alt="Image" width={500} height={500} loading="lazy"/>
                                    <span className={`hs4-num ${styles.sliderq} ${activeIndex === 2 ? styles.sliderActiveq : ''}`}>{val.acf.section_4_progress[1].section_4_progress_number}</span>
                                </div>
                            </div>  <div className={`col-md-7 ver-cen ${styles.sliderq} ${activeIndex === 2 ? styles.sliderActiveq : ''}`}>
                                {/* <p className="hs4-title"><div dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[1].section_4_progress_sub_title }}></div></p> */}
                                <p className="hs4-title" dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[1].section_4_progress_sub_title }}></p>
                                <ul className="hs4-points fn-w3">
                                {/* <li>{val?.acf?.section_4_progress[1]?.section_4_progress_lists[0]?.section_4_progess_list}</li>
                                    <li>{val?.acf?.section_4_progress[1]?.section_4_progress_lists[1]?.section_4_progess_list}</li>
                                    <li>{val?.acf?.section_4_progress[1]?.section_4_progress_lists[2]?.section_4_progess_list}</li>
                                    <li>{val?.acf?.section_4_progress[1]?.section_4_progress_lists[3]?.section_4_progess_list}</li> */}
                                      {ourdatatwo.map(val=>{return(<li  key={val?.id}>{val?.section_4_progess_list}</li>)})}
                                </ul> 
                                 {/* <div className="hs4-points" dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[1].section_4_progress_list }} /> */}
                            </div>
                        </div>
                        </div>
                        <div className="slider">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="hs4-process d-mob">

                                    <h3 className="font-40">{val.acf.section_4_progress[2].section_4_progress_title}</h3>
                                    <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[2].section_4_progress_content }} />
                                </div>
                                <div className="hs4-col1">
                                <Image src={val.acf.section_4_progress[2].section_4_progress_image.url}  alt="Image" width={500} height={500} loading="lazy"/>
                                    <span className={`hs4-num ${styles.sliderq} ${activeIndex === 3 ? styles.sliderActiveq : ''}`}>{val.acf.section_4_progress[2].section_4_progress_number}</span>
                                </div>
                            </div>  
                            <div className={`col-md-7 ver-cen ${styles.sliderq} ${activeIndex === 3 ? styles.sliderActiveq : ''}`}>
                                {/* <p className="hs4-title"><div dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[2].section_4_progress_sub_title }}></div></p> */}
                                <p className="hs4-title" dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[2].section_4_progress_sub_title }}></p>
                                <ul className="hs4-points fn-w3">
                                {/* <li>{val?.acf?.section_4_progress[2]?.section_4_progress_lists[0]?.section_4_progess_list}</li>
                                    <li>{val?.acf?.section_4_progress[2]?.section_4_progress_lists[1]?.section_4_progess_list}</li>
                                    <li>{val?.acf?.section_4_progress[2]?.section_4_progress_lists[2]?.section_4_progess_list}</li>
                                    <li>{val?.acf?.section_4_progress[2]?.section_4_progress_lists[3]?.section_4_progess_list}</li> */}
                                      {ourdatathree.map(val=>{return(<li  key={val?.id}>{val?.section_4_progess_list}</li>)})}
                                </ul> 
                                {/* <div className="hs4-points" dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[2].section_4_progress_list }} /> */}
                            </div>
                        </div>
                        </div>
                        <div className="slider">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="hs4-process d-mob">

                                    <h3 className="font-40">{val.acf.section_4_progress[3].section_4_progress_title}</h3>
                                    <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[3].section_4_progress_content }} />
                                </div>
                                <div className="hs4-col1">
                                <Image src={val.acf.section_4_progress[3].section_4_progress_image.url}  alt="Image" width={500} height={500} loading="lazy"/>
                                    <span className={`hs4-num ${styles.sliderq} ${activeIndex === 4 ? styles.sliderActiveq : ''}`}>{val.acf.section_4_progress[3].section_4_progress_number}</span>
                                </div>
                            </div>  <div className={`col-md-7 ver-cen ${styles.sliderq} ${activeIndex === 4 ? styles.sliderActiveq : ''}`}>
                                {/* <p className="hs4-title"><div dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[3].section_4_progress_sub_title }} ></div></p> */}
                                <p className="hs4-title" dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[3].section_4_progress_sub_title }} ></p>
                                <ul className="hs4-points fn-w3">
                                {/* <li>{val?.acf?.section_4_progress[3]?.section_4_progress_lists[0]?.section_4_progess_list}</li>
                                    <li>{val?.acf?.section_4_progress[3]?.section_4_progress_lists[1]?.section_4_progess_list}</li>
                                    <li>{val?.acf?.section_4_progress[3]?.section_4_progress_lists[2]?.section_4_progess_list}</li>
                                    <li>{val?.acf?.section_4_progress[3]?.section_4_progress_lists[3]?.section_4_progess_list}</li> */}
                                      {ourdatafour.map(val=>{return(<li  key={val?.id}>{val?.section_4_progess_list}</li>)})}
                                </ul> 
                                  {/* <div className="hs4-points" dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[3].section_4_progress_list }} /> */}
                            </div>
                        </div>
                        </div>
                        <div className="slider">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="hs4-process d-mob">

                                    <h3 className="font-40">{val.acf.section_4_progress[4].section_4_progress_title}</h3>
                                    {/* <p className="fn-w3">{val.acf.section_4_progress[4].section_4_progress_content}</p> */}
                                    <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[4].section_4_progress_content }} />
                                </div>
                                <div className="hs4-col1">
                                <Image src={val.acf.section_4_progress[4].section_4_progress_image.url}  alt="Image" width={500} height={500} loading="lazy"/>
                                    <span className={`hs4-num ${styles.sliderq} ${activeIndex === 5 ? styles.sliderActiveq : ''}`}>{val.acf.section_4_progress[4].section_4_progress_number}</span>
                                </div>
                            </div>  <div className={`col-md-7 ver-cen ${styles.sliderq} ${activeIndex === 5 ? styles.sliderActiveq : ''}`}>
                                {/* <p className="">*/}
                                <p className="hs4-title " dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[4].section_4_progress_sub_title }}></p>
                                 {/* </p> */}
                                <ul className="hs4-points fn-w3">
                                {/* <li>{val?.acf?.section_4_progress[4]?.section_4_progress_lists[0]?.section_4_progess_list}</li>
                                    <li>{val?.acf?.section_4_progress[4]?.section_4_progress_lists[1]?.section_4_progess_list}</li>
                                    <li>{val?.acf?.section_4_progress[4]?.section_4_progress_lists[2]?.section_4_progess_list}</li>
                                    <li>{val?.acf?.section_4_progress[4]?.section_4_progress_lists[3]?.section_4_progess_list}</li> */}
                                       {ourdatafive.map(val=>{return(<li  key={val?.id}>{val?.section_4_progess_list}</li>)})}
                                </ul> 

                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                    

                <div className="row">
                    <div className="col-md-12">

                        <div className='mx-wd'>
                            <Ourimage 
                            onone={()=>handleClick(1)} 
                            ontwo={()=>handleClick(2)}
                            onthree={()=>handleClick(3)}
                            onfour={()=>handleClick(4)}
                            onfive={()=>handleClick(5)}
                           
                            filledPaths={filledPaths}
                            // blur={blur}
                            />
                            <Ourimagemobile
                            onone={()=>handleClick(1)} 
                            ontwo={()=>handleClick(2)}
                            onthree={()=>handleClick(3)}
                            onfour={()=>handleClick(4)}
                            onfive={()=>handleClick(5)}
                            filledPaths={filledPaths}
                            />
                        </div>
                        <div className="hs4-process d-desk animihs4">
            
                            <h3 className="font-40">{val.acf.section_4_progress[0].section_4_progress_title}</h3>
                            {/* <p className="fn-w3">{val.acf.section_4_progress[0].section_4_progress_content}</p> */}
                            <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.acf.section_4_progress[0].section_4_progress_content }} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Ourprocess;
