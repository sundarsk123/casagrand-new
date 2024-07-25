import React from 'react';

const Labtopsvg = ({isActive}) => {
    return (
        <div>
            {/* #B4B4B4 */}
            {/* <svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32.4 37.5" overflow="visible" xmlSpace="preserve">
                <g id="Layer_2">
                    <g>
                        <path fill={isActive ? '#B4B4B4' : '#FFFFFF'} d="M30.8,6.8L14,0.2c-1.3-0.5-2.8,0.1-3.3,1.4L0.2,27.5c-0.5,1.3,0.1,2.7,1.4,3.3l16.8,6.6
                        c1.3,0.5,2.8-0.1,3.3-1.4l10.5-25.9C32.8,8.8,32.1,7.3,30.8,6.8z"/>
                        <path fill={isActive ? '#828385' : '#4A525A'} d="M28.4,4.4L10.6,0.9c-1.4-0.3-2.7,0.6-3,2L2.1,30.2c-0.3,1.4,0.6,2.7,2,2.9l17.8,3.5c1.4,0.3,2.7-0.6,3-2
                        l5.5-27.4C30.6,6,29.7,4.6,28.4,4.4z"/>
                        <path fill={isActive ? '#4A525A' : '#B4B4B4'} d="M25.3,2.3H7.2c-1.4,0-2.5,1.1-2.5,2.5v27.9c0,1.4,1.1,2.5,2.5,2.5h18.1c1.4,0,2.5-1.1,2.5-2.5V4.8
                        C27.8,3.4,26.7,2.3,25.3,2.3z"/>
                    </g>
                </g>
                <g id="Layer_3"></g>
            </svg> */}
              <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 38 38"
  >
    {/* <defs>
      <style>
        .cls-1 {
          fill: #b4b4b4;
        }

        .cls-1, .cls-2, .cls-3 {
          stroke-width: 0px;
        }

        .cls-2 {
          fill: #4a525a;
        }

        .cls-3 {
          fill: #828385;
        }
      </style>
    </defs> */}
    <g>
      <path   fill={isActive ? '#b4b4b4' : '#b4b4b4'} d="M34.4,3.6h-15.1c-1.2,0-2.1,1-2.1,2.3v26.1c0,1.3.9,2.3,2.1,2.3h15.1c1.2,0,2.1-1,2.1-2.3V5.9c0-1.3-.9-2.3-2.1-2.3Z"/>
      <path   fill={isActive ? '#b4b4b4' : '#b4b4b4'} d="M18.7,3.6H3.6c-1.2,0-2.1,1-2.1,2.3v26.1c0,1.3.9,2.3,2.1,2.3h15.1c1.2,0,2.1-1,2.1-2.3V5.9c0-1.3-.9-2.3-2.1-2.3Z"/>
    </g>
    <path   fill={isActive ? '#4a525a' : '#fff'} d="M26.1,1.5h-14.1c-1.1,0-1.9,1.2-1.9,2.7v29.7c0,1.5.9,2.7,1.9,2.7h14.1c1.1,0,1.9-1.2,1.9-2.7V4.2c0-1.5-.9-2.7-1.9-2.7Z"/>
  </svg>
        </div>
    );
}

export default Labtopsvg;
