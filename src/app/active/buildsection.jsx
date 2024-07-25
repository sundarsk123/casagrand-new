"use client"
import { useState, useEffect } from 'react';
import Building from '../HomeLayout/Building/Building';

const Buildsection = ({val}) => {

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
        <>
           {isScrolled ? <Building val={val}/> : " " } 
        </>
    );
}

export default Buildsection;
