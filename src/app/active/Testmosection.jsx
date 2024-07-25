"use client"
import { useState, useEffect } from 'react';
import Testimonials from '../HomeLayout/Testimonials/Testimonials';

const Testmosection = ({val}) => {

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
  
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    useEffect(() => {
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <div>
           {isScrolled ? <Testimonials val={val}/> : ""} 
        </div>
    );
}

export default Testmosection;
