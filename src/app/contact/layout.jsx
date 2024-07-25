import Navbar from "../Navbar/Navbar";
import Cfooter from "./cfooter";
import "./contact.css"
import "./font.css"

export const metadata = {
    title: "",
    description: "",
  };


  export default function RootLayout({ children }) {
    return (
      <div className="contact-pg">
        <Navbar/>
        {children}
        <Cfooter/>
      </div>
    );
  }