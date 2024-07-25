"use client"
import { useState, useEffect } from 'react';
import Secondsec from './Secondsec';
import Hgt from '@/app/active/hgt';
import ProjectdetailAnimation from '../projectdetailAnimation';

const SecActive = ({val}) => {
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
            isScrolled ?<> <ProjectdetailAnimation/></>  : <Hgt/>
         }   
        </>
    );
}

export default SecActive;
