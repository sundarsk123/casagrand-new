import React from 'react';
import Style from './about.module.css'
import Navbar from '../Navbar/Navbar';
import AboutImg from './about-img/About-img';
import LastTwenty from './Last-Twenty/LastTwenty';
import Building from '../HomeLayout/Building/Building';
import HomeImages from '@/api/Homeapi/Intro/HomeImages';
import Footer from '../Footer/Footer';
import AboutIntro from './about-intro/aboutIntro';
import Builder from './Builder/Builder';
import Choose from './Choose/Choose';
import Vision from './Vision/Vision';


const Page = async () => {

    const response = await fetch('https://api.casagrandperch.co.in/wp-json/wp/v2/pages?slug=home&_embed&acf_format=standard', { next: { revalidate: 10 } })
    const data = await response.json();

    const responseabout = await fetch('https://api.casagrandperch.co.in/wp-json/wp/v2/pages?slug=about-us&_embed&acf_format=standard', { next: { revalidate: 10 } })
    const datas = await responseabout.json();
    return (
        <div className={Style.about_bg}>
            <Navbar />
            {datas?.map((aboutelm) => {
                return (<>
                    <AboutIntro
                        aboutheading={aboutelm?.acf?.about_section_1_title}
                    />
                    <Builder />
                    <AboutImg />
                    <LastTwenty
                        lastheading={aboutelm?.acf?.about_section_4_title}
                        thirdyeight={aboutelm?.acf?.about_section_4_counter_section[0]?.about_section_4_conter}
                        Fourty={aboutelm?.acf?.about_section_4_counter_section[1]?.about_section_4_conter}
                        onefourty={aboutelm?.acf?.about_section_4_counter_section[2]?.about_section_4_conter}
                        Msymbol={aboutelm?.acf?.about_section_4_counter_section[0]?.about_section_4_counter_symbols}
                        Ksymbol={aboutelm?.acf?.about_section_4_counter_section[1]?.about_section_4_counter_symbols}
                        plushsymbol={aboutelm?.acf?.about_section_4_counter_section[2]?.about_section_4_counter_symbols}
                        sq={aboutelm?.acf?.about_section_4_counter_section[0]?.about_counter_content}
                        Happy={aboutelm?.acf?.about_section_4_counter_section[1]?.about_counter_content}
                        Landmark={aboutelm?.acf?.about_section_4_counter_section[2]?.about_counter_content}
                        arunimg={aboutelm?.acf?.about_director_content[0]?.about_md_image.url}
                        about_md_name={aboutelm?.acf?.about_director_content[0]?.about_md_name}
                        about_md_designation={aboutelm?.acf?.about_director_content[0]?.about_md_designation}
                        about_md_description={aboutelm?.acf?.about_director_content[0]?.about_md_description}
                    />
                    <Choose
                        why_choose={aboutelm?.acf?.about_section_5_title}
                        zero={aboutelm?.acf?.about_section_5_type[0]?.about_section_5_type_count_content}
                        one={aboutelm?.acf?.about_section_5_type[1]?.about_section_5_type_count_content}
                        two={aboutelm?.acf?.about_section_5_type[2]?.about_section_5_type_count_content}
                        three={aboutelm?.acf?.about_section_5_type[3]?.about_section_5_type_count_content}
                        count_title={aboutelm?.acf?.about_section_5_type[0]?.about_section_5_type_count_title}
                        count_title1={aboutelm?.acf?.about_section_5_type[1]?.about_section_5_type_count_title}
                        count_title2={aboutelm?.acf?.about_section_5_type[2]?.about_section_5_type_count_title}
                        count_title3={aboutelm?.acf?.about_section_5_type[3]?.about_section_5_type_count_title}
                        choose_title={aboutelm?.acf?.about_section_5_type[0]?.about_section_5_type_title}
                        choose_title1={aboutelm?.acf?.about_section_5_type[1]?.about_section_5_type_title}
                        choose_title2={aboutelm?.acf?.about_section_5_type[2]?.about_section_5_type_title}
                        choose_title3={aboutelm?.acf?.about_section_5_type[3]?.about_section_5_type_title}
                        choose_description={aboutelm?.acf?.about_section_5_type[0]?.about_section_5_type_description}
                        choose_description1={aboutelm?.acf?.about_section_5_type[1]?.about_section_5_type_description}
                        choose_description2={aboutelm?.acf?.about_section_5_type[2]?.about_section_5_type_description}
                        choose_description3={aboutelm?.acf?.about_section_5_type[3]?.about_section_5_type_description}
                    />
                </>)
            })}
            {data.map((val) => { return (<><Building val={val} /></>) })}
            {datas?.map((aboutelm) => {
                return (<>
                    <Vision
                        about_vision_mission_title={aboutelm?.acf?.about_vision_mission_title}
                        vision_mission_sub_title={aboutelm?.acf?.vision_mission_content[0].vision_mission_sub_title}
                        vision_mission_sub_title1={aboutelm?.acf?.vision_mission_content[1].vision_mission_sub_title}
                        vision_mission_sub_title2={aboutelm?.acf?.vision_mission_content[2].vision_mission_sub_title}
                        vision_mission_description={aboutelm?.acf?.vision_mission_content[0].vision_mission_description}
                        vision_mission_description1={aboutelm?.acf?.vision_mission_content[1].vision_mission_description}
                        vision_mission_description2={aboutelm?.acf?.vision_mission_content[2].vision_mission_description}
                    />
                </>)
            })}
            <HomeImages />
            <Footer />
        </div>
    );
}

export default Page;
