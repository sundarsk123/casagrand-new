import React from 'react';
import Projectapi from './projectapi';
import Projectpagecard from './productpagecontent/projectpagecard';
import Footer from '../Footer/Footer';



const Page = () => {
    return (
        <div>
        <Projectapi/>
        <Projectpagecard/>
        <Footer/>
        </div>
    );
}

export default Page;
