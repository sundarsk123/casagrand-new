"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/SplitText';
import Hirebest from "@/app/projects/HireBest/Hirebest";
import Donutchart from "./Donutchart";
import HiretheBest from "../Hirethebest/HiretheBest";
import "./costpage.css"
import Premiumspecification from "../Premiumspecification/Premiumspecification";
import Popup from "@/app/EnquirePopup/Popup";
import { Helmet } from 'react-helmet';


gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Costpage = ({val}) => {

    const title =  'Packages';
    const description = 'Default Description';
    
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
    })

    const [selectedCity, setSelectedCity] = useState('');
    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    useEffect(() => {
        // Logic to set initial slider values based on selected city
        switch (selectedCity) {
            case 'Chennai':
                setValue(1500); // Initial value for Chennai
                setValue2(25); // Initial value for Chennai
                setValue3(10); // Initial value for Chennai
                break;
            case 'Coimbatore':
                setValue(1200); // Initial value for Coimbatore
                setValue2(30); // Initial value for Coimbatore
                setValue3(12); // Initial value for Coimbatore
                break;
            case 'Hyderabad':
                setValue(1300); // Initial value for Hyderabad
                setValue2(35); // Initial value for Hyderabad
                setValue3(15); // Initial value for Hyderabad
                break;
            case 'Bangalore':
                setValue(1400); // Initial value for Bangalore
                setValue2(40); // Initial value for Bangalore
                setValue3(20); // Initial value for Bangalore
                break;
            default:
                // Handle default case
                break;
        }
    }, [selectedCity]);

    const [value, setValue] = useState(1100);
    const handleChange = (event) => { setValue(event.target.value); };
    const settings = { fill: '#F9A247', background: '#F6F6F6' }
    const applyFill = (sliderValue) => {
        const percentage = ((sliderValue - 1) / (7000 - 1)) * 100;
        const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
        return bg;
    };
    const calculateCost = (squareFootage) => {
        const cost = squareFootage * 1000;
        return cost.toLocaleString('en-IN');
    };
    const [value2, setValue2] = useState(33);
    const handleChange2 = (event) => { setValue2(event.target.value); };
    const settings2 = { fill: '#F9A247', background: '#F6F6F6' }
    const applyFill2 = (sliderValue) => {
        const percentage = ((sliderValue - 1) / (240 - 1)) * 100;
        const bg = `linear-gradient(90deg, ${settings2.fill} ${percentage}%, ${settings2.background} ${percentage + 0.1}%)`;
        return bg;
    };
    const calculateCost2 = (squareFootage) => {
        const sq = squareFootage * 7000;
        return sq.toLocaleString('en-IN');
    };
    const [value3, setValue3] = useState(11);
    const handleChange3 = (event) => { setValue3(event.target.value); };
    const settings3 = { fill: '#F9A247', background: '#F6F6F6' }
    const applyFill3 = (sliderValue) => {
        const percentage = ((sliderValue - 1) / (100 - 1)) * 100;
        const bg = `linear-gradient(90deg, ${settings3.fill} ${percentage}%, ${settings3.background} ${percentage + 0.1}%)`;
        return bg;
    };
    const calculateCost3 = (squareFootage) => {
        const sa = squareFootage * 8000;
        return sa.toLocaleString('en-IN');
    };
    // const totalCost = calculateCost(value, 100000) + calculateCost(value2, 10000) + calculateCost(value3, 30000);

    const totalCost = parseInt(calculateCost(value).replace(/,/g, '')) + parseInt(calculateCost2(value2).replace(/,/g, '')) + parseInt(calculateCost3(value3).replace(/,/g, ''));
    const formattedTotalCost = totalCost.toLocaleString('en-IN');
    // const totalCost = (value, value2, value3) => {
    //     const cost1 = parseInt(calculateCost(value).replace(/,/g, ''));
    //     const cost2 = parseInt(calculateCost2(value2).replace(/,/g, ''));
    //     const cost3 = parseInt(calculateCost3(value3).replace(/,/g, ''));

    //     return (cost1 + cost2 + cost3).toLocaleString('en-IN');
    // };


    // const total = totalCost(cost, val2, val3);

    const handleFirst = () => {
        const hElement = document.querySelector('.cc2');
        hElement.scrollIntoView({ behavior: 'smooth' });
    }

    const[open , setopen]=useState(false)

    return (
        <>
         <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div className="costcalculatorlMain" >
               

                <div className="coc1">
                    <div className="container-fluid">
                    <div className="row">
                            <div className="col-md-12 animi">
                    <Premiumspecification val={val} onscrollani={handleFirst} onData={()=>{setopen(!open)}}/>
                    </div>
                    </div>
                    <div className="cc2">
                        <div className="row">
                            <div className="col-md-12 animi">
                                <h2 className="font-45 text-center">Cost Calculator</h2>

                            </div>
                        </div>
                        </div>
                       

                        <div className="row">
                            <div className="col-md-12">
                                <div className="coc1-inner-sec">
                                    <div className="row">
                                        <div className="col-lg-6 costcal1-col g-col-1">
                                            <div className="costcal1-inner-div">
                                                <p>Location</p>
                                                <select className="costinput" onChange={handleCityChange}>
                                                    <option value="" disabled selected hidden>City</option>
                                                    <option value="Chennai">Chennai</option>
                                                    <option value="Coimbatore">Coimbatore</option>
                                                    <option value="Hyderabad">Hyderabad</option>
                                                    <option value="Bangalore">Bangalore</option>

                                                </select>

                                                <div>
                                                    <div className="range-slider">
                                                        <p>Buid Up Area (Sq.Ft)</p>
                                                        <input className="range-slider__range" type="range"
                                                            min={1}
                                                            max={7000}
                                                            value={value}
                                                            onChange={handleChange}
                                                            style={{ background: applyFill(value) }}
                                                        />
                                                        <span className="range-slider__value">{value}</span>
                                                    </div>
                                                    <div>
                                                        <div className="range-slider">
                                                            <p>Cover Car Parking (240 Sq.Ft)</p>
                                                            <input className="range-slider__range" type="range"
                                                                min={0}
                                                                max={240}
                                                                value={value2}
                                                                onChange={handleChange2}
                                                                style={{ background: applyFill2(value2) }}
                                                            ></input>

                                                            <span className="range-slider__value">{value2}</span>
                                                        </div>
                                                    </div>

                                                    <div className="range-slider-outer">

                                                        <div className="range-slider">
                                                            <p>Septic Tank (100 Ltr)</p>
                                                            <input className="range-slider__range" type="range"
                                                                min={0}
                                                                max={100}
                                                                value={value3}
                                                                onChange={handleChange3}
                                                                style={{ background: applyFill3(value3) }} />
                                                            <span className="range-slider__value">{value3}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-lg-6 g-col-2">
                                            <div className="coc1-image-div">
                                                {/* <img src="https://dezvolta.in/casagrand-perch/img/costcal1-gh.png" /> */}
                                                <div className="g-total"><p><span className="total-title">Total Cost (Including GST) </span><span className="total-cost"> ₹{formattedTotalCost}</span></p></div>
                                                <div className="g-price-div">
                                                    <div className="g-title"><p>Breakdown of Overall Construction Cost By Percentage</p></div>
                                                    <Donutchart
                                                        builtUpCost={parseInt(calculateCost(value).replace(/,/g, ''))}
                                                        carParkingCost={parseInt(calculateCost2(value2).replace(/,/g, ''))}
                                                        septicTankCost={parseInt(calculateCost3(value3).replace(/,/g, ''))}
                                                    />
                                                    <div className="row g-all-price">
                                                        <div className="col-md-6 col-lg-8 col-xl-6"><p><span className="built-clr"></span>Built Up Cost<span className="price-value">₹{calculateCost(value)}</span></p></div>
                                                        <div className="col-md-6 col-lg-8 col-xl-6"><p><span className="car-clr"></span>Car Parking Cost<span className="price-value">₹{calculateCost2(value2)}</span></p></div>
                                                        <div className="col-md-6 col-lg-8 col-xl-6"><p><span className="tank-clr"></span>Septic Tank Cost<span className="price-value">₹{calculateCost3(value3)}</span></p> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="pds3">
                    <div className="container-fluid">
                        <img className="pds3-image cost-wd" src="https://dezvolta.in/casagrand-perch/img/pds3-image.png" />
                        <div className="pds3-content-sec">
                            <div className="row">
                                <div className="col-md-7">
                                    <h2 className="font-50">Hire the Best<br /> House Contruction Service</h2>
                                    <div className="pds3-statics">
                                        <div className="pds3-statics-col">
                                            <p>6500+</p>
                                            <p>Homes</p>
                                        </div>
                                        <div className="pds3-statics-col">
                                            <p>470+</p>
                                            <p>Quality Checks</p>
                                        </div>
                                        <div className="pds3-statics-col">
                                            <p>100%</p>
                                            <p>Safe Money Transaction</p>
                                        </div>

                                    </div>
                                    <div className="pds3-cta">
                                        <a className="cta" href="#"><span>Lets Build</span></a>
                                    </div>
                                </div>




                                <div className="col-md-6">


                                </div>


                            </div>

                        </div>

                    </div>
                </div> */}
                {/* <Hirebest /> */}
                <HiretheBest />
            </div>
            <Popup open={open} onclose={()=>{setopen(!open)}}/> 
        </>
    );
}

export default Costpage;