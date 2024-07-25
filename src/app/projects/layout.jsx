
import Footer from "../Footer/Footer";
import "./project.css"
import "./font.css"
import Navbar from "../Navbar/Navbar";


export const metadata = {
    title: "",
    description: "",
  };


  export default function RootLayout({ children }) {
    return (
         <div><Navbar/>{children} </div>
    );
  }