import Redefinings from "@/api/Homeapi/Redefinings/Redefinings";
import Intros from "@/api/Homeapi/Intro/Intros";
import HomeImages from "@/api/Homeapi/Intro/HomeImages";
import Navbar from "./Navbar/Navbar";
import Footerapi from "./Footer/Footerapi/Footerapi";


export default function Home() {

return (
   <>
   <Navbar/>
   <Intros/>
    <Redefinings/>
    <HomeImages/>
    <Footerapi/>
   </>
  );
}
