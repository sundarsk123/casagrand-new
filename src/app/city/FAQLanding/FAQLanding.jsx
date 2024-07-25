"use client"
import "./FAQ.css"
import { useState , useEffect } from "react";
// import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from 'gsap/SplitText';
// import { useGSAP } from "@gsap/react";
// gsap.registerPlugin( ScrollTrigger, SplitText);


const FAQLanding = ({val}) => {
  
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const [faq] = useState(val.acf.lp_faq)

    //   function animateTextas() {
    //     // Split the text into characters
    //     var split = new SplitText(".animiqs h2", { type: "chars, words" });
    //     var chars = split.chars;
    
    //     // Set perspective on the container
    //     gsap.set(".animiqs h2", { perspective: 400 });
    
    //     // Animate characters
    //     gsap.from(chars, {
    //         duration: 1.5,
    //         scale: 0,
    //         y: 80,
    //         rotationX: 120,
    //         transformOrigin: "0% 30% -30",
    //         ease: "power4.out",
    //         stagger: 0.01,
    //         scrollTrigger: {
    //             trigger: ".animiqs h2",
    //             scrub: 1,
    //             start: "top 100%",
    //             end: "+=500px"
    //         }
    //     });
    // }

    // useEffect(()=>{
    //     animateTextas();
    //     ScrollTrigger.refresh();
    // },[])

    // useGSAP(()=>{
    //     gsap.from(".faquls li", {
    //         duration: 0.5,
    //         /*scale:1,*/
    //         y: 80,
    //         delay: 1,
    //         /*transformOrigin: "0% 30% -30",*/
    //         ease: "power4.out",
    //         stagger: 0.01,
    //         scrollTrigger: {
    //             trigger: ".faquls li",
    //             scrub: 1,
    //             start: "top 100%",
    //             end: "+=500px",
    //         }
    //     });
    // })



  

    return (
        <div>
             <div className="lp6">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 animiqs">
                            <h2 className="font-40 ">{val.acf.lp_faq_title}</h2>
                            <ul className="faqul mx-wds faquls">
                                {faq.map((val, index)=>{return(<>
                                    <li>
                                    <button
                                    className={`accordion  ${openIndex === index ? "accactive" : ""}`}
                                    onClick={() => handleToggle(index)}
                                       >
                                        <span>
                                        {val.lp_faq_question}
                                        </span>
                                    </button>
                                    <div className="border-line" ></div>
                                    <div className={`pn1 hideques ${openIndex === index ? "showques" : ''}`}>
                                        <p className="fn-w3 ">{val.lp_faq_answer}</p>
                                    </div>
                                </li>
                                </>)})}
                               
                                {/* <li>
                                    <button className={`accordion ${isOpen[1] ? "accactive" : ""}`} onClick={() => handleToggle(1)}
                                        >
                                        <span>
                                        {val.acf.lp_faq[1].lp_faq_question}
                                        </span>
                                    </button>
                                    <div className="border-line"></div>
                                    <div  className={`pn1 hideques ${isOpen[1] ? "showques" : ''}`}>
                                        <p className="fn-w3">{val.acf.lp_faq[1].lp_faq_answer}</p>
                                    </div>
                                </li>
                                <li>
                                    <button className={`accordion ${isOpen[2] ? "accactive" : ""}`} 
                                       onClick={() => handleToggle(2)}>
                                        <span>
                                        {val.acf.lp_faq[2].lp_faq_question}
                                        </span>
                                    </button>
                                    <div className="border-line"></div>
                                    <div className={`pn1 hideques ${isOpen[2] ? "showques" : ''}`}>
                                        <p className="fn-w3">{val.acf.lp_faq[2].lp_faq_answer}</p>
                                    </div>
                                </li>
                                  <li>
                                    <button className={`accordion ${isOpen[3] ? "accactive" : ""}`} 
                                       onClick={() => handleToggle(3)}>
                                        <span>
                                        {val.acf.lp_faq[3].lp_faq_question}
                                        </span>
                                    </button>
                                    <div className="border-line"></div>
                                    <div className={`pn1 hideques ${isOpen[3] ? "showques" : ''}`}>
                                        <p className="fn-w3" >{val.acf.lp_faq[3].lp_faq_answer}</p>
                                    </div>
                                </li>  */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQLanding;
