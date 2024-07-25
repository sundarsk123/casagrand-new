"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import "./blogpage.css"
import Link from 'next/link';
import ImageBlur from '@/app/ImageBlur/ImageBlur';
import Image from 'next/image';
import { Helmet } from 'react-helmet';

const Blogpage = () => {

    const title =  'Blog';
    const description = 'Default Description';

    const router = useRouter(); 
    const [blogpost, setblogPost] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const scroll = () => {
        const hs3Element = document.querySelector('.blog1');
        hs3Element.scrollIntoView({ behavior: 'smooth' });
    }

    const postsPerPage = 5; 
    const MAX_VISIBLE_PAGES = 6; 

    const renderPagination = () => {
        const totalPagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);
        const currentPageIndex = currentPage - 1;

        if (totalPages <= MAX_VISIBLE_PAGES) {
            return totalPagesArray.map((page) => (
                <button key={page} onClick={() => { handlePagination(page), scroll() }} className={page === currentPage ? 'active' : ''}>
                    {page}
                </button>
            ));
        }

        let startPageIndex = currentPageIndex - Math.floor((MAX_VISIBLE_PAGES - 3) / 2);
        let endPageIndex = currentPageIndex + Math.ceil((MAX_VISIBLE_PAGES - 3) / 2);

        if (startPageIndex <= 0) {
            startPageIndex = 0;
            endPageIndex = MAX_VISIBLE_PAGES - 2;
        }
        if (endPageIndex >= totalPages) {
            endPageIndex = totalPages - 1;
            startPageIndex = totalPages - (MAX_VISIBLE_PAGES - 3);
        }



        const paginationButtons = [];

        // Previous button
        paginationButtons.push(
            <button className='pre-btn' key="prev" onClick={() => handlePagination(currentPage - 1)} disabled={currentPage === 1}>
                <Image width={50} height={50} alt='nav1' src='/landingpage/previous-arrow.svg' className='pre-img' />
            </button>
        );

      

        if (startPageIndex !== 0) {
            paginationButtons.push(<span key="startEllipsis">...</span>);
        }
        if (startPageIndex > 2) {
            paginationButtons.push(<span key="startEllipsis">...</span>);
        }

        for (let i = startPageIndex; i <= endPageIndex; i++) {
            paginationButtons.push(
                <button key={totalPagesArray[i]} onClick={() => handlePagination(totalPagesArray[i])} className={`pagination-btn ${totalPagesArray[i] === currentPage ? 'active' : ''}`}>
                    {totalPagesArray[i]}
                </button>
            );
        }

        if (endPageIndex !== totalPages - 1) {
            paginationButtons.push(<span key="endEllipsis">...</span>);
        }

  
        paginationButtons.push(
            <button className='next-btn' key="next" onClick={() => handlePagination(currentPage + 1)} disabled={currentPage === totalPagesArray.length}>
                <Image width={50} height={50} alt='nav2' src='/landingpage/next-arrow.svg' className='next-img' />
            </button>
        );

        return paginationButtons;
    };



    useEffect(() => {

        router.push("/blog", undefined, { shallow: true })
    }, [])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(`https://api.casagrandperch.co.in/wp-json/wp/v2/posts?_embed&acf_format=standard&page=${currentPage}&per_page=${postsPerPage}`);
            setblogPost(response.data);
            setTotalPages(response.headers['x-wp-totalpages']);
        };

        fetchPosts();

        const interval = setInterval(fetchPosts, 1000);

        return () => clearInterval(interval);
    }, [router.asPath, currentPage]);

    const handlePagination = (page) => {
        setCurrentPage(page);
    };

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
             <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div className="costcalculatorlMain">
                <div className="blog1">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="font-100 text-upper text-center">BLOGS</h1>

                            </div>
                        </div>
                        <div className="blog-inner-div">
                            <div className="row">
                                <div className="col-md-12">
                                    {
                                        blogpost.map((data) => {
                                            return (
                                                <>

                                                    <div className="blog-grid">
                                                        <Link href={`/blog/${data?.slug}`} shallow>
                                                            <div className="row blog-grid-row">
                                                                <div className="col-md-6 ver-cen">
                                                                    <div className="blog-content-div">
                                                                        <h2 className="font-40">{data?.title?.rendered}</h2>
                                                                        <span className="blog-post-date">{data?.date.split('T')[0]}</span><span className="blog-post-author">by {data?._embedded['author']['0']?.name}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 ver-cen">
                                                                    <div className="blog-img-div">
                                                                        <ImageBlur
                                                                            width={462}
                                                                            height={280}
                                                                            src={data?._embedded['wp:featuredmedia']['0']?.source_url}
                                                                            alt='img'
                                                                            className="com-img"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>

                                                </>
                                            )
                                        })
                                    }
                                   
                                    {isScrolled ?
                                        <div className="pagination">
                                            {renderPagination()}
                                        </div>
                                        : ""}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogpage;
