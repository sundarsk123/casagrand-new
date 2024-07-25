"use client"
import { useState, useEffect } from 'react'
import Hirebest from './Hirebest';

const Hireactive = ({val}) => {

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
          {
            isScrolled ? 
            <Hirebest val={val}/>
            :
            ""
          }  
        </>
    );
}

export default Hireactive;
