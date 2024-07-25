"use client"
import Image from "next/image";
import "./grid.css"
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import Link from "next/link";


const Gridswiper = ({ val , posts }) => {


    useGSAP(()=>{
        gsap.fromTo("#Article", 
        { scale: 0.6 }, 
        { scale: 1, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo("#projectArticle", { x: "100%" }, { x: 0, duration: 1, ease: "power2.out" });
    gsap.fromTo("#Article2", { x: "-100%" }, { x: 0, duration: 1, ease: "power2.out" });
    gsap.fromTo("#Article5", { y: "-100%" }, { y: 0, duration: 1, ease: "power2.out" });
    gsap.fromTo("#Article6", { y: "-100%", x: "-50%" }, { y: 0, x: 0, duration: 1, ease: "power2.out" });
    gsap.fromTo("#Article4", { y: "-100%", x: "50%" }, { y: 0, x: 0, duration: 1, ease: "power2.out" });
    })

    return (
        <div>
            <div className="container">
                <main className="grid">
                    {
                        posts.slice(0, 6).map(datas =>{
                            return(
                                <article id="Article" key={datas.id}>
                                    <Link href={`/projects/${datas.slug}`} style={{color : "inherit" , textDecoration : "none" }}>
                                <div className="hs3-grid ">
                                
                                    <Image src={datas?._embedded['wp:featuredmedia']['0']?.source_url}  alt="img1" width={300} height={300} className="hs3-grid-img img-w hgt" loading="lazy" />
                                    <p className="hs3-pd-title-outer acenter"><span className="hs3-pd-title">{datas.title.rendered}</span><br />
                                        {/* <span className="hs3-pd-loc">{datas.acf.project_location}</span> */}
                                        </p>
                                    <div className="hs3-pd-outer">
                                        <div className="hs3-pd">
                                            <Image src={"img/ICON-01.svg"} alt="Icon" width={10} height={10} loading="lazy" className="hgt" />
                                            <span className="pos-re-b">{datas.acf.bhk}</span>
                                        </div>
                                        <div className="hs3-pd">
                                            <Image src={"img/ICON-02.svg"} alt="Icon" width={10} height={10} loading="lazy" className="hgt" />
                                            <span className="pos-re-b">{datas.acf.structural}</span>
                                        </div>
                                        <div className="hs3-pd">
                                            <Image src={"img/ICON-03.svg"} alt="Icon" width={10} height={10} loading="lazy" className="hgt" />
                                            <span className="pos-re-b">{datas.acf.buildup_area}</span>
                                        </div>
                                    </div>
                                    <Link className="project-cta cursor" href={`/projects/${datas.slug}`}><span>View project</span></Link>
                                </div>
                                </Link>
                            </article>
                            )
                        })
                    }
                   
                   
                </main>
            </div>
            <div className="margin-b-grid"></div>
        </div>
    );
}

export default Gridswiper;
