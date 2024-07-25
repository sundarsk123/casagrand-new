"use client"
import { useState, useEffect } from 'react';
import Questions from '../HomeLayout/Questions/Questions';

const Questionsection = ({val}) => {

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
           {isScrolled ? <Questions val={val}/> : "" } 
        </div>
    );
}

export default Questionsection;
