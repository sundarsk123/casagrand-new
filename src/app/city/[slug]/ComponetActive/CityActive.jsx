"use client"
import Hgt from '@/app/active/hgt';
import { useState, useEffect } from 'react';
import Mainproject from '../../ProjectLanding/mainproject';
import OurCustomer from '../../OurCustomer/OurCustomer';
import OurProcessLanding from '../../OurProcessLanding/OurProcessLanding';
// import FAQLanding from '../../FAQLanding/FAQLanding';
// import Construction from '../../Construction/Construction';
// import ConstructionSlider from '../../Construction/ConstructionSlider';
// import AsSeenOn from '../../Asseen/AsSeenOn';
// import CuriousInformation from '../../CuriousInformation/CuriousInformation';
import Animation from '../animation';
// import StagesOfJourney from '../../stages_of_journey/Stages_of_journey';

const CityActive = ({val}) => {

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
  
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    useEffect(() => {
      // Add event listener for scroll
      window.addEventListener('scroll', handleScroll);
  
      // Set up interval to refresh scroll every 1 second
      const intervalId = setInterval(() => {
        handleScroll(); // Refresh scroll
      }, 1000);
  
      // Clean up
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearInterval(intervalId);
      };
    }, []);
    

  
    // useEffect(() => {
  
    //   window.addEventListener('scroll', handleScroll);
  
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);

    // const refreshScroll = () => {
    //   handleScroll(); // Update the scroll state
    // };
    return (
        <>
         {isScrolled 
         ? 
         <div>
          <Mainproject val={val}/>
        
          <OurCustomer val={val}/>
          {/* <StagesOfJourney/> */}
          {/* <OurProcessLanding val={val}/>
          <FAQLanding val={val}/>
          <Construction val={val}/>
          <ConstructionSlider val={val}/>
          <AsSeenOn val={val}/>
          <CuriousInformation val={val}/> */}
          <Animation/>
          </div>
         :
         <Hgt/>
        }   
        </>
    );
}

export default CityActive;
