import Image from 'next/image';
import React from 'react';
import "./About-img.css"

const AboutImg = () => {
    return (
        <div className='about-div'>
            <Image
            src={"/about/aboutus.jpeg"}
            alt='about-us'
            width={1600}
            height={1600}
            className='about-img-sec'
            />
        </div>
    );
}

export default AboutImg;
