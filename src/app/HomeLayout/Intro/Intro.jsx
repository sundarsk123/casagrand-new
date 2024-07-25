"use client"
import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import "./intro.css"
import Image from 'next/image';
import { Helmet } from 'react-helmet';


const Intro = ({val}) => {

    const title =  'Casagrand';
    const description = 'Default Description';

    useGSAP(() => {
        gsap.from(".home-form1", {
            duration: 0.8,
            y: 100,
            ease: "power4.out",
            delay: 0.5,
            stagger: {
                amount: 0.3
            },
        });

        

    })



    const [isVisible, setIsVisible] = useState(false);
    const [isVisiblebt, setIsVisiblebt] = useState(true);
    const [isVisiblebg, setIsVisiblebg] = useState(false);

    useEffect(() => {
        if (isVisible) {
            gsap.from(".visibless", {
                duration: 0.5,
                y: 100,
                ease: "power4.out",
                delay: 0,
                stagger: {
                    amount: 0.3
                },
            });
        }
    }, [isVisible]);

    useEffect(() => {
        if (isVisiblebg) {
            gsap.to(".down", {
                duration: 0.5,
                y: 500,
                ease: "power4.out",
                delay: 0,
                stagger: {
                    amount: 0.3
                },
            });
        }
    }, [isVisiblebg]);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        setIsVisiblebt(!isVisiblebt)

    };

    const toggleVisibiliy = () => {
        setIsVisiblebg(true)
    }

    const [formData, setFormData] = useState({
        name: '',
        mobileNumber: '',
        email: '',
        location: 'location'
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        if (formData.name.trim() === '') {
            errors.name = 'Name is required';
        }
        if (formData.mobileNumber.trim() === '') {
            errors.mobileNumber = 'Mobile Number is required';
        }
        if (!/^\d{10}$/.test(formData.mobileNumber.trim())) {
            errors.mobileNumber = 'Mobile Number is invalid';
        }
        if (formData.email.trim() === '') {
            errors.email = 'Email is required';
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (formData.location === 'location') {
            errors.location = 'Please select a location';
        }
        if (Object.keys(errors).length === 0) {
            // Form is valid, you can proceed with submission
            console.log('Form is valid:', formData);
            // Reset form data
            setFormData({
                name: '',
                mobileNumber: '',
                email: '',
                location: 'location'
            });
        } else {
            setErrors(errors);
        }
    };


    return (
        <div>
             <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div className="hs1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            {/* <video
                                className="hs1-img"
                                autoPlay
                                muted
                                loop
                                preload="metadata"
                                poster={val.acf.url}>
                                <source src="https://dezvolta.b-cdn.net/corirubber/sustainability-video.mp4" type="video/mp4" />
                            </video> */}
                            <Image priority   width={1426}
                                height={706} className="hs1-img img2-hidden" src="/landingpage/banner-098.jpg" alt="banner" />
                            <Image priority    width={400}
                                height={450} className="hs1-img img-hidden" src="/landingpage/MObile-view098.jpg" alt="banner" />
                            <div className="hs1-form ">

                               
                                <form onSubmit={handleSubmit} className={`home-form1 m-w ${isVisiblebg ? 'down' : ''} ${isVisible ? 'visibless' : ''}`}>
                                    <h2 className='enq-h df-none'>Enquire Now</h2>
                                    <input
                                        className={`home-form-inp${errors.name ? ' error' : ''}`}
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {/* {errors.name && <p className="error">{errors.name}</p>} */}
                                    <input
                                        className={`home-form-inp${errors.mobileNumber ? ' error' : ''}`}
                                        type="tel"
                                        name="mobileNumber"
                                        placeholder="Mobile Number"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                    />
                                    {/* {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>} */}
                                    <input
                                        className={`home-form-inp${errors.email ? ' error' : ''}`}
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {/* {errors.email && <p className="error">{errors.email}</p>} */}
                                    <select
                                        className={`fn-w3 home-form-inp${errors.location ? ' error' : ''}`}
                                        name="location"
                                        id="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                    >
                                        <option value="location">Location to your Plot</option>
                                        <option value="chennai">Chennai</option>
                                        <option value="coimbatore">Coimbatore</option>
                                        <option value="bangalore">Bangalore</option>
                                    </select>
                                    {/* {errors.location && <p className="error">{errors.location}</p>} */}
                                    <div className='posi-rela-rg'>
                                        <button className="form-cta  mb-m" type="submit" style={{cursor : "pointer"}}><span>Enquire Now</span></button>

                                    </div>
                                </form>
                                <a onClick={toggleVisibility} style={{ cursor: "pointer" }} className={`d-mob cta form-mob-cta ${isVisiblebt ? '' : 'hiddenss'}`}><span>Enquire Now</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Intro;
