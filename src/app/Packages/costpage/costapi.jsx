import React from 'react';
import Costpage from './costpage';
import Cfooter from '@/app/contact/cfooter';



async function getdata() {
    const response = await fetch(
      "https://api.casagrandperch.co.in/wp-json/wp/v2/pages?slug=cost-calculator&_embed&acf_format=standard" , {  next: { revalidate: 10 }, } 
    );
  
    const datas = await response.json();
    return datas;
  }

const Costapi = async () => {
    const datas = await getdata();
 

    return (
        
        <div>
            
            {
            datas.map((val)=>{
                return(
                    <>
                     <Costpage val={val}/>
                    </>

                )

            })

            
        }
           

            <Cfooter/>
        </div>
    );
}

export default Costapi;