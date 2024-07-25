"use client"
import { useState, useEffect } from 'react';
import BuildindSlider from '../HomeLayout/Building/BuildindSlider';

const Buildslidersec = ({val}) => {

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
            {isScrolled ? <BuildindSlider val={val}/> : ""}
        </div>
    );
}

export default Buildslidersec;
