import Project from "./project";


async function getdata() {
    const response = await fetch(
      "https://api.casagrandperch.co.in/wp-json/wp/v2/pages?slug=our-projects" , { next: { revalidate: 3600 } }
    );
  
    const datas = await response.json();
    return datas;
  }

  


const Projectapi = async () => {
    const datas = await getdata();
 
    return (
        <div>
            {
                datas.map((val)=>{
                    return(
                        <>
                        <Project val={val} key={val.id}/>
                        </>
                    )
                })
            }
        </div>
    );
}

export default Projectapi;
