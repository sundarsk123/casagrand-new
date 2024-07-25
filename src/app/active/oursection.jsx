"use client"
import { useState, useEffect } from 'react';
import Ourprocess from '../HomeLayout/Ourprocess/Ourprocess';

const Oursection = ({val}) => {

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
           {isScrolled ? <Ourprocess val={val}/> : "" } 
        </div>
    );
}

export default Oursection;
