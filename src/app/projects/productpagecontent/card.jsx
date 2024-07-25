"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import "./card.css"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Card = ({ sent }) => {

  const [posts, setPosts] = useState([]);



  useEffect(() => {

    const fetchPosts = async () => {

      const response = await axios.get('https://dezvolta.in/casagrandperch/wp-json/wp/v2/projects?slug=&_embed&per_page=100');
      setPosts(response.data);
    };

    fetchPosts();
    const interval = setInterval(fetchPosts, 60000);

    return () => clearInterval(interval);
  }, []);

  const router = useRouter();


  return (

    <>
      <div className='row project-row'>

        {
          posts?.map((val) => {

            if (val?._embedded['wp:term']['0']?.[0]?.name?.includes(sent)) {
              return (

                <div className="col-sm-6 col-lg-4 col-xl-3 ps4-col" key={val?.id} >  
              {/* onClick={()=>{router.push(`/projects/${val.slug}`)}} key={val?.id} */}
                <Link href={`/projects/${val?.slug}`} shallow>
                 <div className="ps4-grid" >

                      <Image
                        width={293}
                        height={272}
                        className="ps4-grid-img card-img"
                        src={val?._embedded['wp:featuredmedia']['0']?.source_url}
                        alt="project Image" />

                      <p className="ps4-pd-title-outer acenter"><span className="ps4-pd-title">{val?.title?.rendered}</span><br />
                        {/* <span className="ps4-pd-loc">{val?.acf?.project_location}</span> */}
                        </p>
                      <div className="ps4-pd-outer">
                        <div className="ps4-pd">
                          <Image
                            width={15}
                            height={13}
                            src={"/project/icon/ICON-01.svg"}
                            alt="Icon" />{val?.acf?.bhk}
                        </div>
                        <div className="ps4-pd">
                          <Image
                            width={15}
                            height={13}
                            src={"/project/icon/ICON-02.svg"}
                            alt="Icon" />{val?.acf?.structural}
                        </div>
                        <div className="ps4-pd">
                          <Image
                            width={15}
                            height={13}
                            src={"/project/icon/ICON-03.svg"}
                            alt="Icon" />{val?.acf?.buildup_area}
                        </div>
                      </div>

                    </div>
                 

                </Link>
                </div>

              )
            }

          })
        }
      </div>
    </>
  );
}

export default Card;
