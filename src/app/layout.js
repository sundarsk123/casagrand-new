import { Outfit } from "next/font/google";
import "./globals.css";
import "./bootstrap-mini.css"
import "./font.css"
import Scroll from "./Scroll/Scroll";
// import Head from "next/head";
// import 'bootstrap/dist/css/bootstrap.css'

const inter = Outfit({ subsets: ["latin"] ,display : 'swap' });


export const metadata = {
  title: "",
  description: "",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* className={inter.className} */}
      {/* <Head>    
      <link rel="icon" type="image/x-icon" href="img/logo.png"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500&display=swap" rel="stylesheet"/>
      </Head> */}
      <head>
      {/* <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500&display=swap" rel="stylesheet"/> */}
     </head>
      <body className={inter.className} >
        <Scroll/>
       <>{children}</>
      </body>
       {/* <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" async/> */}
       {/* <script src="https://dezvolta.b-cdn.net/epropelled/gsap.min.js" async/> */}
       {/* <script src="https://dezvolta.b-cdn.net/epropelled/ScrollTrigger.min.js" async/>
       <script src="https://dezvolta.b-cdn.net/minified/SplitText.min.js" async/> */}
        {/* <script src="https://dezvolta.b-cdn.net/minified/ScrollSmoother.min.js" async/> 
        <script src="https://unpkg.com/@studio-freight/lenis@1.0.39/dist/lenis.min.js" async/> */}
    </html>
  );
}
