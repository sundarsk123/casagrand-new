"use client"
import FAQLanding from '../../FAQLanding/FAQLanding';
import Construction from '../../Construction/Construction';
import ConstructionSlider from '../../Construction/ConstructionSlider';
import AsSeenOn from '../../Asseen/AsSeenOn';
import CuriousInformation from '../../CuriousInformation/CuriousInformation';
import { useState , useEffect } from 'react';

const CitytwoActive = ({val , onsent}) => {

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
          {isScrolled ? <>
            <FAQLanding val={val}/>
          <Construction val={val} onsent={onsent}/>
          <ConstructionSlider val={val}/>
          <AsSeenOn val={val}/>
          <CuriousInformation val={val}/></>
          :""}  
        </>
    );
}

export default CitytwoActive;
