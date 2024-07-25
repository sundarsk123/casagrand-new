"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import "./Nav.css"
import { useState} from 'react';




const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    // useGSAP(()=>{
    //     gsap.from("#menu-main-menu li", {
    //         x: -100,
    //         opacity: 0,
    //         duration: 0.5,
    //         stagger: 0.2, // Stagger the animation for each menu item
    //         ease: "power3.out", // Use ease-out animation
    //       });
    // })

  
    return (
        <div>
            <header   className="header-outer">
                <nav className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 align-nav">
                                <div className="logo-div">
                                    <Link href={"/"}>

                                        <Image width={130} height={33} src={"/Perch new logo-01.svg"} alt="Casagrand Perch Logo" className='inline-blocks align-middles' priority />
                                    </Link></div>
                             
                                <button className="mob-menu" onClick={toggleMenu} >
                                    <Image width={80} height={75} src={"/img/menu-icon.svg"} alt="Menu"  style={{cursor : "pointer"}} priority/>
                                </button>
                                <div className={`df-l-none hide ${menuOpen ? "show" : ""}`}>
                                    <div className="" >
                                        <div className="">
                                            <div className="mobile-na">
                                                <ul  id="menu-main-menu" className="menu">
                                                    <li className="menuhover"><Link href="/about-us" onClick={toggleMenu}><span>About
                                                        Us</span></Link></li>
                                                    <li className="menuhover"><Link  onClick={toggleMenu}
                                                        href={"/projects"}><span>Projects</span></Link></li>
                                                    <li className="menuhover"><Link onClick={toggleMenu} href={"/Packages"} ><span>Packages</span></Link></li>
                                                    <li className="menu-conbut" ><Link onClick={toggleMenu} className="cta wobble animated" 
                                                        href="/contact"><span>Contact</span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div id="mobile-navigation" className="mhidden">
                                    <div className="mobile-overlay">

                                    </div>
                                    <div className="mobile-nav">
                                        <ul id="menu-main-menu" className="menu">
                                            <li className="menuhover"><Link href="/about-us"><span>About Us</span></Link></li>
                                            <li className="menuhover"><Link href={"/projects"}  ><span>Projects</span></Link></li>
                                            <li className="menuhover"><Link href={"/Packages"} ><span>Packages</span></Link></li>
                                            <li className="menu-conbut"><Link className="cta wobble animated" href={"/contact"}
                                            ><span>Contact</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
