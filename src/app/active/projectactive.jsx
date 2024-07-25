"use client"
import { useState, useEffect } from 'react';
import ProjectCard from '../HomeLayout/ProjectCard/ProjectCard';

const Projectactive = ({val}) => {

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
           {isScrolled ? <ProjectCard val={val}/> : "" } 
        </div>
    );
}

export default Projectactive;
