"use client"
import React, { useState  } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./cfooter.css"


const Cfooter = () => {

    const [show , setshow]= useState(false)
    const [shows , setshows] = useState(false)

    return (
        <div>
              <div>
            <footer className="footer">
                <div className="container-fluid">
                
                    <div className="row">
                        <div className="col-md-6 footcol">
                            <div className="footcol-div">
                                <h4>Stay In The trend</h4>
                                <p className='py-3'>Discover The World Of Ultima. Subscribe To Our Newsletter. </p>
                                <input type="text" placeholder="Email" className="coninp" /><button className="coninp-sub" type="submit">-</button>
                                <div className="footlogomaindiv">
                                    <div className="footlogodiv">
                                        <div className="foot-logo-s">
                                            <Image className="footer-logo" src={"/Perch new logo-01.svg"} alt="Corirubber Logo" width={100} height={100} loading='lazy' />
                                        </div>
                                        <div className="foot-social-div">
                                            <ul className="foot_social_list">
                                                <li><a href="#" target="_blank"><Image src={"/img/sm-icon5.svg"} alt="Icon" width={100} height={100} loading='lazy'/></a></li>
                                                <li><a href="#" target="_blank"><Image src={"/img/sm-icon2.svg"} alt="Icon" width={100} height={100} loading='lazy'/></a></li>
                                                <li><a href="#" target="_blank"><Image src={"/img/sm-icon4.svg"} alt="Icon" width={100} height={100} loading='lazy'/></a></li>
                                                <li><a href="#" target="_blank"><Image src={"/img/twitter.svg"} alt="Icon" width={100} height={100} loading='lazy'/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 footcol clic" onClick={()=>{setshow(!show)}}>
                            <div className="footcol-div">
                                <h4 className={show ? "footactive" : ""}>Quick Links</h4>
                                <div className={`footnone ${show ? "footvisible" : ""}`}>
                                <ul className="foot-list">
                                    <li><a href="#">About Us</a></li>
                                    <li><Link href="/projects">Projects</Link></li>
                                    <li><Link href="/Packages">Packages</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 footcol clic" onClick={()=>{setshows(!shows)}}>
                            <div className="footcol-div">
                                <h4 className={shows ? "footactive" : ""}>Information</h4>
                                <div className={`footnone ${shows ? "footvisible" : ""}`}>
                                <ul className="foot-list">
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    {/* <li><a href="#">Cancellation Policy</a></li>
                                    <li><a href="#">Channel Partner</a></li> */}
                                </ul>
                            </div>
                            </div>
                        </div>
                        <p className="cpy-rgts" style={{marginTop : "1rem"}}>© 2024 Casagrandperch. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
        </div>
    );
}

export default Cfooter;
