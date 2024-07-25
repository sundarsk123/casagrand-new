"use client"
import LandingIntro from '../LandingIntro/LandingIntro';
import CityActive from './ComponetActive/CityActive';
// import Mainproject from '../ProjectLanding/mainproject';
// import OurCustomer from '../OurCustomer/OurCustomer';
import OurProcessLanding from '../OurProcessLanding/OurProcessLanding';
import CitytwoActive from './ComponetActive/CitytwoActive';
import { useState } from 'react';
import Popup from '@/app/EnquirePopup/Popup';
// import FAQLanding from '../FAQLanding/FAQLanding';
// import Construction from '../Construction/Construction';
// import ConstructionSlider from '../Construction/ConstructionSlider';
// import AsSeenOn from '../Asseen/AsSeenOn';
// import CuriousInformation from '../CuriousInformation/CuriousInformation';
// import Animation from './animation';

const Components = ({val}) => {

    const [open , setopen]=useState(false)
   
    return (
        <>
       <LandingIntro val={val}  onsent={()=>{setopen(!open)}}/>
       <CityActive val={val}/>
       <OurProcessLanding val={val} onsent={()=>{setopen(!open)}}/>
       <CitytwoActive val={val} onsent={()=>{setopen(!open)}}/>
        {/* <Mainproject val={val}/>
        <OurCustomer val={val}/>
        <OurProcessLanding val={val}/>
        <FAQLanding val={val}/>
        <Construction val={val}/>
        <ConstructionSlider val={val}/>
        <AsSeenOn val={val}/>
        <CuriousInformation val={val}/>
        <Animation/> */}
     
        <Popup open={open} onclose={()=>{setopen(!open)}}/>
        </>
    );
}

export default Components;
