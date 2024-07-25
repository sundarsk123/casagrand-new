"use client"
import "./blogdetail.css"
import Link from 'next/link';
import { useState , useEffect} from 'react';
import Footactive from "./BlogFooter/footactive";
import ImageBlur from "@/app/ImageBlur/ImageBlur";
import Image from "next/image";
import { Helmet } from 'react-helmet';

const Blogdetail = ({ val }) => {

    const title =  'Blog-details';
    const description = 'Default Description';

    const [permalink, setPermalink] = useState('');
    useEffect(() => {
        // Fetch or calculate the permalink dynamically
        const currentUrl = window.location.href;
        setPermalink(currentUrl);
      }, []);

    const twitterShareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(permalink)}`;
    const linkedinShareLink = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(permalink)}`;
    const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(permalink)}`;
    const instagramShareLink = `https://www.instagram.com/?url=${encodeURIComponent(permalink)}`;
    return (
        <>
         <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div className="single-blog">
                <div className="single-blog1-bg">
                    <div className="single-blog1">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="single-blog-back-button-div">
                                        <Link href={"/blog"} className="single-blog-back-button"><span><Image width={50} height={50} alt="blogarrow" src="/blog/backicon/Blog-BACK.svg" className="arrow-img-back"/></span> Back to blog</Link>
                                    </div>
                                    <h1 className="font-sm text-upper">{val?.title?.rendered}</h1>
                                    <span className="blog-post-date">{val?.date.split('T')[0]}</span><span className="blog-post-author">by {val?._embedded['author']['0']?.name}</span>

                                    <div className="single-blog-img-div">
                                        {/* <img className="single-blog-img blod-img" src={val?._embedded['wp:featuredmedia']['0']?.source_url} /> */}

                                        <ImageBlur
                                        width={1000}
                                        height={607}
                                        src={val?._embedded['wp:featuredmedia']['0']?.source_url}
                                        className="single-blog-img blod-img"
                                        alt="img1"
                                        />
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="single-blog-section2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                            <div className=""
                    dangerouslySetInnerHTML={{ __html: val?.content?.rendered || '' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-blog-section3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="single-blog-section3-share-div">
                                    <p className="share-title">Share Link :</p><ul className="blog_social_list">
                                        {/* <li><Link href={facebookShareLink} target="_blank"><img src="/blog/shrareicon/sm-icon5.svg" alt="Icon" /></Link></li> */}
                                        <li><Link href={instagramShareLink} target="_blank"><img src="/blog/shrareicon/sm-icon2.svg" alt="Icon" /></Link></li>
                                        <li><Link href={linkedinShareLink} target="_blank"><img src="/blog/shrareicon/sm-icon4.svg" alt="Icon" /></Link></li>
                                        <li><Link href={twitterShareLink} target="_blank"><img src="/blog/shrareicon/twitter.svg" alt="Icon" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footactive/>
        </>
    );
}

export default Blogdetail;
