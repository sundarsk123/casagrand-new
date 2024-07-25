import React from 'react';

const Ourimagemobile = ({ onone, ontwo, onthree, onfour, onfive, filledPaths }) => {
    return (
        <div className='df-none'>
            <svg
                version="1.2"
                baseProfile="tiny"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 337.8 19.1"
                overflow="visible"
                xmlSpace="preserve"
            >
                <g>
                    <path fill={filledPaths.includes(2) ? "#ff9b28" : "#E5E5E5"} d="M11.6,5.8c-2.3,0-4.1,2-3.9,4.4c0.2,2.1,2,3.6,4.1,3.6H89v-8H11.6z" />
                    <rect x="89" y="5.8" fill={filledPaths.includes(3) ? "#ff9b28" : "#E5E5E5"} width="80" height="8" />
                    <rect x="168.9" y="5.8" fill={filledPaths.includes(4) ? "#ff9b28" : "#E5E5E5"} width="80" height="8" />
                    <path fill={filledPaths.includes(5) ? "#ff9b28" : "#E5E5E5"} d="M326.7,5.8h-77.9v8h77.9c2.2,0,3.9-1.8,3.9-4v0C330.7,7.5,328.9,5.8,326.7,5.8z" />
                </g>
                <g onClick={onone} className='cur-pon'>
                    <circle fill="#FFFFFF" cx="9" cy="9.8" r="8" onClick={onone} />
                    <path fill="#ff9b28" d="M9,0.8c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S14,0.8,9,0.8z M1,9.8c0-4.4,3.6-8,8-8s8,3.6,8,8s-3.6,8-8,8 S1,14.2,1,9.8z" />
                </g>
                <g onClick={ontwo} className='cur-pon'>
                    <circle fill="#FFFFFF" cx="89" cy="9.8" r="8" onClick={ontwo} />
                    <path fill={filledPaths.includes(2) ? "#ff9b28" : "#E5E5E5"} d="M89,0.8c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S93.9,0.8,89,0.8z M81,9.8c0-4.4,3.6-8,8-8s8,3.6,8,8s-3.6,8-8,8 S81,14.2,81,9.8z" />
                </g>
                <g onClick={onthree} className='cur-pon'>
                    <circle fill="#FFFFFF" cx="168.9" cy="9.8" r="8" onClick={onthree} />
                    <path fill={filledPaths.includes(3) ? "#ff9b28" : "#E5E5E5"}d="M168.9,0.8c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S173.9,0.8,168.9,0.8z M160.9,9.8c0-4.4,3.6-8,8-8s8,3.6,8,8 s-3.6,8-8,8S160.9,14.2,160.9,9.8z" />
                </g>
                <g onClick={onfour} className='cur-pon'>
                    <circle fill="#FFFFFF" cx="248.9" cy="9.8" r="8" onClick={onfour}/>
                    <path fill={filledPaths.includes(4) ? "#ff9b28" : "#E5E5E5"} d="M248.9,0.8c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S253.8,0.8,248.9,0.8z M240.9,9.8c0-4.4,3.6-8,8-8s8,3.6,8,8 s-3.6,8-8,8S240.9,14.2,240.9,9.8z" />
                </g>
                <g onClick={onfive} className='cur-pon'>
                    <circle fill="#FFFFFF" cx="328.8" cy="9.8" r="8" onClick={onfive} />
                    <path fill={filledPaths.includes(5) ? "#ff9b28" : "#E5E5E5"} d="M328.8,0.8c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S333.8,0.8,328.8,0.8z M320.8,9.8c0-4.4,3.6-8,8-8s8,3.6,8,8 s-3.6,8-8,8S320.8,14.2,320.8,9.8z" />
                </g>
            </svg>
        </div>
    );
}

export default Ourimagemobile;
