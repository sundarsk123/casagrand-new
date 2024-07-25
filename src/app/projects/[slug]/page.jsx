// "use client"
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';
import Projectdetail from './projectdetail';
import "./detail.css"
import Footer from '@/app/Footer/Footer';
import Link from 'next/link';
export const revalidate = 10


const Page = async ({params :{slug}}) => {

async function getdata() {
  const response = await fetch(
    `https://api.casagrandperch.co.in/wp-json/wp/v2/projects?slug=${slug}&_embed&acf_format=standard&per_page=100` , 
    {  next: { revalidate: 10 }, }
  );

  const datas = await response.json();

 
  return datas;
}

const datas = await getdata();
return (
        <>
           {
            datas.map((val)=>{
              return( 

                <div key={val.id}>
                      <Projectdetail val={val} key={val.id}/>
                        <Footer/>
               </div>  
             )
            })
          } 
      
        </>
      );
    };



export default Page;


  //{params :{slug}}

  // const [post, setPost] = useState([]); 
  
  

  //   useEffect(() => {
  
  //     const fetchPosts = async () => {
       
  //         const response = await axios.get(``);
  //         setPost(response.data);
  //        };
  
  //     fetchPosts();
  //     const interval = setInterval(fetchPosts, 1000);
  
  //     return () => clearInterval(interval);
  //   }, []);

  //  ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

//   const router = useRouter();
//   const [post, setPost] = useState([]);

//   useEffect(() => {
//     // Always do navigations after the first render
//     router.push(`/projects/${slug}`, undefined, { shallow: true })
//   }, [])

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await axios.get(`https://dezvolta.in/casagrandperch/wp-json/wp/v2/projects?slug=${slug}&_embed&acf_format=standard`);
//       setPost(response.data);
//     };

//     fetchPosts();

//     const interval = setInterval(fetchPosts, 1000);

//     return () => clearInterval(interval);
//   }, [router.asPath]);
