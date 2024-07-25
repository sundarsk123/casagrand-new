import React from 'react';
import StagesSlider from './Stages_slider';

const StagesOfJourney = ({val}) => {
    return (
        <div className='stage-b stage-mx-w'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                    <div className="heading-div">
                        <h2 className="font-40 mx-font">{val?.acf?.project_different_stages_title}</h2>
                        </div>
                        <div>
                            <StagesSlider val={val}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StagesOfJourney;
