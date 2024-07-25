"use client"
import OurSwiper from './OurSwiper';


const OurCustomer = ({ val }) => {

    return (
        <div>
            <div className="lp3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="lp3-heading-div animifs" >
                                <h2 className="font-40" >{val.acf.lp_section3_heading}</h2>

                                <p className='fn-three'>{val.acf.lp_section3_sub_title}</p>
                            </div>

                            <div className="lp3-div-outer">

                                <OurSwiper val={val} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurCustomer;
