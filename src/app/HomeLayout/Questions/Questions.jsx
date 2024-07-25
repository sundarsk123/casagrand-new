"use client"
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from 'gsap/SplitText';
import "./Ques.css"
// gsap.registerPlugin(useGSAP,  SplitText);

const Questions = ({ val }) => {

    useGSAP(() => {
        gsap.from(".hs8 h2", {
            duration: 0.5,
            /*scale:1,*/
            y: 80,
            delay: 1,
            /*transformOrigin: "0% 30% -30",*/
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".hs8 h2",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }
        });
        gsap.from(".faqul li", {
            duration: 0.5,
            /*scale:1,*/
            y: 80,
            delay: 1,
            /*transformOrigin: "0% 30% -30",*/
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".faqul li",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }
        });

        var split = new SplitText(".hs8 h2 ", { type: "words,chars" });
        var charsa = split.chars;
        gsap.set(".hs8 h2", { perspective: 400 });

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
                trigger: ".hs8 h2",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }
        })

    })
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const [faq] = useState(val.acf.faq)
 

    return (
        <div>
             <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500&display=swap" rel="stylesheet"/>
            <div className="hs8">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="font-40 acenter">{val.acf.faq_title}</h2>
                            <ul className="faqul">
                                {
                                    faq.map((val , index) =>{return(
                                        <>
                                    <li>
                                    <button
                                    className={`accordion ${openIndex === index ? "accactive" : ""}`}
                                    onClick={() => handleToggle(index)}
                                       >
                                        <span>
                                            {val.faq_question}
                                        </span>
                                    </button>
                                    <div className="border-line"></div>
                                    <div className={` hideques ${openIndex === index ? "showques" : ''}`}>
                                    <div className="fn-w3" dangerouslySetInnerHTML={{ __html: val.faq_answer }} />
                                    </div>
                                </li>
                                        </>
                                    )})
                                }
                              
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;
