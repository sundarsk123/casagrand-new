"use client"
import { useState, useEffect } from 'react';
import OurBrand from '../HomeLayout/OurBrand/OurBrand';

const Ourbrandsection = ({val}) => {

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
            {isScrolled ? <OurBrand val={val}/> :  ""}
        </div>
    );
}

export default Ourbrandsection;
