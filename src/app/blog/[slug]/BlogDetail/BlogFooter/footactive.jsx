"use client"
import { useState, useEffect } from 'react';
import Blogfooter from './blogfooter';

const Footactive = () => {

    
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
          {isScrolled ? <Blogfooter/> : ""}  
        </>
    );
}

export default Footactive;
