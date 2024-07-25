"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import gsap from "gsap";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Hireactive from '../HireBest/Hireactive';
import SecActive from './secondsection/SecActive';
import Secondsec from './secondsection/Secondsec';
import Link from 'next/link';
import Houseslider from './Houseslider.jsx/Houseslider';
import StagesOfJourney from '@/app/city/stages_of_journey/Stages_of_journey';
// import { useRouter } from 'next/navigation';
import { Helmet } from 'react-helmet';


const Projectdetail = ({ val }) => {

    const title =  'Projects-details';
    const description = 'Default Description';

    useEffect(() => {
        gsap.set(".bu-img ", { xPercent: -50, yPercent: -50 });

        var ball = document.querySelector(".bu-img ");
        var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        var mouse = { x: pos.x, y: pos.y };
        var speed = 0.1;

        var xSet = gsap.quickSetter(ball, "x", "px");
        var ySet = gsap.quickSetter(ball, "y", "px");



        window.addEventListener("mousemove", e => {
            mouse.x = e.x;
            mouse.y = e.y;
        });
        gsap.ticker.add(() => {
            var dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            xSet(pos.x);
            ySet(pos.y);
        });
    }, [])


    // const projects =[val.slug-1] ;
    // console.log(projects)
    // const lastIndex = val.slug.length - 1;
    // const currentIndex = val.slug.length - 1; 
    // const nextIndex = (currentIndex + 1) % val.slug;

    // const currentIndex = 1; 
    // const previousIndex = currentIndex - 1;

    return (
        <>
         <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div className="projectdetailMain">

                <div className="pd1">
                    <div className="container-fluid">
                        <div className="row pd1-heading-row">
                            <div className="col-md-12 animi">
                                <h1 className="font-100 text-upper txt-center">{val?.title?.rendered}</h1>

                            </div>
                        </div>

                        <div className="row projectslider-row">
                            <div className="col-md-12">
                                <img className="gallery-icon bu-img" src="/projectdetail/galleryIcon.svg" />
                                <div className="pd-gallery-outer-div">
                                    <div className="swiper projectslider-container">
                                        <Houseslider val={val} />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <Secondsec val={val} />
                <SecActive val={val} />
                <div>
                        <StagesOfJourney val={val}/>
                    </div>
                <div className='pre-next-div link-mxw'>
                    <div>
                    {val?.next?.slug ? (
                        <Link href={`/projects/${val.next.slug}`} style={{ color: "inherit", textDecoration: "none" ,  }}>
                            <div className="prev-div" style={{ cursor: "pointer" }}>
                                <div className='prev-content-div'>
                                    <div className='prev-text-div'>
                                        <Image className="prev-img pro-fn-increase" width={20} height={60} src="/img/Icon-Arrow-05.svg" />
                                        <span className='pro-fn-increase'>Prev</span>
                                    </div>
                                    <div style={{textAlign : "right"}} className='link-dn'>
                                        <p className='prev-text-p'>{val?.next?.title}, 
                                        {/* {val?.previous?.project_location} */}
                                        </p>
                                    </div>
                                </div>
                                <div className='link-dn'>
                                    <Image className='preproject-img' width={100} height={100} src={val?.next?.image} />
                                </div>
                            </div>
                        </Link>
                    ) : null}
                    </div>
                   
                    <div style={{textAlign : "right" }}>
                    {val?.previous?.slug ? (
                        <Link href={`/projects/${val.previous.slug}`} style={{ color: "inherit", textDecoration: "none" , }}>
                            <div className="next-div" style={{ cursor: "pointer" }}>
                                <div className='link-dn'>
                                    <Image className='nextproject-img' width={100} height={100} src={val.previous.image} />
                                </div>
                                <div className='next-content-div'>
                                    <div className='next-text-div'>
                                        <span className='pro-fn-increase'>Next</span>
                                        <Image className="next-img pro-fn-increase" width={20} height={60} src="/img/Icon-Arrow-04.svg" />
                                    </div>
                                    <div className='link-dn'>
                                        <p className='next-text-p'>{val?.previous?.title}, 
                                        {/* {val?.previous?.project_location} */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ) : null}
                    </div>
                </div>
                <Hireactive val={val} />
            </div>
        </>

    );
}

export default Projectdetail;
