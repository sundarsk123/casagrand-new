import Intro from "@/app/HomeLayout/Intro/Intro";
export const revalidate = 10

async function getdata() {
    const response = await fetch(
      "https://api.casagrandperch.co.in/wp-json/wp/v2/pages?slug=home&_embed&acf_format=standard" , {  next: { revalidate: 10 }, }
    );
  
    const datas = await response.json();
    return datas;
  }



const Intros = async () => {
    const datas = await getdata();

    return (
        <>
          {
            datas.map((val)=>{
                return(
                    <Intro val={val} key={val.id}/>
                )
              
            })
          }  
        </>
    );
}

export default Intros;
