"use client"
import { useState, useEffect } from 'react';
import Redefining from '../HomeLayout/Redefining/Redefining';
import ProjectCard from '../HomeLayout/ProjectCard/ProjectCard';
import Hgt from './hgt';
import DesktopRedefining from '../HomeLayout/DesktopRedefining/DesktopRedefining';

const Activesection = ({val}) => {

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
        {isScrolled ?
        <>
        <div className='rede-hidden'>
         <Redefining val={val}/>
         </div>
         <DesktopRedefining val={val}/> 
         </>
         : <Hgt/> } 
         
        </div>
    );
}

export default Activesection;
