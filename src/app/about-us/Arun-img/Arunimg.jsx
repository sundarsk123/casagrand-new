import Image from 'next/image';
import React from 'react';
import "./Arunimg.css"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Arunimg = ({
    arunimg, 
    about_md_name , 
    about_md_designation,
    about_md_description
}) => {

    useGSAP(()=>{
        // gsap.fromTo(".aruns-img", 
        //     { y: 500, opacity: 0 }, // Start position (bottom)
        //     { y: 0, opacity: 1, duration: 2, ease: 'power3.out' } // End position (top)
        //   );
        gsap.fromTo(
            ".aruns-img",
            {
              y: 200, // Start from 500px below the original position
              opacity: 0,
            },
            {
              y: 0, // Move to the original position
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: ".aruns-img",
                start: 'top 80%', 
                end: 'bottom 20%', 
                toggleActions: 'play none none reverse', 
              },
            }
          );
    })
    return (
        <div className='arun-parten'>
            <div>
                <Image
                src={"/about/map/AUS-pattern.png"}
                alt='pattern'
                width={1500}
                height={1500}
                className='pattern-img'
                />
            </div>
            <div className='arun-mx-w '>
                <div className='aruns-img'>
                <Image
                src={arunimg}
                alt='arun'
                width={900}
                height={500}
                className='arun-img'
                />
                </div>
                <div className='arun-detail-div'>
                    <div className='arun-detail-flex '>
                        <div className='arun-main-div'>
                        <h2>{about_md_name}</h2>
                        <p>{about_md_designation}</p>
                        </div>
                        <div className='arun-content-div'>
                            <p>{about_md_description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Arunimg;
