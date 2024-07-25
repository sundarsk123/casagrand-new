import Components from './components';
import "../Landingpage.css"

const Page = async ({params :{slug}}) => {

  async function getdata() {
    const response = await fetch(
      `https://api.casagrandperch.co.in/wp-json/wp/v2/pages?parent=356&slug=${slug}&_embed&acf_format=standard` , { next: { revalidate: 3600 } }
    );
  
    const datas = await response.json();
    return datas;
  }
  
  const cities = await getdata();

    return (
        <>
            {
            cities.map((val)=>{
              return(
                < >
                    <Components val={val} key={val.id}/>
                </>
              )
            })
          }  
        </>
    );
}

export default Page;

  //  const router = useRouter();
  //   const [cities, setcities] = useState([]);
  
  //   useEffect(() => {
  //     // Always do navigations after the first render
  //     router.push(`/city/${slug}`, undefined, { shallow: true })
  //   }, [])
  
  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       const response = await axios.get(`https://dezvolta.in/casagrandperch/wp-json/wp/v2/pages?parent=356&slug=${slug}&_embed&acf_format=standard`);
  //       setcities(response.data);
  //     };
  
  //     fetchPosts();
  
  //     const interval = setInterval(fetchPosts, 1000);
  
  //     return () => clearInterval(interval);
  //   }, [router.asPath]);
