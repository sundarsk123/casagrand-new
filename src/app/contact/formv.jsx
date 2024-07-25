"use client"
import "./formv.css"
import { useState } from "react";

const FormV = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    landSize: '',
    city: '',
    plotLocation: '',
    message: '',
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form submission logic goes here
      console.log('Form submitted successfully:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    // Example validation rules, adjust as needed
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email address';
    }
    if (!data.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!isValidPhone(data.phone)) {
      errors.phone = 'Invalid phone number';
    }

    if (!data.landSize.trim()) {
      errors.landSize = 'Land size is required';
    } else if (!isValidLandSize(data.landSize)) {
      errors.landSize = 'Invalid land size';
    }
    if (!data.city.trim()) {
      errors.city = 'City is required';
    }
    if (!data.plotLocation.trim()) {
      errors.plotLocation = 'Location of your Plot is required';
    }
    if (!data.message.trim()) {
      errors.message = 'Message is required';
    }
    if (!data.termsAccepted) {
      errors.termsAccepted = 'Please accept the Terms and Conditions';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex, adjust as needed
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const isValidLandSize = (landSize) => {
    // Basic land size validation regex, adjust as needed
    const regex = /^[0-9]+(\.[0-9]+)?$/;
    return regex.test(landSize);
  };
  return (

    <>
      <form onSubmit={handleSubmit}>

        <div className={`form-colfull ${errors.name ? 'invalid' : ''}`}>
          <div className="input-box active-grey">
            <label className="input-label">Name*</label>
            <input
              type="text"
              className={`input-1 ${errors.name ? 'error' : ''}`}
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleChange}
            />
            {/* {errors.name && <span className="error">{errors.name}</span>} */}
          </div>
        </div>

        <div className={`form-colfull ${errors.email ? 'invalid' : ''}`}>
          <div className="input-box active-grey">
            <label className="input-label">Email*</label>
            <input
              type="text"
              className={`input-1 ${errors.email ? 'error' : ''}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleChange}
            />
            {/* {errors.email && <span className="error">{errors.email}</span>} */}
          </div>
        </div>

        <div className="form-col">
          <div className={`form-col1  ${errors.phone ? 'invalid' : ''}`}>
            <div className="input-box active-grey">
              <label className="input-label">Phone*</label>
              <input
                type="text"
                className={`input-1 ${errors.phone ? 'error' : ''}`}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleChange}
              />
              {/* {errors.phone && <span className="error">{errors.phone}</span>} */}
            </div>
          </div>
          <div className={`form-col2  ${errors.phone ? 'invalid' : ''}`}>
            <div className="input-box active-grey">
              <label className="input-label">Land Size*</label>
              <input
                type="text"
                className={`input-1 ${errors.landSize ? 'error' : ''}`}
                name="landSize"
                value={formData.landSize}
                onChange={handleChange}
                onBlur={handleChange}
              />
              {/* {errors.landSize && <span className="error">{errors.landSize}</span>} */}
            </div>
          </div>
        </div>

        <div className="form-col">
          <div className={`form-col1  ${errors.city ? 'invalid' : ''}`}>
            <div className="input-box active-grey">
              <label className="input-label">City*</label>
              <input
                type="text"
                className={`input-1 ${errors.city ? 'error' : ''}`}
                name="city"
                value={formData.city}
                onChange={handleChange}
                onBlur={handleChange}
              />
              {/* {errors.city && <span className="error">{errors.city}</span>} */}
            </div>
          </div>
          <div className={`form-col2  ${errors.plotLocation ? 'invalid' : ''}`}>
            <div className="input-box active-grey">
              <label className="input-label">Location of your Plot*</label>
              <input
                type="text"
                className={`input-1 ${errors.plotLocation ? 'error' : ''}`}
                name="plotLocation"
                value={formData.plotLocation}
                onChange={handleChange}
                onBlur={handleChange}
              />
              {/* {errors.plotLocation && (
                <span className="error">{errors.plotLocation}</span>
              )} */}
            </div>
          </div>
        </div>

        <div className={`form-colfull ${errors.message ? 'invalid' : ''}`}>
          <div className="input-box active-grey">
            <label className="input-label">Message*</label>
            <textarea
              className={`input-1 ${errors.message ? 'error' : ''}`}
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleChange}
            />
            {/* {errors.message && <span className="error">{errors.message}</span>} */}
          </div>
        </div>
        <div className="form-col">
          <div className="form-col1 termssec1">
            <label className="checkbox-label">
              I have read and accept the <a>Terms and Conditions</a>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
            {errors.termsAccepted && (
              <span className="error" style={{color : "red"}}>{errors.termsAccepted}</span>
            )}
          </div>
          <div className="form-col2 termssec2">
            <button className="cta border-none con-btn" type="submit" style={{ cursor: "pointer" }}><span>Submit</span></button>
          </div>

        </div>
      </form>
    </>
  );
}

export default FormV;
