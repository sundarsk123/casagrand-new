"use client"
import React from 'react';
import "./Builder.css"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);
const Builder = () => {

    useGSAP(() => {
        
        if (window.innerWidth >= 1024) {
            let ctx = gsap.context(() => {
              gsap.to('.panel', {
                scrollTrigger: {
                  trigger: '.panel',
                  start: 'top top',
                  end: '+=100%',
                  pin: true,
                  scrub: true,
                }
              });
      
              gsap.to('#build-animation', {
                x: '-180vw',
                delay: 2,
                scrollTrigger: {
                  trigger: '.panel',
                  start: 'top top',
                  end: '+=100%',
                  scrub: true,
                }
              });
            });
      
            return () => {
              ctx.revert();
            };
          }
    }, []);
    return (
        <div className='container-fluid builder-main-div panel'>
            <div className='row'>
                <div className='col-md-12 builder-flex'>
                    <div>
                        <div className='build-inner-flex'>
                            <p className='font-30 build-para build-p-flex'>
                                Casagrand Builder Private Limited <br />
                                Enterprises Committed To Building <br />
                                Delivering Value
                            </p>

                        </div>
                        <div id='build-animation' className='build-anime build-hide'>
                            <h2 id='buildNumber' className='build-p-flex build-p-font div-relative'><span className='span-left'>3</span><span className='span-right'>800000</span></h2>
                        </div>
                        <div  className='three-center'>
                            <h2  className='build-p-flex build-p-font '>3800000</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Builder;