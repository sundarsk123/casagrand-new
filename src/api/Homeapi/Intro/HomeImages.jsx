import HomeImage from '@/app/HomeLayout/HomeImage/HomeImage';
import React from 'react';
export const revalidate = 10

async function getdata() {
    const response = await fetch(
      "https://api.casagrandperch.co.in/wp-json/wp/v2/pages?slug=home&_embed&acf_format=standard" , {  next: { revalidate: 10 }, }
    );
  
    const datas = await response.json();
    return datas;
  }



const HomeImages = async () => {
    const datas = await getdata();
    return (
        <>
        {
          datas.map((val)=>{
              return(
                <HomeImage val={val} key={val.id}/>
              )
            
          })
        }  
      </>
    );
}

export default HomeImages;
