import Activesection from "@/app/active/activesection";
import Projectactive from "@/app/active/projectactive";
import Oursection from "@/app/active/oursection";
import Buildsection from "@/app/active/buildsection";
// import Buildslidersec from "@/app/active/buildslidersec";
import Satifactionsection from "@/app/active/satifactionsection";
import Questionsection from "@/app/active/Questionsection";
import Ourbrandsection from "@/app/active/Ourbrandsection";
import Testmosection from "@/app/active/Testmosection";
export const revalidate = 10

async function getdata() {
    const response = await fetch(
      "https://api.casagrandperch.co.in/wp-json/wp/v2/pages?slug=home&_embed&acf_format=standard" , {  next: { revalidate: 10 }, } 
    );
   
    const datas = await response.json();
    return datas;
  }

const Redefinings = async () => {
    const datas = await getdata();
    return (
        <div>
            {
                datas.map((val)=>{
               return(
                <>
               
                 <Activesection val={val} key={val.acf.section_2_title}/>
                  <Projectactive val={val} key={val.acf.section_3_title}/>
                  <Oursection val={val} key={val.acf.section_4_progress[0].section_4_progress_title}/>
                  <Buildsection val={val} key={val.acf.section_5_title}/>
                  {/* <Buildslidersec val={val} key={val.acf.section_5_slider[0].section_5_slider_title}/> */}
                  <Questionsection val={val} key={val.id}/>
                  <Satifactionsection val={val} key={val.id}/>
                 
                  <Ourbrandsection val={val} key={val.id}/>
                  <Testmosection val={val} key={val.id}/>
               
                </>
               )
                })
            }
           
        </div>
    );
}

export default Redefinings;
