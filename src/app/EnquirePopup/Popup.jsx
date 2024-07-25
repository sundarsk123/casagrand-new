"use client"
import "./Popup.css"
import Image from 'next/image';
import { useState} from 'react';

const Popup = ({ open, onclose }) => {

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
        <div className={`cpopup-wrapper ${open ? "" : "cpop-close"}`}>
            <div className="cpopup-clr">
                <div className="cpopup-title">
                    <p className="bookp">Book a Free Consultation</p>
                    <div onClick={onclose} className="close-img-div">
                        <Image
                            src={"/landingpage/popup/Cas-CLS.svg"}
                            alt="img-popup"
                            width={20}
                            height={20}

                        />
                    </div>
                </div>
                <div>
                <form onSubmit={handleSubmit}>
            <div className="cpopup-inp-div">
                <input
                    type="text"
                    className={`cpopup-inp ${errors.name ? 'error' : ''}`}
                    id="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                />
                {/* {errors.name && <span className="error">{errors.name}</span>} */}
            </div>
            <div className="cpopup-inp-div">
                <input
                    type="email"
                    className={`cpopup-inp ${errors.email ? 'error' : ''}`}
                    id="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                />
                {/* {errors.email && <span className="error">{errors.email}</span>} */}
            </div>
            <div className="cpopup-inp-div">
                <input
                    type="tel"
                    className={`cpopup-inp ${errors.phone ? 'error' : ''}`}
                    id="phone"
                    placeholder="Phone*"
                    value={formData.phone}
                    onChange={handleChange}
                />
                {/* {errors.phone && <span className="error">{errors.phone}</span>} */}
            </div>
            <div className="cpopup-inp-div">
                <input
                    type="text"
                    className={`cpopup-inp ${errors.location ? 'error' : ''}`}
                    id="location"
                    placeholder="Location of your plot*"
                    value={formData.location}
                    onChange={handleChange}
                />
                {/* {errors.location && <span className="error">{errors.location}</span>} */}
            </div>
            <div className="cpopup-btn">
                <button className="cta" type="submit">
                    <span>REQUEST A CALL BACK</span>
                </button>
            </div>
        </form>
                </div>
                <div>
                    <p className="sub-p">By submitting this form, you agree to the privacy policy and terms of use</p>
                </div>
            </div>
        </div>
    );
}

export default Popup;
