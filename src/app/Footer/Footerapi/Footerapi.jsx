import Footer from "../Footer";


async function getdata() {
    const response = await fetch(
      "https://dezvolta.in/casagrandperch/wp-json/acf/options/theme-general-settings?&_embed&acf_format=standard" , { next: { revalidate: 3600 } }
    );
  
    const datas = await response.json();
    return datas;
  }

const Footerapi = async () => {
    const datas = await getdata();
    return (
        <>
      <Footer datas={datas} key={datas.id}/>
        </>
    );
}

export default Footerapi;
