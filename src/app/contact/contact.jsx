"use client"
import { useEffect, useState, useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from 'gsap/SplitText';
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FormV from "./formv";
import ImageBlur from '../ImageBlur/ImageBlur';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
import { Helmet } from 'react-helmet';


const Contact = ({ val }) => {

    const title =  'Contact-us';
    const description = 'Default Description';

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useGSAP(() => {

        var split = new SplitText(".animi h1 ", { type: "words,chars" });
        var charsa = split.chars;
        gsap.set(".animi h1", { perspective: 400 });

        gsap.from(charsa, {
            duration: 1,
            scale: 0,
            y: 80,
            delay: 1.5,
            rotationX: 120,
            transformOrigin: "0% 30% -30",
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".animi h1",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }
        })

        var split = new SplitText(".animis h2 ", { type: "words,chars" });
        var charsa = split.chars;
        gsap.set(".animis h2", { perspective: 400 });

        gsap.from(charsa, {
            duration: 1,
            scale: 0,
            y: 80,
            delay: 1.5,
            rotationX: 120,
            transformOrigin: "0% 30% -30",
            ease: "power4.out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".animis h2",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }
        })


        gsap.from('.cs-product-subdiv', {
            duration: 0.3,
            y: 50,
            ease: "power1.out",
            delay: 1,

            stagger: {
                amount: 0.3
            },
            scrollTrigger: {
                trigger: ".cs-product-subdiv",
                start: "top 100%",
                end: "+=500px",
                scrub: 1,
            },
        });

        gsap.from('.cs-address-col2 p', {
            duration: 0.3,
            y: 100,
            ease: "power1.out",
            delay: 1,
            /*skewY: 7,*/
            stagger: {
                amount: 0.3
            },
            scrollTrigger: {
                trigger: ".cs-address-col2 p",
                start: "top 100%",
                end: "+=500px",
                scrub: 1,
            },
        });

        gsap.from('.cs-address-title h2', {
            duration: 0.3,
            y: 100,
            ease: "power1.out",
            delay: 1,
            /*skewY: 7,*/
            stagger: {
                amount: 0.3
            },
            scrollTrigger: {
                trigger: ".cs-address-title h2",
                start: "top 100%",
                end: "+=500px",
                scrub: 1,
            },
        });



        gsap.set(".email-tag ", { xPercent: -50, yPercent: -50 });

        var ball = document.querySelector(".email-tag ");
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



    })

    useEffect(() => {
        gsap.set(".call-tag ", { xPercent: -50, yPercent: -50 });

        var ball = document.querySelector(".call-tag ");
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
    })


    useEffect(() => {
        gsap.set(".loca-tag ", { xPercent: -50, yPercent: -50 });

        var ball = document.querySelector(".loca-tag ");
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
    })



    return (
        <div>
             <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div className="cs1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 animi">
                            <h1 className="font-100 text-upper center">{val.title.rendered}</h1>

                        </div>
                    </div>
                    <div className="row cs1_formrow">
                        <div className="col-lg-5 cs1-col1 dn-none-con">
                            {/* <Image className="cs1-image" src={"/img/contact-sec1-image.png"} alt="contact-sec1-image"
                                width={400}
                                height={400} style={{ width: "100%", height: "auto" }}
                            /> */}

                            <ImageBlur
                                width={555}
                                height={694}
                                className="cs1-image"
                                src={"/img/contact-sec1-image.png"}
                                alt="contact-sec1-image"
                                
                            />

                        </div>

                        <div className="col-lg-5 cs1-col1 dn-none-min mt-img">
                            {/* <Image className="cs1-image" src={"/contact/contact-O1-min.png"} alt="contact-sec1-image"
                                width={200} height={200} style={{ width: "100%", height: "auto" }}
                            /> */}

                            <ImageBlur
                                width={371}
                                height={287}
                                className="cs1-image"
                                src={"/contact/contact-O1-min.png"}
                                alt="contact-sec1-image"
                            />

                        </div>

                        {/* <div className="col-lg-7 cs1-col2">
                        <FormV/>
                        </div> */}

                        <div className="col-lg-7 cs1-col2">
                            <FormV />
                        </div>
                    </div>

                </div>

            </div>
            <div className="cs2">
                <div className="container-fluid">
                    <div className="row cs2row">
                        <div className="col-md-12 cs-product-subdiv animis">
                            <h2 className="font-100">Say <br /> Hello! </h2>
                        </div>
                    </div>
                    {/* <a className="emaillink-wraper" href="#">
                        <div className="row cs2row cs-product-subdiv emailrowhover">
                            <div className="col-md-7 cs-address-title con">
                                <h2 className="font-50" >{val.acf.location_title}</h2>

                                <button className="loca-tag "  >
                                    <div className="flex"><Image src="./contact/casagrand-perch-iocn-02.svg" alt="con-1" width={10} height={10} /><span>Get directions</span></div>
                                </button>


                            </div>
                            <div className="col-md-5 cs-product-subdiv cs-address-col2">
                                <p className="locationTitle">{val.acf.location_name}</p>
                                <p className="con-para">{val.acf.location_address}</p>
                                <p className="locationTitle">{val.acf.open_days}</p>
                            </div>
                        </div>
                    </a> */}
                    <a className="emaillink-wraper" href="tel:+917505205205">
                        <div className="row cs2row align-item-center emailrowhover">
                            <div className="col-md-7 cs-address-title">
                                <h2 className="font-50 margin-0">{val.acf.location_title}</h2>
                                <button className="loca-tag ">
                                    <div className="flex"><Image src="./contact/casagrand-perch-iocn-02.svg" alt="con-1" width={10} height={10} /> <span>Get directions</span></div>
                                </button>
                            </div>
                            <div className="col-md-5 cs-address-col2">
                                {/* <p className="margin-0 con-para"><a className="phone-number" href="tel:+917505205205">{val.acf.phone_number}</a></p> */}
                                <p className="locationTitle">{val.acf.location_name}</p>
                                <p className="con-para">{val.acf.location_address}</p>
                                <p className="locationTitle">{val.acf.open_days}</p>
                            </div>
                        </div></a>
                    <a className="emaillink-wraper" href="tel:+917505205205">
                        <div className="row cs2row align-item-center emailrowhover">
                            <div className="col-md-7 cs-address-title">
                                <h2 className="font-50 margin-0">{val.acf.phone_number_title}</h2>
                                <button className="call-tag">
                                    <div className="flex"><Image src="./contact/casagrand-perch-iocn-03.svg" alt="con-1" width={10} height={10} /> <span>Call Us</span></div>
                                </button>
                            </div>
                            <div className="col-md-5 cs-address-col2">
                                <p className="margin-0 con-para"><a className="phone-number" href="tel:+917505205205">{val.acf.phone_number}</a></p>

                            </div>
                        </div></a>
                    <a className="emaillink-wraper" href="mailto:marketing@Casagrandperch.co.in" >
                        <div className="row cs2row align-item-center emailrowhover">
                            <div className="col-md-7 cs-address-title">
                                <h2 className="font-50 margin-0">{val.acf.email_title}</h2>
                                <button className="email-tag" >
                                    <div className="flex"><Image src="./img/email-tag-icon.svg" alt="con-1" width={10} height={10} /> <span>Send us an email </span></div>
                                </button>
                            </div>
                            <div className="col-md-5 cs-address-col2">
                                <p className="margin-0 con-para">{val.acf.email_id}</p>

                            </div>
                        </div>
                    </a>

                </div>

            </div>
        </div>
    );
}

export default Contact;
