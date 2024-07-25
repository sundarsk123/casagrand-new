"use client"

import { useState } from 'react';
import "./curi.css"

const CuriousInformation = ({ val }) => {



    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Handle form submission here
            console.log('Form submitted successfully!', formData);
        } else {
            console.log('Form has errors. Please correct them.');
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (formData.name.trim() === '') {
            newErrors.name = 'Please enter your name.';
        }

        if (formData.email.trim() === '') {
            newErrors.email = 'Please enter your email address.';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (formData.phone.trim() === '') {
            newErrors.phone = 'Please enter your phone number.';
        }

        if (formData.location.trim() === '') {
            newErrors.location = 'Please enter the location of your plot.';
        }

        return newErrors;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    return (
        <>
            <footer className="lp-footer">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="footer-header-inner animi">
                                <h2 className="font-40">Curious For More Information?</h2>
                                <p className='fn-four'>Let our experts provide the answers. Whether you have questions, need information, or want to discuss your dream project, Feel free to reach out</p>
                            </div>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                    <div className="footer-inner-sec">
                        <div className="row foot-row">
                            <div className="col-md-6 col-lg-5 footer-col1 ver-cen">

                                <div className="footer-form-sec">
                                    <div className="footer-form-div">
                                        <p className="footer-form-title">Book a Free Consultation</p>
                                        <form onSubmit={handleSubmit}>
                                            <input
                                                type="text"
                                                id="name"
                                                className={`footinpt ${errors.name ? 'cerror' : ''}`}
                                                placeholder="Name*"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                            {/* {errors.name && <span className="error">{errors.name}</span>} */}

                                            <input
                                                type="email"
                                                id="email"
                                                className={`footinpt ${errors.email ? 'cerror' : ''}`}
                                                placeholder="Email*"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            {/* {errors.email && <span className="error">{errors.email}</span>} */}

                                            <input
                                                type="text"
                                                id="phone"
                                                className={`footinpt ${errors.phone ? 'cerror' : ''}`}
                                                placeholder="Phone*"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                            {/* {errors.phone && <span className="error">{errors.phone}</span>} */}

                                            <input
                                                type="text"
                                                id="location"
                                                className={`footinpt ${errors.location ? 'cerror' : ''}`}
                                                placeholder="Location of your Plot*"
                                                value={formData.location}
                                                onChange={handleChange}
                                            />
                                            {/* {errors.location && <span className="error">{errors.location}</span>} */}

                                            <button type="submit" className="footbutmit cta" style={{ cursor: "pointer" }}>
                                                <span>Start your Construction</span>
                                            </button>
                                            <p className="footagree-text colorw fn-three">By submitting this form, you agree to the privacy policy and terms of use</p>
                                        </form>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6 col-lg-7 footer-col2 ver-cen">
                                <div className="foot-contact-div">
                                    <div className="foot-contact-col">
                                        <div>
                                            <img src="/landingpage/address-icon.png" />
                                        </div>
                                        <div>
                                            <p className="foot-adres-title">Address</p>
                                            <p className="foot-adress colorw fn-three">NPL Devi Apartments, No.111, Old No.59 LB Road, Thirvanmiyur,
                                                Chennai 600 041 Tamil Nadu, India</p>
                                        </div>
                                    </div>

                                    <div className="foot-contact-col">
                                        <div>
                                            <img src="/landingpage/phone-icon.png" />
                                        </div>
                                        <div>
                                            <p className="foot-adres-title">Phone</p>
                                            <p className="foot-adress colorw fn-three"><span>+91 74181 67898</span> <span className='dis-inline'><img src="/landingpage/whatsapp.svg" /> +91 7505205205</span></p>
                                        </div>
                                    </div>

                                    <div className="foot-contact-col">
                                        <div>
                                            <img src="/landingpage/mail-icon.png" />
                                        </div>
                                        <div>
                                            <p className="foot-adres-title">Email</p>
                                            <p className="foot-adress colorw fn-three"><span>marketing@casagrandperch.co.in
                                            </span></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="footer-copy-write">
                            <p>© 2024 Casagrand Perch - Pioneering Dreams, Building Excellence with South Indias Leading Real Estate Company.</p>
                        </div>

                    </div>

                </div>


            </footer>
        </>
    );
}

export default CuriousInformation;
