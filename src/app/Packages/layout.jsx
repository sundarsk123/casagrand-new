import Navbar from "../Navbar/Navbar";
import "./cost.css"

export const metadata = {
    title: "",
    description: "",
  };


  export default function RootLayout({ children }) {
    return (
      <div >
        <Navbar/>
        {children}
     
      </div>
    );
  }