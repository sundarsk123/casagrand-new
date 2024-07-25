import Card from "./card";
import Projectpagecard from "./projectpagecard";


async function getdata() {
    const response = await fetch(
      "https://dezvolta.in/casagrandperch/wp-json/wp/v2/projects?slug=&_embed" , { next: { revalidate: 3600 } }
    );
  
    const datas = await response.json();
    return datas;
  }

const Projectpageapi = async () => {
    const datas = await getdata();
    return (
        <div>
            {
                datas.map((val)=>{
                    return(
                       <Projectpagecard val={val} key={val.id}/>
                    )
                })
            }
        </div>
    );
}

export default Projectpageapi;
