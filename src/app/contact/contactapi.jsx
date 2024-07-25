import Contact from "./contact";



async function getdata() {
    const response = await fetch(
        "https://api.casagrandperch.co.in/wp-json/wp/v2/pages?slug=contact-us&_embed", { next: { revalidate: 3600 } }
    );

    const datas = await response.json();
    return datas;
}

const Contactapi = async () => {
    const datas = await getdata();
    return (
        <div>
            {
                datas.map((val) => {
                    return (
                        <Contact val={val} key={val.id}/>

                    )
                })
            }
        </div>
    );
}

export default Contactapi;
